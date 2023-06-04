import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";

const inputData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  password: "",
};

const errorMsg = {
  nameError: "",
  addressError: "",
  phoneError: "",
  emailError: "",
  passwordError: "",
};

function Register() {
  const [input, setInput] = useState(inputData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");

    if (input.name === "") {
      setError({ nameError: "Name must not be empty" });
      return;
    } else if (input.address === "") {
      setError({ addressError: "Address must not be empty" });
      return;
    } else if (input.phone === "") {
      setError({ phoneError: "Phone number must not be empty" });
      return;
    } else if (input.phone.length != 10) {
      setError({ phoneError: "Phone number must contain  10 digit " });
      return;
    } else if (input.email === "") {
      setError({ emailError: "Email address must not be empty" });
      return;
    } else if (input.password === "") {
      setError({ passwordError: "Password must not be empty" });
      return;
    } else {
      localStorage.setItem("Uname", input.name);
      localStorage.setItem("Uddress", input.address);
      localStorage.setItem("Uphone", input.phone);
      localStorage.setItem("Uemail", input.email);
      localStorage.setItem("Upswd", input.password);
      console.log("Data saved !");
    }

    setError(errorMsg);
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="form-container">
          <div className="animate-div">
            <span className="welcome">Welcome To</span>
            <h2>Register Form</h2>
            <span className="welcome-sub">
              Register to get in the moment updates on the things<br></br> that
              interest you.
            </span>
            <form method="POST" onSubmit={formSubmitHandler}>
              <div className="input-div">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, name: e.target.value };
                    })
                  }
                  value={input.name}
                />
                <span className="error-msg">{error.nameError}</span>
              </div>
              <div className="input-div">
                <textarea
                  name="address"
                  id=""
                  placeholder="Address"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, address: e.target.value };
                    })
                  }
                  value={input.address}
                />
                <span className="error-msg">{error.addressError}</span>
              </div>
              <div className="input-div">
                <input
                  type="text"
                  name="phone"
                  id=""
                  maxLength={10}
                  placeholder="Phone"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, phone: e.target.value };
                    })
                  }
                  value={input.phone}
                />
                <span className="error-msg">{error.phoneError}</span>
              </div>

              <div className="input-div">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, email: e.target.value };
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
                <span className="error-msg">{error.passwordError}</span>
              </div>
              <div className="input-div-btn">
                <input type="submit" value="Sign In" />
              </div>
            </form>

            <span className="account-sub">
              Already have an account ?{" "}
              <Link to="/login" className="red">
                Sign In
              </Link>{" "}
            </span>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
}

export default Register;
