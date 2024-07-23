import React, { useRef } from "react";
import containercss from './../Components/Container.module.css'
import LoginImg from './../assets/Human-login.png'
import RegisterImg from './../assets/Human-signUp.png'

function Container() {
    const LoginWrapper = useRef();
    const SignUpWrapper = useRef();

    const LoginHandler = () =>{
        LoginWrapper.current.classList.add(containercss.ActiveLogin);
        SignUpWrapper.current.classList.remove(containercss.ActiveSignUp);
    }
    const RegisterHandler = () =>{
        SignUpWrapper.current.classList.add(containercss.ActiveSignUp);
        LoginWrapper.current.classList.remove(containercss.ActiveLogin);
    }

    return (
        <div className="container">
            <div className={containercss.LoginWrapper} ref={LoginWrapper}> 
                <div className="form_wrapper">
                    <h2>Sign In</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nemo.</p>

                    <div className="Input_wrapper">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="Input_wrapper">
                        <input type="password" placeholder="Password" />
                    </div>
                    <a href="#">Forget Password ?</a>
                    <button onClick={LoginHandler}>Sign In</button>
                </div>
                <div className="ImageWrapper">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
            <div className={containercss.RegistrationWrapper} ref={SignUpWrapper}>
            <div className="form_wrapper">
                    <h2>Sign Up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nemo.</p>

                    <div className="Input_wrapper">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="Input_wrapper">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="Input_wrapper">
                        <input type="password" placeholder="Password" />
                    </div>
                    <button onClick={RegisterHandler}>Register</button>
                </div>
                <div className="ImageWrapper">
                    <img src={RegisterImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Container