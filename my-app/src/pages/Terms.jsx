import "../styles/Terms.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
    <Navbar />
    <header>
      <h1 className="terms-header text-white">Replay - Terms and Conditions</h1>
    </header>
    <main className="terms">
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Replay! These terms and conditions outline the rules and
          regulations for the use of Replay's Web App Arcade.
        </p>
      </section>
      <section>
        <h2>Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, Replay and/or its
          licensors own all the intellectual property rights and materials
          contained in this Website.
        </p>
      </section>
      <section>
        <h2>Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>
            selling, sublicensing and/or otherwise commercializing any Website
            material;
          </li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>
            using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li>
            using this Website in any way that impacts user access to this
            Website;
          </li>
          <li>
            using this Website contrary to applicable laws and regulations, or in
            any way may cause harm to the Website, or to any person or business
            entity;
          </li>
          <li>
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </li>
        </ul>
      </section>
      {/* Other sections can be added as needed */}
    </main>
    <Footer />
  </>  
  );
};

export default Terms;