import React from 'react';
import applyStyles from '../../hoc/applyStyles';
import LastLogin from './LastLogin/LastLogin';
import Bye from './Bye/Bye';
import Hello from './Hello/Hello';
import { Helmet } from 'react-helmet';
import ErrorBoundry from '../../containers/shared/ErrorBoundry/ErrorBoundry';
import Calculator from './Calculator/Calculator';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hoc Demo</title>
      </Helmet>
      <h2>Render Props</h2>
      <LastLogin>
        <p>Last Login: 2/Jan/2023, 8PM</p>
        <p>Updated at: 10 minuts ago</p>
      </LastLogin>

      <LastLogin>
        <p>You are logged out. Do you want to login again</p>
        <p>Login Feature not built in this app</p>
      </LastLogin>

      <hr />
      <h2>Higher Order Components</h2>
      <StyledHello name="Jay" />
      <StyledBye name="Jay" />

      <hr />
      <h2>Error Boundry Demo</h2>
      <ErrorBoundry>
        <Calculator />
      </ErrorBoundry>
    </div>
  );
};

export default HocDemoPage;
