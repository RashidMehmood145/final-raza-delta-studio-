import React,{Component} from 'react';
import {ContactFormSection,ContactFormWrapper,MapLayout,FormLayout,
    FormHeading,FormText,ContactForm,Form,FormGroup,InputText,MessageTextarea,
    SubmitBtn,TextCenter,ContactFormSpanErr,ContactFormSpanSuccess
} from './contactform.style';
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactFormData } from '../../../pagedata/ContactPage';

import Iframe from 'react-iframe';
const WRNG_MSG_TIMEOUT = 3000;

class ContactFormPage extends Component{
    constructor(){
        super();
        this.state = {
            errors:[],
            contactForm_fname:"",
            contactForm_lname:"",
            contactForm_email:"",
            contactForm_mobNo:"",
            contactForm_message:""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateForm()
    {
        var error_flag = false;
        let errors = {};

        if(this.state.contactForm_fname === "")
        {
            error_flag = true;
            errors['contactForm_fname'] = "Please enter first name!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactForm_lname === "")
        {
            error_flag = true;
            errors['contactForm_lname'] = "Please enter last name!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }


        if(this.state.contactForm_email === "")
        {
            error_flag = true;
            errors['contactForm_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactForm_email !== "")
        {
            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!patternEmail.test(this.state.contactForm_email)) {
                error_flag = true;
                errors["contactForm_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contactForm_mobNo === "")
        {
            error_flag = true;
            errors["contactForm_mobNo"] = "Please enter mobile no!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactForm_mobNo !== "")
        {
            var val = this.state.contactForm_mobNo;
            var len	=	val.length;
            var reg = /^\d+$/;
            if( !reg.test( val ) )
            {
                error_flag = true;
                errors["contactForm_mobNo"] = "Please enter valid mobile no!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
            else
            {
                if(len < 10)
                {
                    error_flag = true;
                    errors["contactForm_mobNo"] = "Please enter valid mobile no!";
                    setTimeout(function(){
                        this.setState({errors:{}});
                   }.bind(this),WRNG_MSG_TIMEOUT);
                }
            }
        }

        if(this.state.contactForm_message === "")
        {
            error_flag = true;
            errors["contactForm_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    contactFormSubmit = (e)=>{
        e.preventDefault();
        if(!this.validateForm())
        {
            document.getElementById("success_contactForm_message").innerHTML = "Thanks for contacting us.";
            this.setState({
                contactForm_fname:"",
                contactForm_lname:"",
                contactForm_email:"",
                contactForm_mobNo:"",
                contactForm_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_contactForm_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

    render(){
        return(
            <ContactFormSection id="ContactFormContainer">
                <ContactFormWrapper>
                    <MapLayout>
                        <Iframe url={ContactFormData.MapUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="mapFrame"
                            />
                    </MapLayout>
                    <FormLayout>
                        <FormHeading>
                        {ContactFormData.FormHeading}
                        </FormHeading>
                        <FormText>
                        {ContactFormData.FormText}
                        </FormText>
                        <ContactForm>
                            <Form id="contactForm" method="post" onSubmit={this.contactFormSubmit}>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <InputText aria-label="First Name" type="text" placeholder="First Name"  name="contactForm_fname" onChange={this.handleChange} value={this.state.contactForm_fname}/>
                                            <ContactFormSpanErr id="err_contactForm_fname">{this.state.errors.contactForm_fname}</ContactFormSpanErr>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <InputText aria-label="Last Name" type="text" placeholder="Last Name" name="contactForm_lname" onChange={this.handleChange} value={this.state.contactForm_lname}/>
                                            <ContactFormSpanErr id="err_contactForm_lname">{this.state.errors.contactForm_lname}</ContactFormSpanErr>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <InputText aria-label="Email" type="text" placeholder="Email ID" name="contactForm_email" onChange={this.handleChange} value={this.state.contactForm_email}/>
                                            <ContactFormSpanErr id="err_contactForm_email">{this.state.errors.contactForm_email}</ContactFormSpanErr>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <InputText aria-label="Phone" type="text" placeholder="Phone" name="contactForm_mobNo" onChange={this.handleChange} value={this.state.contactForm_mobNo}/>
                                            <ContactFormSpanErr id="err_contactForm_mobNo">{this.state.errors.contactForm_mobNo}</ContactFormSpanErr>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <MessageTextarea aria-label="Message" placeholder="Message" name="contactForm_message" onChange={this.handleChange} value={this.state.contactForm_message}></MessageTextarea>
                                            <ContactFormSpanErr id="err_contactForm_message">{this.state.errors.contactForm_message}</ContactFormSpanErr>
                                        </FormGroup>
                                    </Col>

                                    <Col md="12">
                                        <TextCenter>
                                            <SubmitBtn type="submit">Send Message</SubmitBtn>
                                        </TextCenter>
                                    </Col>
                                </Row>
                                <ContactFormSpanSuccess id="success_contactForm_message"></ContactFormSpanSuccess>
                            </Form>
                        </ContactForm>
                    </FormLayout>
                </ContactFormWrapper>
            </ContactFormSection>
        )
    }
}

export default ContactFormPage;