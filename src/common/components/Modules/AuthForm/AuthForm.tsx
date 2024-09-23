import React from 'react';
import './AuthForm.scss';
import axios from 'axios';

const AuthForm: React.FC = () => {

  interface ResponseData {
    message: string;
    success: boolean;
  }

  function authRequest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = JSON.stringify(Object.fromEntries(formData));

    // fetch('192.168.1.106:8080/users/verify', {
    //   method: 'POST',
    //   body: formProps,
    // }).then(response => console.log(response))

    fetch('192.168.1.106:8080/users')
      .then(resp => console.log(resp))
  }


  return (
    <form className="auth-form" onSubmit={authRequest}>
      <fieldset className="auth-form__input-group">
        <label htmlFor="username" className="auth-form__label">Username:</label>
        <input type="text" id="username" className="auth-form__input" name='email'/>
      </fieldset>
      <fieldset className="auth-form__input-group">
        <label htmlFor="password" className="auth-form__label">Password:</label>
        <input type="password" id="password" className="auth-form__input" name='password'/>
      </fieldset>
      <fieldset className="auth-form__buttons">
        <button className="auth-form__button auth-form__button--login">Login</button>
        <button className="auth-form__button auth-form__button--exit">Exit</button>
      </fieldset>
    </form>
  );
}

export default AuthForm;
