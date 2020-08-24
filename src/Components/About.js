import React from 'react';
import about from './About.module.css';
import founder1 from '../team/1.jpg';
import founder2 from '../team/2.jpg';
import founder3 from '../team/3.jpg';
import founder4 from '../team/4.jpg';
import founder5 from '../team/5.jpg';
import founder6 from '../team/6.jpg';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
const About = () => {
    return (
        <div>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                ToggledStyle={{ right: 30 }}
            />
            <section className={about.text_about}>
                <h1>About us</h1>
                <p>Welcome to Enlightenment, your number one source for learning something new. We're dedicated to providing you the very best of learning experience.
                Founded in 2015 by Youness Arjil, Enlightenment has come a long way from its beginnings in Morocco. When Younes Arjil first started out, his passion for improving lives through learning drove him to start his own business.
                We hope you enjoy our courses as much as we enjoy offering them to you. <span>If you have any questions or comments, please don't hesitate to <a href='/contact'>contact us.</a></span></p>
            </section>

            <section className={about.section1}>
                <h2>Meet our Team</h2>

                <div className={about.wrapper}>
                    <div className={about.meet}>
                        <img src={founder1} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Tony Waters</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>

                    </div>
                    <div className={about.meet}>
                        <img src={founder2} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Jolie Simon</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>

                    <div className={about.meet}>
                        <img src={founder3} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Nathen Cooper</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>

                    <div className={about.meet}>
                        <img src={founder4} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Alden Cantrell.</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>

                    <div className={about.meet}>
                        <img src={founder5} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Bradyn Kramer</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>

                    <div className={about.meet}>
                        <img src={founder6} className={about.profile}></img>
                        <div className={about.content}>
                            <h3>Alvaro Mcgee</h3>
                            <h5>Co-Founder</h5>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>


            </section>

            <section className={about.section2}>
                <div className={about.reach}>
                    <span>80,000+</span>
                    <h5>Learners</h5>
                </div>
                <div className={about.reach}>
                    <span>4,000+</span>
                    <h5>Courses</h5>
                </div>
                <div className={about.reach}>
                    <span>50+</span>
                    <h5>Specializations</h5>
                </div>
                <div className={about.reach}>
                    <span>15</span>
                    <h5>Certificates</h5>
                </div>
            </section>

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
        </div>
    )
}

export default About;