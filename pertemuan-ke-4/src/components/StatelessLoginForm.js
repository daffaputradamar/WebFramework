import React, { useState } from "react";
import "../styles/LoginForm.css";

const StatelessLoginForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    remember: false
  }); //State using react hooks

  function handleChange(value, name) {
    setInput({ ...input, [name]: value });
  }

  function submitForm(e) {
    console.log(input);
    setInput({
      username: "",
      password: "",
      remember: false
    });
  }
  return (
    <div className="flex flex--column flex__align-items--center flex__justify-content--center vh-100">
      <h2>Form Login Stateless</h2>
      <div className="card">
        <div className="card__body">
          <h1 className="card__title">Tugas Pertemuan Ketiga</h1>
          <div className="form--group flex flex__justify-content--center flex__align-items--center">
            <label className="form__label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form__input"
              placeholder="Masukkan Username"
              value={input.username}
              onChange={event => handleChange(event.target.value, "username")}
            />
          </div>
          <div className="form--group flex flex__justify-content--center flex__align-items--center">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder="Masukkan Password"
              value={input.password}
              onChange={event => handleChange(event.target.value, "password")}
            />
          </div>
          <div className="form--group">
            <button
              className="btn form__button btn--success"
              onClick={submitForm}
            >
              Login
            </button>
          </div>
          <div className="form--group flex flex__justify-content--center flex__align-items--center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={input.remember}
              onChange={event => handleChange(!input.remember, "remember")}
            />
            <label htmlFor="remember" className="form__label--checkbox">
              Remember Me
            </label>
          </div>
          <div className="flex flex__justify-content--center">
            <button className="btn btn--danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatelessLoginForm;
