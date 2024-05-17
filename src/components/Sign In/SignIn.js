import './SignIn.css';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import googleimg from '../../assets/svg/google-color-svgrepo-com.svg'
import Footer from '../Footer/footer';


export default function SignIn(){
    return(
        <>
            <Navbar/>
            <section className="signin-form">
                <div className="form-wrapper">
                    <div className="sign-section">
                        <Link to="" className="link one">Sign In</Link>
                        <Link to="/signup" className="link two">Sign Up</Link>
                    </div>
                    <h2>Sign in to your account</h2>
                    <p>Login to your account for a faster checkout.</p>
                    <div className="sign-google">
                        <img src={googleimg} alt="google logo" />
                        <p>Sign in with Google</p>
                    </div>
                    <p>Or, sign in with your email</p>
                    <form>
                        <label>Your email</label>
                        <input type="text" placeholder='Enter your email' />

                        <label>Your password</label>
                        <input type="password" placeholder='Enter your password' />
                        <div className="form-footer">
                            <div className="check">
                                <input type="checkbox" />
                                <h4>Keep me signed in</h4>
                            </div>

                            <h3>Forgot password?</h3>
                        </div>
                        <button>Sign In</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}