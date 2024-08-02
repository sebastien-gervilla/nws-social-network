export default class Request {

    private static _getOptions(options: RequestInit): RequestInit {
        return {
            ...defaultOptions,
            ...options,
            headers: {
                ...defaultOptions.headers,
                ...options.headers
            }
        }
    }

    static async get<DataType>(url: URL | RequestInfo, options: RequestInit = defaultOptions): Promise<ApiResponse<DataType>> {
        try {
            const response = await fetch(API_URL + url, Request._getOptions(options));
            const { ok, status, statusText } = response;

            const responseInfos = { ok, status, statusText };

            if (!ok || status === 204)
                return responseInfos;

            return {
                ...responseInfos,
                body: await response.json()
            };
        } catch (error) {
            console.log(`\x1b[33mError while fetching with url : ${url}\x1b[37m`);
            console.log(error);
        }

        return defaultResponse;
    }

    static async make<T>(url: URL | RequestInfo, method: Method, data?: T, options: RequestInit = defaultOptions): Promise<ApiResponse<any>> {
        const mergedOptions = Request._getOptions({
            ...options,
            method,
            body: data instanceof FormData 
                ? data
                : JSON.stringify(data)
        })
        
        try {
            const response = await fetch(API_URL + url, mergedOptions);
            const { ok, status, statusText } = response;

            const responseInfos = { ok, status, statusText, data: null, meta: {} };

            if (!ok || status === 204)
                return responseInfos;

            return {
                ...responseInfos,
                body: await response.json()
            };
        } catch (error) {
            console.log(`\x1b[33mError while fetching with url : ${url}\x1b[37m`);
            console.log(error);
        }

        return defaultResponse;
    }

    static async post<T>(url: URL | RequestInfo, data?: T, options: RequestInit = defaultOptions) {
        return await Request.make(url, 'POST', data, options);
    }

    static async put<T>(url: URL | RequestInfo, data?: T, options: RequestInit = defaultOptions) {
        return await Request.make(url, 'PUT', data, options);
    }

    static async delete(url: URL | RequestInfo, options: RequestInit = defaultOptions) { // TODO: Separate function
        return await Request.make(url, 'DELETE', undefined, options);
    }
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

const defaultOptions: RequestInit = {
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include'
}

const defaultResponse: ApiResponse<never> = {
    ok: false,
    status: 404,
    statusText: "Error"
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse<T> {
    ok: boolean
    status: number
    statusText: string
    body?: T
}