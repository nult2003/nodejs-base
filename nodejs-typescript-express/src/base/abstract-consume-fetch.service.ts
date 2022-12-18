// reference: https://bobbyhadz.com/blog/typescript-http-request 
import fetch from 'node-fetch';
import { ApiResult } from './api.result';

interface Header {
    name: string;
    value?: string;
    delegate?: () => string | null;
}

abstract class FetchResfulConsumeBase {
    protected isUnstableApi = true;

    protected rootUrl = '';
    private headers: Header[] = [];
    constructor() {
        this.rootUrl = '/';//window.location.href.includes('host') ? '' : '/';
    }

    protected async get<T = unknown>(url: string) {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          // 👇️ const result: GetUsersResponse
          const result = (await response.json());
      
          console.log('result is: ', JSON.stringify(result, null, 4));
      
          return result;
    }
    protected async post<T = unknown>(url: string, data?: unknown) {
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          // 👇️ const result: GetUsersResponse
          const result = (await response.json());
      
          console.log('result is: ', JSON.stringify(result, null, 4));
      
          return result;
    }

    protected async put<T = unknown>(url: string, data: unknown) {
        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          // 👇️ const result: GetUsersResponse
          const result = (await response.json());
      
          console.log('result is: ', JSON.stringify(result, null, 4));
      
          return result;
    }

    protected async patch<T = unknown>(url: string, data: unknown) {
        const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: UpdateUserResponse
        const result = (await response.json());

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    }

    protected async delete<T = unknown>(url: string) {
        const response = await fetch(url, {
        method: 'DELETE',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        console.log('User deleted successfully');

        return 'user deleted successfully';
    }

}

export default FetchResfulConsumeBase;