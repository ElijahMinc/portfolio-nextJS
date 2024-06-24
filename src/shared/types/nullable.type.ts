export type NullableValues<T> = {
  [K in keyof T]: T[K] | null;
};

export type NullableArray<T extends readonly any[]> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? NullableValues<T[K]>
    : T[K];
};
