import Navbar  from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ParticlesComponent from '../components/ParticlesComponent'

export default function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <ParticlesComponent id="particles" backgroundColor="" />
            <Footer />
        </>
    );
}