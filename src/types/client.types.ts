// this should be standardized
export type ApiResponse<T> = {
  [key in keyof T]: T[key];
};
