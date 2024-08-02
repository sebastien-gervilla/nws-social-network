import { Request } from "@/services/api/helpers/request";

/**
 * @returns If it succeeded.
*/
export const login = async (code: string) => {
    const response = await Request.post(URL, {
        code
    });
    
    return response;
}

const URL = '/user/login'