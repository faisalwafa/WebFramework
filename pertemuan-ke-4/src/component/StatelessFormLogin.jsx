import React, { useState } from "react";
import "../container/FormLogin.css";

const StateLessLoginForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    remember: false
  });

  function handleChange(value, name) {
    setInput({ ...input, [name]: value });
  }

  function submitForm(e) {
    console.log(input);
  }
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
              value={input.username}
              onChange={event => handleChange(event.target.value, "username")}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="masukan password"
              value={input.password}
              onChange={event => handleChange(event.target.value, "password")}
            />
          </div>
          <button className="btnLogin" onClick={submitForm}>
            Login
          </button>
          <div className="checkbox">
            <h5>
              <span>
                <input
                  type="checkbox"
                  checked={input.remember}
                  onChange={event => handleChange(!input.remember, "remember")}
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
};

export default StateLessLoginForm;
