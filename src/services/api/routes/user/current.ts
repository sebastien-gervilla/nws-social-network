import { Request } from "@/services/api/helpers/request";
import { Responses } from "@/services/interfaces/responses";

/**
 * @returns If it succeeded.
*/
export const current = async () => {
    const response = await Request.get<Responses.User.Entity>(URL);
    
    return response.status === 200
        ? response.body
        : null;
}

const URL = '/user/current'