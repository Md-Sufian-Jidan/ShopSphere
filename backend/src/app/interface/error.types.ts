export interface TErrorSources {
  path: string;
  message: string;
}

export interface TGenericsErrorResponse {
  statusCode: number;
  message: string;
  errorSources?: TErrorSources[];
}
