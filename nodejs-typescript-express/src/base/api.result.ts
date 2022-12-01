
export interface ApiResult<T> { // from Api.Common.ApiResult.cs
    succesful: boolean;
    reason?: string;
    code?: number;
    data?: T;
}

export type ApiResultPromise<T> = Promise<ApiResult<T>>
