import React, { useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const AccountInfo = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      <h4>AccountInfo | Testing Context | useContext() Hooks</h4>
      <div>
        {auth?.isLoggedIn ? (
          <>
            <p>Name: {auth.fullName}</p>
            <p>Username: {auth.username}</p>
            <p>Last Login: {auth.lastLogin}</p>
          </>
        ) : (
          <div className="alert alert-danger">Please Login to acess your acoount info</div>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;