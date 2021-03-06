import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Emploees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Empolyee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Empolyee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
