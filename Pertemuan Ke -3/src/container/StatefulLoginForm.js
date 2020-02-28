import React, { Component } from "react";
import "../styles/LoginForm.css";

class StatefulLoginForm extends Component {
  state = {
    username: "",
    password: "",
    remember: false
  };

  handleChange = (value, name) => {
    this.setState({ ...this.state, [name]: value });
  };

  submitForm = e => {
    console.log(this.state);
    this.setState({
      username: "",
      password: "",
      remember: false
    });
  };

  render() {
    return (
      <div className="flex flex--column flex__align-items--center flex__justify-content--center vh-100">
        <h2>Form Login Stateful</h2>
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
                value={this.state.username}
                onChange={event =>
                  this.handleChange(event.target.value, "username")
                }
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
                value={this.state.password}
                onChange={event =>
                  this.handleChange(event.target.value, "password")
                }
              />
            </div>
            <div className="form--group">
              <button
                className="btn form__button btn--success"
                onClick={this.submitForm}
              >
                Login
              </button>
            </div>
            <div className="form--group flex flex__justify-content--center flex__align-items--center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={this.state.remember}
                onChange={event =>
                  this.handleChange(!this.state.remember, "remember")
                }
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
  }
}

export default StatefulLoginForm;
