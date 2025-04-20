import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function Login() {
  return (
    <div>
      <h1>Log In</h1>
      <SignIn />
    </div>
  );
}

export default Login;
