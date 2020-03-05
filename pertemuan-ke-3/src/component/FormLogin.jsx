import React, { Component } from "react";
import "./FormLogin.css";
export default class FormLogin extends Component {
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
  };
  render() {
    return (
      <div>
        <div className="text-center">
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "1em",
              marginTop: "1em"
            }}
          >
            Form Login
          </h4>
        </div>
        <div className="form-area">
          <div className="text-center title">
            <h2
              style={{
                fontWeight: "bold"
              }}
            >
              Tugas Pertemuan Ketiga
            </h2>
          </div>
          <div className="text-center">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="masukan username"
                value={this.state.username}
                onChange={event =>
                  this.handleChange(event.target.value, "username")
                }
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="masukan password"
                value={this.state.password}
                onChange={event =>
                  this.handleChange(event.target.value, "password")
                }
              />
            </div>
            <button className="btnLogin" onClick={this.submitForm}>
              Login
            </button>
            <div className="checkbox">
              <h5>
                <span>
                  <input
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={event =>
                      this.handleChange(!this.state.remember, "remember")
                    }
                  />
                </span>
                Remember Me
              </h5>
            </div>
            <button className="btnCancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
