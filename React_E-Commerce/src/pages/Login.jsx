import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjAi7Lvoq-CAxUPmpYKHbISByUYABAAGgJ0bA&ase=2&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmJjr4lg0DWnTjo_O-xEzFMKADfZLeDWjJ750t7T3Y0bgabB0TjTrRAaAnEvEALw_wcB&ohost=www.google.com&cid=CAESVeD2oUkkG0m7U6IsfZAvXs9LdyiBVBOsXdmkz55ryGrupUXTEtCtcnA44ZjnVwVJq39suEZh7-ad0jWlfxf2AuFOjlXkb-FPHWFvsW3Xglxf0b1RJo8&sig=AOD64_2n-WYjfXALwQzQG6bJC-25UbOCDw&q&nis=4&adurl&ved=2ahUKEwj906nvoq-CAxWqgVYBHT-YCGEQ0Qx6BAgIEAE" target="_blank" rel="noreferrer">Login</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
