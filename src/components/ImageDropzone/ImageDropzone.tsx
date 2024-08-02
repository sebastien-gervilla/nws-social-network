import { FC } from 'react';
import { Dropzone } from '../Dropzone';

interface Props {
    files: File[];
    onDrop: (files: File[]) => void;
}

const ImageDropzone: FC<Props> = ({ files, onDrop }) => {

    console.log(files);


    const displayImages = () => {
        const preview: JSX.Element[] = [];
        for (const file of files) {
            const urlObject = URL.createObjectURL(file);
            preview.push(
                <div
                    key={file.name}
                    className="preview-image"
                >
                    <img
                        src={urlObject}
                        alt={file.name}
                    />
                </div>
            )
        }

        return preview;
    }

    return (
        <div className='image-dropzone'>
            <Dropzone
                onDrop={onDrop}
            />
            <div className="preview">
                {displayImages()}
            </div>
        </div>
    );
}

export default ImageDropzone;