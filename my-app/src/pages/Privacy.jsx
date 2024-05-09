import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Terms.css';

const Privacy = () => {
    return(
        <>
  <Navbar />
  <header>
    <h1 className="terms-header">Replay - Privacy Policy</h1>
  </header>
  <main className="terms">
    <section>
      <h2>Introduction</h2>
      <p>
        Welcome to Replay! This Privacy Policy outlines our policies and
        practices regarding the collection, use, and disclosure of your personal
        information when you use our Web App Arcade.
      </p>
    </section>
    <section>
      <h2>Information Collection and Use</h2>
      <p>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>
      {/* Include specific details about what information you collect and how it's used */}
    </section>
    <section>
      <h2>Log Data</h2>
      <p>
        We may also collect information that your browser sends whenever you
        visit our Service or when you access the Service by or through a mobile
        device ("Log Data").
      </p>
      {/* Include details about log data such as IP addresses, browser type, etc. */}
    </section>
    {/* Other sections can be added as needed */}
  </main>
  <Footer />
</>
    );
}

export default Privacy;