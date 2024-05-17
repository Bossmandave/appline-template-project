import './SignUp.css';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import googleimg from '../../assets/svg/google-color-svgrepo-com.svg'
import Footer from '../Footer/footer';


export default function SignUp(){
    return(
        <>
            <Navbar/>
            <section className="signup-form">
                <div className="form-wrapper">
                    <div className="sign-section">
                        <Link to="/signin" className="link two">Sign In</Link>
                        <Link to="" className="link one">Sign Up</Link>
                    </div>
                    <h2>Create your account</h2>
                    <p>It's totally free and super easy.</p>
                    <div className="sign-google">
                        <img src={googleimg} alt="google logo" />
                        <p>Sign in with Google</p>
                    </div>
                    <p>Or, sign up with your email</p>
                    <form>
                        <label>Full Name</label>
                        <input type="text" placeholder='First and last name' />

                        <label>Work Email</label>
                        <input type="email" placeholder='Enter your email' />

                        <label>Your password</label>
                        <input type="password" placeholder='Enter your password' />
                        <div className="form-footer">
                            <input type="checkbox" />
                            <p>By creating account means you have agree to the <span>Terms and conditions</span>, and our <span>Privacy Policy</span></p>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

