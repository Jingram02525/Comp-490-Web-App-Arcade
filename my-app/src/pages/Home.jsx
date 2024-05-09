import Navbar  from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ParticlesComponent from '../components/ParticlesComponent'
import PopUpForm from "../components/PopUpForm";

export default function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <PopUpForm />
            <Footer />
            <ParticlesComponent id="particles" backgroundColor="" />
        </>
    );
}