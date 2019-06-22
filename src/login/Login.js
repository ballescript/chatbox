import React, {Component} from 'react';
import './Login.css';


class Login extends Component {
    render(){
        return(
            <article className="Login">
        <main className="">
            <form className="">
                <fieldset id="sign_up" className="border-radius">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="margin10">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email {` `}</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="margin10">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password  {` `}</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div className="margin10">
                    <input 
                    onClick={"() => onRouteChange('home')"} //on route change
                    className="boton" 
                    type="submit" 
                    value="Sign in" />
                </div>
            </form>
        </main>
        </article >
        )
    }
}

export default Login;