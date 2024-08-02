import { Header, Modal, PageLayout } from '@/components';
import { useModal } from '@/hooks';
import { FC } from 'react';
import { PostForm } from './components';
import { useFetch } from '@/hooks/useFetch';
import { Responses } from '@/services/interfaces/responses';

const HomePage: FC = () => {

    const modal = useModal();

    const postsResponse = useFetch<Responses.Post.Get>('/post', []);

    const displayPosts = () => {
        return postsResponse.body.map(post => (
            <div
                key={post._id}
                className="post"
            >
                <div className="informations">
                    <div className="gravatar">

                    </div>
                    <div className="author">
                        <p>{post.createdBy.firstName} {post.createdBy.lastName}</p>
                        <p>{new Date(post.createdAt).toLocaleString()}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{post.content}</p>
                </div>
                <div className="images">
                    {getPostImages(post)}
                </div>
            </div>
        ))
    }

    const getPostImages = (post: Responses.Post.Entity) => {
        return post.images.map(image => (
            <div key={image.url} className="image">
                <img
                    src={`${import.meta.env.VITE_API_URL}${image.url}`}
                    alt={image.url}
                    loading='lazy'
                />
            </div>
        ));
    }

    const handleCreatePost = () => {
        modal.openWith(
            <PostForm
                onSuccess={() => {
                    modal.close();
                    postsResponse.refresh();
                }}
            />
        );
    }

    return (
        <PageLayout id='home-page'>
            <Modal {...modal} />
            <div className="main-area">
                <div className="main-content">
                    <div className="header">
                        <button
                            className='animated'
                            onClick={handleCreatePost}
                        >
                            Poster
                        </button>
                    </div>
                    <div className="posts">
                        {displayPosts()}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;