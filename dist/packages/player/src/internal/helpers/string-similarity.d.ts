export declare function findBestMatch(mainString: string, targetStrings: Array<string>): {
    bestMatch: {
        rating: number;
        target: string;
    } | undefined;
    bestMatchIndex: number;
    ratings: {
        rating: number;
        target: string;
    }[];
};
