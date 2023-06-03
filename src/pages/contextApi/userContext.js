import React, { createContext, useState ,useEffect} from 'react';
import { auth } from '../../Config/firebaseConfig';
const UserContext = createContext();

const UserProvider = ({ children }) => {


  const [userData, setUserData] = useState('');

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider}