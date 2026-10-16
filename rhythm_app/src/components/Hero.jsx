import "./Hero.css";
import heroImage from "../assets/hero3.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <p className="hero-subtitle">
                    MUSIC • PASSION • EXPERIENCE
                </p>

                <h1>
                    Where Music
                    <br />
                    Comes Alive
                </h1>

                <p className="hero-description">
                    We create unforgettable musical experiences that
                    connect people and inspire emotions.
                </p>

                <a href="#portfolio" className="hero-button">
                    Explore Our Work
                </a>

            </div>

            <a href="#about" className="scroll-down">
                <span></span>
                Scroll Down
            </a>

        </section>
    );
}

export default Hero;