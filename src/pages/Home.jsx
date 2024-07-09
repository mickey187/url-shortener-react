import CallToAction from "../components/common/CTA/CallToAction";
import Features from "../components/common/Features/Features";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Hero from "../components/common/Hero/Hero";
import Shortener from "../components/common/Shortener/Shortener";
import Stat from "../components/common/Stats/Stat";

function Home(){
return(
    <>
    <Header/>
    <Hero/>
    <Shortener/>
    <Stat/>
    <Features/>
    <CallToAction/>
    <Footer/>
    </>
);
}

export default Home;