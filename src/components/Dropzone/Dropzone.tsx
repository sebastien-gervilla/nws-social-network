import { FC } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
    onDrop: (files: File[]) => void;
}

const Dropzone: FC<Props> = ({ onDrop }) => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={'dropzone' + (isDragActive ? ' dropping' : '')}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Déposez les fichiers ici...</p>
            ) : (
                <p>Glissez et déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
            )}
        </div>
    );
}

export default Dropzone;