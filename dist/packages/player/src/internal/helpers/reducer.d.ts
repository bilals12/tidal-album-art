export declare function createReducer<P, N extends string>(name: N, defaultPayload: P): Promise<(newData: {
    streamingSessionId: string;
} & Partial<P>) => Promise<{
    name: N;
    payload: P;
    streamingSessionId: string;
} | undefined>>;
