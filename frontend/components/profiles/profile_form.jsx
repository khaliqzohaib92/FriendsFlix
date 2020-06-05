import React, { Component } from 'react';
import { ADD, EDIT } from '../../util/constants';

class ProfileForm extends Component {
    constructor(props){
        super(props);
        this.state = Object.assign({}, props.profile,{errors: ""});
        this.submitForm = this.submitForm.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
        if(this.state.title.length == 0 && this.props.formType == EDIT){
            const id = this.props.match.params.id;
            this.props.fetchProfile(id)
            .then(res => this.setState(res.profile[id]));
        }
    }


    handleChange(field){
        return e=>{
            this.setState({[field]: e.target.value});
        }
    }

    validate(){
        return this.state.title.length > 0
    }

    submitForm(e){
        e.preventDefault();
        if(this.validate()){
            this.props.action(this.state)
            .then(()=>{
                this.setState({errors: this.props.errors});
                this.goBack();
            },()=>{
                this.setState({errors: this.props.errors});
            });
        }else
        {
            this.setState({errors:"Please enter name"});
        }
    }

    deleteProfile(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.deleteProfile(id)
        .then(()=>this.goBack());
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const {formType} = this.props;
        return (
            <div className="all-profiles-main">
                <div className="profile-form-container">
                    <h1 className="profile-form-title">{`${formType} Profile`}</h1>
                    <p className="profile-form-para">{`${formType} a profile for another person watching FreindsFlix`}</p>
                    <div className="profile-form">
                    <span className="profile-form-color" style={{background: `linear-gradient(${this.state.color}, #141414)`}}><p className="center-text">{this.state.title.length>0 ? this.state.title[0] : "N"}</p></span>
                        <div>
                            <input className="profile-form-input" type="text" name="name" placeholder="Name" value={this.state.title} onChange={this.handleChange('title')}/>
                            <p className={`profile-form-input-error ${this.state.errors == "" ? 'hidden': ''}`}>{this.state.errors}</p>
                        </div>
                    </div>
                    <div className="profile-form-btns-container">
                        <button className="profile-form-continue-btn profile-form-btns" onClick={this.submitForm}>Continue</button>
                        <button onClick={this.goBack} className="profile-form-cancel-btn profile-form-btns" >Cancel</button>
                        <button className={`profile-form-cancel-btn profile-form-btns ${formType == ADD ? "hidden" : ""}`} onClick={this.deleteProfile}>Delete Profile</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileForm;