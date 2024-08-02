import { FC, ReactNode } from 'react';
import { Header } from '../Header';

interface Props {
    id: string;
    children: ReactNode;
    hideHeader?: boolean;
}

const PageLayout: FC<Props> = ({ id, children, hideHeader = false }) => {
    return (
        <div id={id} className='page'>
            {!hideHeader && <Header />}
            {children}
        </div>
    );
}

export default PageLayout;