import React from "react";
import "../assets/css/app.css";
import Punpun from "../assets/images/Punpun.png";
import Image01 from "../assets/images/blog/image01.jpg";
import Image02 from "../assets/images/blog/image02.jpg";
import Image03 from "../assets/images/blog/image03.jpg";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="blog-card">
              <div className="image-container">
                <img src={Image01} className="card-img" />
              </div>
              <div className="card-detail">
                <h2 className="text-wrapper">
                  Ex nostrud dolore occaecat proident
                </h2>
                <p className="text-wrapper">
                  Ex nostrud dolore occaecat proident in commodo incididunt.
                  Magna anim reprehenderit sit commodo aute cillum laborum esse
                  pariatur. Quis non pariatur in quis magna reprehenderit
                  laboris culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="blog-card">
              <div className="image-container">
                <img src={Image02} className="card-img" />
              </div>
              <div className="card-detail">
                <h2 className="text-wrapper">
                  Ex nostrud dolore occaecat proident
                </h2>
                <p className="text-wrapper">
                  Ex nostrud dolore occaecat proident in commodo incididunt.
                  Magna anim reprehenderit sit commodo aute cillum laborum esse
                  pariatur. Quis non pariatur in quis magna reprehenderit
                  laboris culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="blog-card">
              <div className="image-container">
                <img src={Image03} className="card-img" />
              </div>
              <div className="card-detail">
                <h2 className="text-wrapper">
                  Ex nostrud dolore occaecat proident
                </h2>
                <p className="text-wrapper">
                  Ex nostrud dolore occaecat proident in commodo incididunt.
                  Magna anim reprehenderit sit commodo aute cillum laborum esse
                  pariatur. Quis non pariatur in quis magna reprehenderit
                  laboris culpa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
