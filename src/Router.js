import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => console.log('right!')}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Emploees"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
