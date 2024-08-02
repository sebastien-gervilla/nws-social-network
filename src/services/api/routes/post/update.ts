import { Request } from "@/services/api/helpers/request";
import { Responses } from "@/services/interfaces/responses";

/**
 * @returns If it succeeded.
*/
export const update = async (post: Responses.Post.Put) => {
    const response = await Request.post<Responses.Post.Put>(URL, post);
    
    return response.status === 204;
}

const URL = '/post/update'