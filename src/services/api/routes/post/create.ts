import { Responses } from "@/services/interfaces/responses";

/**
 * @returns If it succeeded.
*/
export const create = async (post: Responses.Post.Create) => {
    const formData = new FormData();
    formData.append('content', post.content);

    for (const image of post.images)
        formData.append('image', image);

    const response = await fetch(`http://localhost:8000${URL}`, {
        credentials: 'include',
        body: formData,
        method: 'POST'
    });
    
    return response.status === 201;
}

const URL = '/post'