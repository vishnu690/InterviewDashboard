import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";

const inputData = {
  username: "",
  password: "",
};

const errorMsg = {
  emailError: "",
  passError: "",
};

function Login() {
  const [input, setInput] = useState(inputData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");

    if (input.username === "") {
      setError({ emailError: "Email address must not be empty" });
      return;
    } else if (input.password === "") {
      setError({ passError: "Password must not be empty" });
      return;
    } else {
    
      const EMAIL = localStorage.getItem("Uemail");
      const PSWD = localStorage.getItem("Upswd");
      console.log("Data Restored !" + EMAIL + PSWD);

      if (EMAIL == "" || PSWD == "") {
        setError({ passError: "Please register first" });
      } else if (EMAIL != input.username && PSWD != input.password) {
        setError({ passError: "Account doesnt Exist " });
      } else if (EMAIL == input.username && PSWD == input.password) {
        navigate("/Dashboard", { replace: true });
      }
    }

    setError(errorMsg);
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="form-container">
          <div className="animate-div">
            <span className="welcome">Welcome To</span>
            <h2>Login Form</h2>
            <span className="welcome-sub">
              Login to get in the moment updates on the things<br></br> that
              interest you.
            </span>
            <form method="POST" onSubmit={formSubmitHandler}>
              <div className="input-div">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, username: e.target.value };
                    })
                  }
                  value={input.email}
                />
                <span className="error-msg">{error.emailError}</span>
              </div>
              <div className="input-div">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, password: e.target.value };
                    })
                  }
                  value={input.password}
                />
                <span className="error-msg">{error.passError}</span>
              </div>
              <div className="input-div-btn">
                <input type="submit" value="Sign In" />
              </div>
            </form>
            <span className="account-sub">
              Don't you have an account ?{" "}
              <Link to="/" className="red">
                Sign Up Now
              </Link>{" "}
            </span>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
}

export default Login;
