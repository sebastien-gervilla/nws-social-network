import { AuthContext } from '@/contexts/AuthContext';
import { FC, useContext } from 'react';

const Header: FC = () => {

    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <header className='application-header'>
            <div className="brand">
                NWS Social Network
            </div>
            <div className="navigation">

            </div>
            <div className="user">
                <p>{user.firstName} {user.lastName}</p>
            </div>
        </header>
    );
}

export default Header;