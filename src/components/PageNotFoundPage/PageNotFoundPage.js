import React from 'react';
import { useNavigate } from 'react-router-dom';

// page change using useNavigate
const PageNotFoundPage = () => {
  let navigate = useNavigate();

  function handleNavigateToHome() {
    navigate('/');
  }

  return (
    <div>
      <h1>Oops!</h1>
      <h2>404 Error | Page Not Found</h2>
      <button type="button" onClick={handleNavigateToHome}>
        Go home
      </button>
    </div>
  );
};

export default PageNotFoundPage;
