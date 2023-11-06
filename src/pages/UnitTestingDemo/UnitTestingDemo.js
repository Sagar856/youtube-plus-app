import React from 'react';
import AccountInfo from './AccountInfo/AccountInfo';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import ContactForm from './ContactForm/ContactForm';
import CounterUnitTesting from './CounterUnitTesting/CounterUnitTesting';
import Posts from './Posts/Posts';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples</h1>
      <a href="https://reactjs.org/docs/getting-started.html">Unit Testing Reference</a>

      <hr />
      <CompanyInfo foundedYear="1998" employeeCount="4 lac" />

      <hr />
      <CounterUnitTesting />

      <hr />
      <ThemeSwitcher />

      <hr /> 
      <ContactForm />

      <hr />
      <Users />

      <hr />
      <Posts />

      <hr />
      <AccountInfo />
    </div>
  );
};

export default UnitTestingDemo;
