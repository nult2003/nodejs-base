import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResult } from './api.result';

interface Header {
    name: string;
    value?: string;
    delegate?: () => string | null;
}

abstract class ResfulConsumeBase {
    protected isUnstableApi = true;

    protected rootUrl = '';
    protected client: AxiosInstance;
    private headers: Header[] = [];
    constructor() {
        this.rootUrl = '/';//window.location.href.includes('host') ? '' : '/';
        this.client = axios.create();
        this.client.interceptors.request.use((config) => this.setHeaders(config));
    }

    protected async get<T = unknown>(url: string): Promise<ApiResult<T>> {
        const req = this.client.get<ApiResult<T>>(url);
        return this.wrap('get', url, req);
    }
    protected async post<T = unknown>(url: string, data?: unknown): Promise<ApiResult<T>> {
        const req = this.client.post<ApiResult<T>>(url, data);
        return this.wrap('post', url, req);
    }

    protected async put<T = unknown>(url: string, data: unknown): Promise<ApiResult<T>> {
        const req = this.client.put<ApiResult<T>>(url, data);
        return this.wrap('put', url, req);
    }

    protected async patch<T = unknown>(url: string, data: unknown): Promise<ApiResult<T>> {
        const req = this.client.post<ApiResult<T>>(url, data);
        return this.wrap('patch/post', url, req);
    }

    protected async delete<T = unknown>(url: string): Promise<ApiResult<T>> {
        const req = this.client.delete<ApiResult<T>>(url);
        return this.wrap('delete', url, req);
    }

    private async wrap<T>(verb: string, url: string, call: Promise<AxiosResponse<ApiResult<T>>>): Promise<ApiResult<T>> {
        verb = verb.toUpperCase();
        try {
            const res = await call;
            console.log("wrap: " + res.data);
            if (res.status !== 200) {
                throw new Error(`An API response`);
            }
            if (res.status !== 200) {
                const message = `${verb} ${url} - Not successful;`;
                console.warn(message);
            }
            return res.data;
        }
        catch (err) {
            const res = err.response;
            const code = res && res.status;
            const data = res && res.data;
            let reason = (data && data.reason) || err.message;
            if (code === 500 && typeof data === 'string') {
                reason = data;
            }

            return {
                succesful: false,
                code,
                reason,
            };
        }
    }

    protected addHeader(name: string, value: string): void {
        if (this.isHeaderAlreadyAdded(name)) {
            console.warn(`Duplicate header name ${name}`);
            return;
        }
        this.headers.push({ name, value });
    }

    protected addDynamicHeader(name: string, delegate: () => string | null): void {
        if (this.isHeaderAlreadyAdded(name)) {
            console.warn(`Duplicate header name ${name}`);
            return;
        }
        this.headers.push({ name, delegate });
    }

    private isHeaderAlreadyAdded(name: string): boolean {
        return this.headers.find((h) => h.name === name) !== undefined;
    }

    protected setHeaders(config: AxiosRequestConfig): AxiosRequestConfig {
        for (const header of this.headers) {
            const name = header.name;
            const value = header.value || (header.delegate && header.delegate());
            if (value === null) {
                console.debug(`Skipping header '${name}' since value is null`);
                continue;
            }
            // console.debug(`WebService.setHeaders: Setting header N='${header.name}', V='${value}', D=${!!header.delegate} for request '${config.url}'`);
            config.headers[name] = value;
        }
        return config;
    }
}

export default ResfulConsumeBase;