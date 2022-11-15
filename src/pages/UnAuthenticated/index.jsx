import React from "react";
import { Formik } from "formik";

import Button from "../../components/Button";
import Input from "../../components/Input";

import WhiteLogo from "../../assets/logos/white-logo.svg";

const unAuthenticated = () => {
  return (
    <>
      <div className='login-page'>
        <div className='main-login'>
          <div className='login-content'>
            <img src={WhiteLogo} />

            <div className=''>
              <p className='login-info-text'>
                Are you a new customer or an existing customer yet to setup your
                online account?
              </p>

              <Button variant={"btn-white"} className={"mt-31"}>
                GET STARTED
              </Button>
            </div>
          </div>
          <div className='main-login-form'>
            <p className='login-text'>Log in to your account</p>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Please provide your username";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                } else if (!values.password) {
                  errors.password = "Please provide your password";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className='form-grid' onSubmit={handleSubmit}>
                  <Input
                    type={"email"}
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    touched={touched.email}
                    placeholder='Username'
                    className='form-input'
                    error={errors.email}
                  />
                  <Input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    touched={touched.password}
                    placeholder={"Password"}
                    className='form-input mt-12'
                    error={errors.password}
                  />
                  <Button
                    variant={"btn-primary"}
                    type='submit'
                    disabled={isSubmitting}
                    className={"mt-24"}
                  >
                    LOGIN
                  </Button>
                  <div className='flex-end'>
                    <a href='#' className="forgot-password-text">Forgot password?</a>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default unAuthenticated;
