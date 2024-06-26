// Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="container mx-auto">
      <h1 className="bg-blue-950 text-white font-medium py-2 flex justify-between items-center pl-4 text-lg">Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
