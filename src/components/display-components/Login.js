import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    
          <div id="site-login">
            <div className='container'>
              <h1>Please click in form fields to see animation!</h1>
              <form>
                <div className='form-control'>
                  <input type='text' required />
                  <label>
                    {'Email'.split('').map((letter, idx) => {
                      return (
                        <span style={{ transitionDelay: `${idx * 50}ms` }}>
                          {letter}
                        </span>
                      );
                    })}
                  </label>
                </div>

                <div className='form-control'>
                  <input type='password' required />
                  <label>
                    {'Password'.split('').map((letter, idx) => {
                      return (
                        <span style={{ transitionDelay: `${idx * 50}ms` }}>
                          {letter}
                        </span>
                      );
                    })}
                  </label>
                </div>

                <button className='btn'>Login</button>

                <p className='text'>
                  Don't have an account?
                  <a href='#'>Register</a>
                </p>
              </form>
            </div>
          </div>
   
  )
}

export default Login
