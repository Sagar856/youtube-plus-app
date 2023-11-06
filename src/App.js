// Components has 3 parts
/*
  1. import section
  2. component definition section
  3. export section
*/

import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundry from './containers/shared/ErrorBoundry/ErrorBoundry';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import cartReducer from './reducers/todoReducer/cartReducer';
import { appRoutes } from './routes/appRoutes/appRoutes';
import { AuthContext } from './contexts/AuthContext';

// component defination
function App() {
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '5/Jan/2023'
  };

  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);

  const cartData = {
    cartState: cartState,
    cartDispatch: cartDispatch
  };

  const auth = {
    isLoggedIn: true,
    username: 'johnw',
    fullName: 'John Williams',
    lastLogin: '22/Sep/2022'
  };

  // It must return JSX
  return (
    <AuthContext.Provider value={auth}>
    {/* step 2 of CartContext */}
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <main className="container mt-5 pt-3">
            <ErrorBoundry>
              {/* step 2 of context API */}
              <PageContext.Provider value={userStatus}>
                {appRoutes}
              </PageContext.Provider>
            </ErrorBoundry>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
