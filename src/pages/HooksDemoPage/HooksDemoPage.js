import React from 'react';
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import Todos from './Todos/Todos';

 const HooksDemoPage = () => {

    return (
      <div>
        HooksDemoPage
        <MyAccount />

        <hr />
        <h2>useEffect() | Demo</h2>
        <Blog />

        <hr />
        <h2>useRef() and useReducer() | Hook Demo</h2>
        <Todos />
      </div>
    );
  };

export default HooksDemoPage;