import React, {memo} from 'react';

//Component Modules
import LoginScreen from './LoginScreen';
import LoginProvider from './LoginProvider';

const Login = memo(({navigation}) => {
  return (
    <LoginProvider navigation={navigation}>
      <LoginScreen navigation={navigation} />
    </LoginProvider>
  );
});

export default Login;
