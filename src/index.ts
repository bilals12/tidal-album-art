import sharp from 'sharp';

function setupGlobalThisD() {
    globalThis.D = globalThis;
    globalThis.D.URL = globalThis.URL;
    globalThis.D.Blob = class Blob {};
    globalThis.D.atob = (str) => Buffer.from(str, 'base64').toString('binary');
    globalThis.D.btoa = (str) => Buffer.from(str, 'binary').toString('base64');

    // Ensure URL.createObjectURL is defined
    if (!globalThis.D.URL.createObjectURL) {
        globalThis.D.URL.createObjectURL = () => 'blob:mock-object-url';
    }
    if (!globalThis.D.URL.revokeObjectURL) {
        globalThis.D.URL.revokeObjectURL = () => {};
    }

    // Logging to verify setup
    console.log('globalThis.D:', globalThis.D);
    console.log('globalThis.D.URL:', globalThis.D.URL);
    console.log('globalThis.D.URL.createObjectURL:', globalThis.D.URL.createObjectURL);
    console.log('globalThis.D.URL.revokeObjectURL:', globalThis.D.URL.revokeObjectURL);
}

console.log('Before importing player, globalThis.D:', globalThis.D);
console.log('Before importing player, globalThis.D.URL:', globalThis.D.URL);
console.log('Before importing player, globalThis.D.URL.createObjectURL:', globalThis.D.URL.createObjectURL);

async function initializeSDK() {
    setupGlobalThisD(); // Ensure globalThis.D is set up before import

    const auth = await import('@tidal-music/auth');
    const Player = await import('@tidal-music/player');
    const { createCatalogueClient } = await import('@tidal-music/catalogue');
    const sharp = (await import('sharp')).default;

    setupGlobalThisD(); // Ensure globalThis.D is set up after import

    console.log('After importing player, globalThis.D:', globalThis.D);
    console.log('After importing player, globalThis.D.URL:', globalThis.D.URL);
    console.log('After importing player, globalThis.D.URL.createObjectURL:', globalThis.D.URL.createObjectURL);

    await auth.init({
        clientId: 'CxoG87mcQHf4G0Ea',
        clientSecret: 'elYrci3u3Bt9KyRmgXvwDQrS5rTnW4rbIavT4uhaQks=',
        credentialsStorageKey: 'tidal_album_art_credentials'
    });

    Player.setCredentialsProvider(auth.credentialsProvider);
    const catalogueClient = createCatalogueClient(auth.credentialsProvider);

    return { catalogueClient, sharp };
}

async function getAlbumArt(catalogueClient, albumId) {
    const { data, error } = await catalogueClient.GET('/albums/{id}', {
        params: {
            path: { id: albumId },
            query: { countryCode: 'CA' },
        },
    });
    if (error) {
        console.error('error fetching album details:', error);
        return null;
    }

    const imageLinks = data.data.attributes.imageLinks;
    if (imageLinks && imageLinks.length > 0) {
        return imageLinks[imageLinks.length - 1].href;
    }
    return null;
}

async function createRGBArray(imageUrl: string, sharpInstance: typeof sharp) {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const image = sharpInstance(buffer);
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    const  rgbArray = [];
    for (let i = 0; i < data.length; i += 3) {
        rgbArray.push([data[i], data[i + 1], data[i + 2]]);
    }
    return rgbArray;
    //const image = await sharp(buffer).resize(10, 10).raw().toBuffer({ resolveWithObject: true });

//     const rgbArray = [];
//     for (let y = 0; y < 10; y++) {
//         const row = [];
//         for (let x = 0; x < 10; x++) {
//             const i = (y * 10 + x) * 3;
//             row.push([image.data[i], image.data[i + 1], image.data[i + 2]]);
//         }
//         rgbArray.push(row);
//     }
//     return rgbArray;
// }
}

async function main() {
    const { catalogueClient, sharp } = await initializeSDK();
    // testing with hardcoded album id
    const albumId = '4141352';
    const albumArtUrl = await getAlbumArt(catalogueClient, albumId);

    if (albumArtUrl) {
        console.log('album art URL:', albumArtUrl);
        const rgbArray = await createRGBArray(albumArtUrl, sharp);
        console.log('10x10 RGB array:');
        console.log(JSON.stringify(rgbArray, null, 2));
    } else {
        console.log('failed to fetch album art');
    }
}
main().catch(console.error);