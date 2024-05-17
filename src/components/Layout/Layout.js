import About from "../About us/About";
import Blog from "../Blog/blog";
import Faq from "../FAQ/faq";
import Features from "../Features/Features";
import Footer from "../Footer/footer";
import HeroSection from "../Hero Section/hero";
import How from "../How it works/How";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import Report from "../Report/Report";
import Screens from "../Screens/Screens";
import Sponsor from "../Sponsors/sponsor";
import Support from "../Support/support";
import Testimonial from "../Testimonial/Testimonial";
import Cta from "../cta/Cta";


export default function Layout(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <Features/>
            <About/>
            <Report/>
            <How/>
            <Pricing/>
            <Screens/>
            <Cta/>
            <Testimonial/>
            <Faq/>
            <Blog/>
            <Sponsor/>
            <Support/>
            <Footer/>
        </>
    )
}