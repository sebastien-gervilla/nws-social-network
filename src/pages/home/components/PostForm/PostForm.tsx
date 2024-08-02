import { FormTextarea, ImageDropzone } from '@/components';
import { api } from '@/services/api';
import { Responses } from '@/services/interfaces/responses';
import { FC, useState } from 'react';

interface Props {
    onSuccess: () => void;
}


const PostForm: FC<Props> = ({ onSuccess }) => {

    const [isLoading, setIsLoading] = useState(false);

    const [post, setPost] = useState(defaultPost);

    const handleChanges = (name: string, value: (typeof post)[keyof typeof post]) => {
        setPost(current => ({
            ...current,
            [name]: value
        }));
    }

    const handleValidate = async () => {
        setIsLoading(true);
        const success = await api.post.create(post);
        setIsLoading(false);
        if (success) onSuccess();
    }

    return (
        <div className='post-form form'>
            <h2 className='title'>Post</h2>
            <div className="form-row">
                <FormTextarea
                    label='Contenu'
                    value={post.content}
                    name='content'
                    onChange={handleChanges}
                />
            </div>
            <div className="form-row">
                <ImageDropzone
                    files={post.images}
                    onDrop={(files) => handleChanges('images', files)}
                />
            </div>
            <button
                className='animated'
                onClick={handleValidate}
                disabled={isLoading}
            >
                Valider
            </button>
        </div>
    );
}

const defaultPost: Omit<Responses.Post.Create, 'createdBy'> = {
    content: '',
    images: []
}

export default PostForm;