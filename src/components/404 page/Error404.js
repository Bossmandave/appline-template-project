import './Error404.css';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import errorimg from '../../assets/svg/404.svg'
import Footer from '../Footer/footer';

export default function Error404(){
    return(
        <>
            <Navbar/>
            <section className="404">
                <div className="error-wrapper">
                    <img src={errorimg} alt="" />
                    <h1>Sorry, the page can't be found</h1>
                    <p>The page you were looking for appears to have been moved, deleted or does not exist.</p>
                    <Link to="/" className="link">Back to homepage</Link>
                </div>
                 
            </section>
            <Footer/>
        </>
    )
}