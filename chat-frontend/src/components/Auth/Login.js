import React from "react";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";

const Login = () => {
  return (
    <div id="auth-container" className="test">
      <div id="auth-card test">
        <div>
          <div id="image-section">
            <img src={loginImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>

            <form>
              <div className="input-field">
                <input type="email" placeholder="Enter your Email" />
              </div>

              <div className="input-field">
                <input type="text" placeholder="Enter your Password" />
              </div>
              <button>Login</button>
            </form>
            <p>Don't have an account? Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
