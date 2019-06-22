import React, {Component} from 'react';

class Register extends Component {
    render(){
        return(
            <article className="">
            <main className="">
                <form className="">
                    <fieldset id="sign_up" className="">
                        <legend className="">Sign In</legend>
                        <div className="margin10">
                            <label className="" htmlFor="email-address">Name</label>
                            <input className="" type="text" name="name" id="name" />
                        </div>
                        <div className="margin10">
                            <label className="" htmlFor="email-address">Email</label>
                            <input className="" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="margin10">
                            <label className="" htmlFor="password">Password</label>
                            <input className="" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={""} 
                        className="" 
                        type="submit" 
                        value="Register" />
                    </div>
                </form>
            </main>
            </article >
        )
    }
}

export default Register;