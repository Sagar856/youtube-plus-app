import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // Step 3 of context API
  // Receive the data from App.js using useContext() Hook
  const context = useContext(PageContext);
  console.log(context);
  return (
    <div>
      <Helmet>
        <title>Contact-Us</title>
      </Helmet>
      <h1>ContactUsPage</h1>
      <p>Is the user Authenticated? {context.isLoggedIn ? 'Yes' : 'No'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  );
};

export default ContactUsPage;
