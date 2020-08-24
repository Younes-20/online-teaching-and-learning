import React, { Component } from 'react';
import { TextField, } from '@material-ui/core';
import design from './Contact.module.css';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }



    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Username Cannot be empty!";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Use only letters!";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = " Email cannot be empty!";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid!";
            }
        }

        //textarea

        if (!fields["textarea"]) {
            formIsValid = false;
            errors["textarea"] = "Please fil out this feild.";
        }

        if (typeof fields["textarea"] !== "undefined") {
            if (fields["textarea"].length < 5) {
                formIsValid = false;
                errors["textarea"] = "Should be at least 5 characters long!";
            }
        }


        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Thank you for getting in touch!")
        } else {
            alert("There are some items that require your attention.")
        }


    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });

    }

    render() {
        return (
            <div>
                <div className={design.container}>
                    <form autoComplete="off" className={design.form} onSubmit={this.handleSubmit.bind(this)}>
                        <h1>Get in <span>Touch</span></h1>
                        <TextField id="standard-required" label="Name" className={design.input} onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}></TextField>
                        <span style={{ color: "red" }} className={design.error}>{this.state.errors["name"]}</span>
                        <TextField id="standard-required" label="Email" type="email" className={design.input} onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}></TextField>
                        <span style={{ color: "red" }} className={design.error}>{this.state.errors["email"]}</span>
                        <textarea type="text" placeholder="Your Message" onChange={this.handleChange.bind(this, "textarea")} value={this.state.fields["textarea"]} ></textarea>
                        <span style={{ color: "red" }} className={design.error}>{this.state.errors["textarea"]}</span>
                        <button className={design.send} type="submit">Send</button>

                    </form>
                </div>

                <footer className="footer">

                    <div className="links_inner">

                        <ul>
                            <h3>Learn more</h3>
                            <li><a className="myitems" href="#">Take a tour</a></li>
                            <li><a className="myitems" href="#">Our customers</a></li>
                            <li><a className="myitems" href="#">Pricing and plans</a></li>
                            <li><a className="myitems" href="#">New features</a></li>
                            <li><a className="myitems" href="#">learning</a></li>
                        </ul>



                        <ul>
                            <h3>Categories</h3>
                            <li><a className="myitems" href="#">Web development</a></li>
                            <li><a className="myitems" href="#">Buisness</a></li>
                            <li><a className="myitems" href="#">Photography</a></li>
                            <li><a className="myitems" href="#">Design</a></li>
                            <li><a className="myitems" href="#">Personal Development</a></li>
                        </ul>




                        <ul>
                            <h3>Quick Links</h3>
                            <li><a className="myitems" href="/about">About Us</a></li>
                            <li><a className="myitems" href="/contact">Contact Us</a></li>
                            <li><a className="myitems" href="#">Contribute</a></li>
                            <li><a className="myitems" href="#">Privacy Policy</a></li>
                            <li><a className="myitems" href="#">Sitemap</a></li>
                        </ul>



                        <ul className="social_icons">
                            <h3>Follow us on</h3>
                            <li className="social" ><a className="myitems" href="#"><i className="fa fa-facebook"></i></a> Facebook</li>
                            <li className="social" ><a className="myitems" href="#"><i className="fa fa-twitter"></i></a>Twitter</li>
                            <li className="social" ><a className="myitems" href="#"><i className="fa fa-dribbble"></i></a>Dribbble</li>
                            <li className="social" ><a className="myitems" href="#"><i className="fa fa-linkedin"></i></a>Linkedin</li>
                        </ul>



                    </div>
                </footer>
                <div className="final">
                    <div className="end">
                        <p className="copyright">Copyright &copy; 2020 All Rights are Reserved.
                           </p>
                    </div>

                </div>
            </div >

        );
    }
}

export default Contact;