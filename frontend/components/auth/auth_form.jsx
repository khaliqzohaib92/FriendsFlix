import React, { Component } from 'react';
import { ROUTE_SIGNUP, ROUTE_SIGNIN } from '../../util/route_utils';
import {Link} from 'react-router-dom';
import {SIGN_IN, SIGN_UP} from '../../util/constants'
import {receiveErrors} from '../../actions/session/session_actions'

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", emailError: "", passwordError:""}
        this.submitForm = this.submitForm.bind(this);
        this.handleOnLinkMouseDown = this.handleOnLinkMouseDown.bind(this);
    }

    componentWillUnmount() {
        //clear session errors
        this.props.clearErrors();
    }
    
    handleOnLinkMouseDown(e){
        //quick fix to click even not in focus (add to fix handelBlur interfernce with link onClick)
        e.preventDefault();
        e.target.click();
    }

    handleChange(field){
       return e=>{
            this.setState({[field]: e.target.value});
        }
    }

    handleBlur(field){
        return e=>{
            e.preventDefault();
            if(document.activeElement != e.target){
                //handle empty field errors
                if(e.target.value == "") {
                    if(field == "emailError"){
                        this.setState({[field]: "Please enter a valid email"})
                    } else {
                        this.setState({[field]: "Password should be atleast 6 characters"})
                    }
                } else {
                    // handle validity with value

                    //validity of email
                    if(field == "emailError" ){
                        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)){
                            this.setState({[field]: ""})
                        } else {
                            this.setState({[field]: "Please enter a valid email"})
                        }
                    }

                    //validity of password
                    if(field == "passwordError"){
                        if(e.target.value.length > 5){
                            this.setState({[field]: ""})
                        } else {
                            this.setState({[field]: "Password should be atleast 6 characters"})
                        }
                    }
                }
            }                
        }
    }

    validate(){
        return this.state.emailError.length == 0 && this.state.passwordError.length == 0 && this.state.email.length > 0 && this.state.password.length > 0;
    }

    submitForm(e){
        e.preventDefault();
        if(this.validate()){
            this.props.action(Object.assign({},{email: this.state.email, password: this.state.password}));
        }
    }
    
    //TODO optimise
    additionalErrorText(formType){
         return formType == SIGN_IN ? <span className="additional-error-text" onMouseDown={this.handleOnLinkMouseDown}>Please try again or <Link to={ROUTE_SIGNUP}>create a new account</Link></span> : 
         <span className="additional-error-text" onMouseDown={this.handleOnLinkMouseDown}>Try <Link to={ROUTE_SIGNIN}>signing in</Link></span>
    }

    render() {
        const {formType, errors} = this.props;
        const {email, password, emailError, passwordError} = this.state;
        return (
            <div className="auth-form-container">
                <h1 className="auth-form-title">{formType}</h1>
                <span className={`error-top ${errors.length > 0 ? "" : "hidden"}`}>{`${errors.join(", ")}. `}
                    {
                        this.additionalErrorText(formType)
                    }
                </span>
                <form className="auth-form" onSubmit={this.submitForm}>
                    <div className="wrapper-email">
                        <input className={`auth-form-email ${emailError=="" ? '' : 'error-input'}`}
                         type="text" name="email" id="email" value={email} onChange={this.handleChange('email')} onBlur={this.handleBlur('emailError')}/>
                        <label  className={`floating-label-email ${email.length > 0 ? 'floating-label' : ''}`}>Email</label>
                        <label className="error-label">{emailError}</label>
                    </div>
                    <div className="wrapper-password">
                        <input className={`auth-form-password ${passwordError=="" ? '' : 'error-input'}`}
                         type="password" name="password" value={password} onChange={this.handleChange('password')} onBlur={this.handleBlur('passwordError')}/>
                        <label  className={`floating-label-password ${password.length > 0 ? 'floating-label' : ''}`}>Password</label>
                        <label className="error-label">{passwordError}</label>
                    </div>
                    <button className="button-red auth-form-button" id="auth-button">{formType}</button>
                </form>
                <span className="auth-form-route-text">
                    {formType == SIGN_UP ? 'New to FriendsFlix?' : 'Already have account?'} 
                    <Link className="auth-from-text" onMouseDown={this.handleOnLinkMouseDown} to={formType == SIGN_UP ? ROUTE_SIGNIN: ROUTE_SIGNUP}>{`${formType == SIGN_UP ? SIGN_IN : SIGN_UP} Now`}</Link>
                </span>

                
            </div>
        );
    }
}

export default AuthForm;