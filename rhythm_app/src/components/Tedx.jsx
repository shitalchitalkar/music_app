import "./Tedx.css";
import tedexImage from "../assets/tedx1.jpg";

function Tedx(){

    return(
        <section id="tedx" className="tedx">
      <div className="tedx-content">
        <p className="tedx-subtitle">
          IDEAS WORTH SPREADING
        </p>

        <h2>
          Rhythm Meets
          <br />
          <span>TEDx</span>
        </h2>

        <p className="tedx-description">
          Bringing ideas, music and inspiring people
          together through powerful experiences.
          Discover how Rhythm creates memorable
          moments on the TEDx stage.
        </p>

        <a href="#contact" className="tedx-button">
          Know More →
        </a>
      </div>

      <div className="tedx-image">
        <img
          src={tedexImage}
          alt="TEDx live event"
        />
      </div>
    </section>
    )
}

export default Tedx;