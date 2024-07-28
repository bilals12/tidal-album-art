import * as s from "@tidal-music/auth";
import * as f from "@tidal-music/player";
import { createCatalogueClient as m } from "@tidal-music/catalogue";
import d from "sharp";
async function g() {
  return await s.init({
    clientId: "CxoG87mcQHf4G0Ea",
    clientSecret: "elYrci3u3Bt9KyRmgXvwDQrS5rTnW4rbIavT4uhaQks=",
    credentialsStorageKey: "tidal_album_art_credentials"
  }), f.setCredentialsProvider(s.credentialsProvider), m(s.credentialsProvider);
}
async function y(a, o) {
  const { data: t, error: e } = await a.GET("/albums/{id}", {
    params: {
      path: { id: o },
      query: { countryCode: "CA" }
    }
  });
  if (e)
    return console.error("error fetching album details:", e), null;
  const r = t.data.attributes.imageLinks;
  return r && r.length > 0 ? r[r.length - 1].href : null;
}
async function b(a) {
  const t = await (await fetch(a)).arrayBuffer(), e = Buffer.from(t), r = await d(e).resize(10, 10).raw().toBuffer({ resolveWithObject: !0 }), c = [];
  for (let n = 0; n < 10; n++) {
    const u = [];
    for (let i = 0; i < 10; i++) {
      const l = (n * 10 + i) * 3;
      u.push([r.data[l], r.data[l + 1], r.data[l + 2]]);
    }
    c.push(u);
  }
  return c;
}
async function h() {
  const a = await g(), t = await y(a, "4141352");
  if (t) {
    console.log("album art URL:", t);
    const e = await b(t);
    console.log("10x10 RGB array:"), console.log(JSON.stringify(e, null, 2));
  } else
    console.log("failed to fetch album art");
}
h().catch(console.error);
