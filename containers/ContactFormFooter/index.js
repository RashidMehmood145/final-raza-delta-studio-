import React,{Component} from 'react';
import {ContactFooterFormSection,ContactFooterFormWrapper,FormLayout,
    ContactFooterForm,Form,FormGroup,InputText,MessageTextarea,
    SubmitBtn,TextCenter,ContactUsSpanSuccess,ContactUsSpanErr
} from './contactformfooter.style';
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WRNG_MSG_TIMEOUT = 3000;

class ContactFormFooter extends Component{
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
            errors["contactUs_mobNo"] = "Please enter phone!";
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
                errors["contactUs_mobNo"] = "Please enter valid phone!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
            else
            {
                if(len < 10)
                {
                    error_flag = true;
                    errors["contactUs_mobNo"] = "Please enter valid phone!";
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
            document.getElementById("success_contactUsFooter_message").innerHTML = "Thanks for contacting us.";
            this.setState({
                contactUs_name:"",
                contactUs_email:"",
                contactUs_mobNo:"",
                contactUs_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_contactUsFooter_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

    render(){
        return(
            <ContactFooterFormSection>
                <ContactFooterFormWrapper>
                    <FormLayout>
                        <ContactFooterForm>
                            <Form id="ContactFooterForm"  method="post" onSubmit={this.contactUsSubmit}>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <InputText aria-label="Name" type="text" placeholder="Name" name="contactUs_name" onChange={this.handleChange} value={this.state.contactUs_name}/>
                                            <ContactUsSpanErr>{this.state.errors.contactUs_name}</ContactUsSpanErr>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <InputText aria-label="Email" type="email" placeholder="Email ID" name="contactUs_email" onChange={this.handleChange} value={this.state.contactUs_email}/>
                                            <ContactUsSpanErr>{this.state.errors.contactUs_email}</ContactUsSpanErr>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <InputText aria-label="Phone" type="tel" placeholder="Phone" name="contactUs_mobNo" onChange={this.handleChange} value={this.state.contactUs_mobNo}/>
                                            <ContactUsSpanErr>{this.state.errors.contactUs_mobNo}</ContactUsSpanErr>
                                            </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <MessageTextarea aria-label="Message" type="text" placeholder="Message" name="contactUs_message" onChange={this.handleChange} value={this.state.contactUs_message}></MessageTextarea>
                                            <ContactUsSpanErr>{this.state.errors.contactUs_message}</ContactUsSpanErr>
                                        </FormGroup>
                                    </Col>

                                    <Col md="12">
                                        <TextCenter>
                                            <SubmitBtn type="submit">Send Message</SubmitBtn>
                                        </TextCenter>
                                    </Col>
                                </Row>
                                <ContactUsSpanSuccess id="success_contactUsFooter_message"></ContactUsSpanSuccess>
                            </Form>
                        </ContactFooterForm>
                    </FormLayout>
                </ContactFooterFormWrapper>
            </ContactFooterFormSection>
        )
    }
}
export default ContactFormFooter;