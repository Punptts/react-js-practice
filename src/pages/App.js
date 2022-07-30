import React from "react";
import "../assets/css/app.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Punpun from "../assets/images/Punpun.png";
import Card from "../components/blogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { cards } from "../data/cards";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="landing-section">
          <img src={Punpun} className="profile" alt="profile" />
          <div className="my-info">
            <h2> Hey Friends, I am</h2>
            <div className="my-name">
              <h1>Pantita</h1>
              <h1>Suksa-nga</h1>
            </div>
            <p>
              I am a UX/UI designer who is always curious and hungry for an
              adventure in designing things.
            </p>
          </div>
          <div className="social-icons-wrapper">
            <span className="social-icons">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="social-icons">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="social-icons">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </section>
        <section className="section-blog">
          <h1 className="section-header">Latest Journey</h1>
          <div className="card-container">
            {cards.reverse().map((card, idx) => (
              <Card
                title={card.title}
                image={card.image}
                desc={card.desc}
                key={idx}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
