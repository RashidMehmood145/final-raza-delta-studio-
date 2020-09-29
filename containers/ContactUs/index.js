import React,{Component} from 'react';
import {ContactUsSection,ContactUsLeft,ContactUsRight,ContactUsLeftHeading,
    ContactUsLeftPara,Form,FormGroup,NameInput,TextareaMsg,ContactUsCustomRow,
    ContactUsSpanErr,ContactUsSpanSuccess,ContactButton
} from './contactus.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUs } from '../../pagedata/Home';

const WRNG_MSG_TIMEOUT = 3000;

class ContactUsPage extends Component{
    constructor(){
        super();
        this.state = {
            errors:[],
            contactUs_name:"",
            contactUs_email:"",
            contactUs_mobNo:"",
            contactUs_message:""
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

        if(this.state.contactUs_name === "")
        {
            error_flag = true;
            errors['contactUs_name'] = "Please enter name!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactUs_email === "")
        {
            error_flag = true;
            errors['contactUs_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactUs_email !== "")
        {
            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!patternEmail.test(this.state.contactUs_email)) {
                error_flag = true;
                errors["contactUs_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contactUs_mobNo === "")
        {
            error_flag = true;
            errors["contactUs_mobNo"] = "Please enter mobile no!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contactUs_mobNo !== "")
        {
            var val = this.state.contactUs_mobNo;
            var len	=	val.length;
            var reg = /^\d+$/;
            if( !reg.test( val ) )
            {
                error_flag = true;
                errors["contactUs_mobNo"] = "Please enter valid mobile no!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
            else
            {
                if(len < 10)
                {
                    error_flag = true;
                    errors["contactUs_mobNo"] = "Please enter valid mobile no!";
                    setTimeout(function(){
                        this.setState({errors:{}});
                   }.bind(this),WRNG_MSG_TIMEOUT);
                }
            }
        }

        if(this.state.contactUs_message === "")
        {
            error_flag = true;
            errors["contactUs_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    contactUsSubmit = (e)=>{
        e.preventDefault();
        if(!this.validateForm())
        {
            document.getElementById("success_contactUs_message").innerHTML = "Thanks for contacting us.";
            this.setState({
                contactUs_name:"",
                contactUs_email:"",
                contactUs_mobNo:"",
                contactUs_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_contactUs_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

    render(){
        return(
            <ContactUsSection id="contactUsContainer">
                <Container>
                    <ContactUsCustomRow>
                        <Col md="6">
                            <ContactUsLeft>
                                <ContactUsLeftHeading>
                                    {ContactUs.ContactUsLeftHeading}
                                </ContactUsLeftHeading>
                                <ContactUsLeftPara>
                                {ContactUs.ContactUsLeftPara}
                                </ContactUsLeftPara>
                            </ContactUsLeft>
                        </Col>
                        <Col md="6">
                            <ContactUsRight>
                                <Form id="contactUsForm" method="post" onSubmit={this.contactUsSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <NameInput aria-label="Name" type="text" placeholder="Name" name="contactUs_name" onChange={this.handleChange} value={this.state.contactUs_name}/>
                                                <ContactUsSpanErr id="err_contactUs_name">{this.state.errors.contactUs_name}</ContactUsSpanErr>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <NameInput aria-label="Email" type="text" placeholder="Email" name="contactUs_email" onChange={this.handleChange} value={this.state.contactUs_email}/>
                                                <ContactUsSpanErr id="err_contactUs_email">{this.state.errors.contactUs_email}</ContactUsSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <NameInput aria-label="Mob No" type="text" placeholder="Mob No." name="contactUs_mobNo" onChange={this.handleChange} value={this.state.contactUs_mobNo}/>
                                                <ContactUsSpanErr id="err_contactUs_mobNo">{this.state.errors.contactUs_mobNo}</ContactUsSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <TextareaMsg aria-label="Message" placeholder="Message" name="contactUs_message" onChange={this.handleChange} value={this.state.contactUs_message}></TextareaMsg>
                                                <ContactUsSpanErr id="err_contactUs_message">{this.state.errors.contactUs_message}</ContactUsSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <ContactButton background="#dbdbdb" buttonText={ContactUs.CommonBtnText}>{ContactUs.CommonBtnLabel}</ContactButton>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <ContactUsSpanSuccess id="success_contactUs_message"></ContactUsSpanSuccess>
                                </Form>
                            </ContactUsRight>
                        </Col>
                    </ContactUsCustomRow>
                </Container>
            </ContactUsSection>
        )
    }
}

export default ContactUsPage;