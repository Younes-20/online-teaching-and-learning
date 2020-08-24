import React, { Component } from 'react';
import style from '../Components/Home.module.css';
import image from '../img/cover.svg'
import onlinecourse from '../img/webinar.svg';
import instructor from '../img/instructor.svg';
import certaficate from '../img/certificate.svg';
import guarantee from '../img/guarantee.svg';
import study from '../img/study.jpg'
import react from '../img/react.png';
import javascript from '../img/javascript.jpeg';
import softskills from '../img/softskills.jpg'
import web from '../img/web-development.jpg';
import machine from '../img/machine.jpg';
import interviewer from '../img/interviewer.jpg';
import Counterup from 'react-countup';
import logo from '../img/logo.png';
import teacher from '../img/teacher.svg';
import student from '../img/student.svg';
import book from '../img/book.svg';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";



class Home extends Component {


    render() {

        return (

            <div className={style.container}>
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={160}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    ToggledStyle={{ right: 8 }}

                />

                <section className={style.landing} >
                    <div className={style.welcome}>
                        <h1 className={style.title}>We cover a lot of ground to enhance your skill anytime & anywhere</h1>
                        <p className={style.text}>Join Enlightnment for free and learn online.</p>
                        <button className={style.enroll}> Enroll now</button>
                    </div>
                    <div className={style.welcome_img}>
                        <img src={image} alt="cover" className={style.cover} ></img>
                    </div>
                </section>

                <section className={style.sectionB}>
                    {/* <h2>we are presenting the best features and quality</h2> */}
                    <div className={style.card}>
                        <img src={onlinecourse} className={style.icons} alt="Online Course" ></img>
                        <h4>Online Courses</h4>
                        <div className={style.line}></div>
                        <p>Get started right away and learn on your own schedule with flexible online courses..</p>
                    </div>

                    <div className={style.card}>
                        <img src={instructor} className={style.icons} alt="Instructor" ></img>
                        <h4>Expert instructor</h4>
                        <div className={style.line}></div>
                        <p>Meet our expert instructors from top companies and universities to make sure your course going well.</p>
                    </div>

                    <div className={style.card}>
                        <img src={guarantee} className={style.icons} al="Lifetime access" ></img>
                        <h4>  LifeTime access</h4>
                        <div className={style.line}></div>
                        <p>Get unlimited access to your courses , and sometimes, free updates and features.</p>
                    </div>

                    <div className={style.card}>
                        <img src={certaficate} className={style.icons} al="Certafication"></img>
                        <h4>Certafication</h4>
                        <p>Professional Certificates on Enlightnment help you get job-ready for an in-demand career field in less than a year.</p>
                    </div>

                </section>

                {/* section C */}

                <section className={style.sectionC}>
                    <div className={style.content}>
                        <h2>Find the right Professional Certificate program for you</h2>
                        <p>Certificate of Completion is a great addition to your CV, as employers value skilled employees. Finishing free online courses with certificates will make your CV stand out and raise your chances of landing the job of your dreams!</p>
                    </div>
                    <div className={style.con_img}>
                        <img src={study}></img>
                    </div>
                </section>

                <section className={style.sectionD}>
                    <div className={style.description}>
                        <h2>Popular Courses</h2>
                        <span>Check out  one of the most popular Courses</span>
                    </div>

                    <div className={style.course}>

                        <div className={style.container1}>
                            <img src={javascript}></img>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <h5>Modern Javascript</h5>
                            <p>Younes Arjil</p>
                            <small>20 $ per weeks</small>
                        </div>

                        <div className={style.container1}>
                            <img src={react}></img>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <h5>React</h5>
                            <p>Shaun Silva</p>
                            <small>free</small>
                        </div>

                        <div className={style.container1}>
                            <img src={web} ></img>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <h5>Web development</h5>
                            <p>Ahmed Zaki</p>
                            <small>free</small>
                        </div>
                        <div className={style.container1}>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <img src={machine} ></img>
                            <h5>Machine learning</h5>
                            <p>Bradyn Kramer</p>
                            <small>20 $ per month </small>
                        </div>
                        <div className={style.container1}>
                            <img src={softskills}></img>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <h5>Soft skills</h5>
                            <p>Thomas Crane</p>
                            <small>free</small>
                        </div>
                        <div className={style.container1}>
                            <img src={interviewer}></img>
                            <div className={style.overlay}>
                                <div className={style.midBtn}>Join</div>
                            </div>
                            <h5>Real interviews</h5>
                            <p>Yassir Fathi</p>
                            <small>Coming soon</small>
                        </div>
                    </div>
                </section>
                <section className={style.sectionE}>
                    <h2>Our global reach</h2>
                    <div className={style.card_number}>

                        <div className={style.number}>
                            <img src={teacher}></img>
                            <h3>Instructors</h3>
                            <Counterup start={0} end={1000} duration={6} separator="," />

                        </div>
                        <div className={style.number} >
                            <img src={book}></img>
                            <h3>Courses</h3>
                            <Counterup start={0} end={5000} duration={6} separator="," />

                        </div>
                        <div className={style.number}>
                            <img src={student}></img>
                            <h3>Learners</h3>
                            <Counterup start={0} end={100000} duration={6} separator="," />

                        </div>
                        <div>
                        </div>
                    </div>
                </section>
                <section className={style.sectionF}>
                    <div className={style.phone}>
                        <img src={logo} className={style.logo}></img>
                        <span>Enlightnment</span>
                    </div>
                    <div className={style.phone_text}>
                        <h1>Get Your</h1>
                        <h1>App Now!</h1>

                        <div>Empower Yourself With Free and paid Online Courses From The World's Leading Experts. Download it now!</div>
                        <button><i className="fab fa-apple"></i>App Store</button>
                        <button><i className="fab fa-google-play"></i>Play Store</button>
                        <p>Trusted by 20M USERS</p>
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
}



export default Home;