import React, { useState } from 'react';
import { UserContext } from './Contexts';

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: 'Munim'})
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;