import React from 'react';
import LoginButton from '../components/LoginButton';

export default function Login({ location, history, match }) {
  return (
    <div>
      <h1>Login</h1>
      <LoginButton history='history' />
    </div>
  );
}
