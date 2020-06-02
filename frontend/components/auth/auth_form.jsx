import React, { Component } from 'react';
import { ROUTE_PROFILES } from '../../util/route_utils';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {email: "", password: ""}
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(field){
       return e=>{
            this.setState({[field]: e.target.value});
        }
    }

    submitForm(e){
        e.preventDefault();
        this.props.action(this.state)
        .then((user)=>{
            // routing to profile page
            this.props.history.push(ROUTE_PROFILES)
        });
    }
    
    render() {
        const {formType, errors} = this.props;
        return (
            <div>
                <h1>{formType}</h1>
                <form onSubmit={this.submitForm}>
                    <label>Email:</label>
                    <input 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange('email')}
                    />

                    <label>Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange('password')}
                    />
                    <span>{errors}</span>
                    <button>{formType}</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;