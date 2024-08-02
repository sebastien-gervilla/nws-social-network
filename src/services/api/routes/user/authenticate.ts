import { Request } from "@/services/api/helpers/request";

/**
 * @returns If it succeeded.
*/
export const authenticate = async (code: string) => {
    const response = await Request.post(URL, {
        code
    });
    
    return response.status === 200
        ? response.body
        : null;
}

const URL = '/user/authenticate'