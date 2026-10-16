
import "./Portfolio.css";
import { useState } from "react";
import drumsImage from "../assets/drum1.jpg";
import corporateImage from "../assets/corporate1.jpg";
import harmonicaImage from "../assets/harmonica1.jpg";

import drum2 from "../assets/drum2.jpg";
import drum3 from "../assets/drum3.jpg";

import corporate2 from "../assets/corporate2.jpg";
import corporate3 from "../assets/corporate3.jpg";

import harmonica2 from "../assets/harmonica2.jpg";
import harmonica3 from "../assets/harmonica3.jpg";

import drumsVideo from "../assets/drum_show.mp4";

import drumsVideo1 from "../assets/drum_show1.mp4";



/*const projects = [
    {
        number: "01",
        title: "Drums Circle",
        description:
            "An interactive rhythm experience bringing people together through music.",
        image: drumsImage,
    },
    {
        number: "02",
        title: "Corporate Shows",
        description:
            "Live musical performances designed to create memorable corporate experiences.",
        image: corporateImage,
    },
    {
        number: "03",
        title: "Harmonica Sessions",
        description:
            "Intimate musical sessions creating a unique and soulful experience.",
        image: harmonicaImage,
    },
];*/



const projects = [
    {
        number: "01",
        title: "Drums Circle",
        description:
            "An interactive rhythm experience bringing people together through music.",
        image: drumsImage,
        photos: [drumsImage, drum2, drum3],
        videos: [drumsVideo, drumsVideo1],
    },
    {
        number: "02",
        title: "Corporate Shows",
        description:
            "Live musical performances designed to create memorable corporate experiences.",
        image: corporateImage,
        photos: [corporateImage, corporate2, corporate3],
        video: "",
    },
    {
        number: "03",
        title: "Harmonica Sessions",
        description:
            "Intimate musical sessions creating a unique and soulful experience.",
        image: harmonicaImage,
        photos: [harmonicaImage, harmonica2, harmonica3],
        video: "",
    },
];



function Portfolio() {

    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section id="portfolio" className="portfolio">

            <div className="portfolio-header">
                <p>OUR PORTFOLIO</p>
                <h2>Music. Events. Experiences.</h2>
            </div>

            <div className="portfolio-grid">

                {projects.map((project) => (

                    <div
                        className="portfolio-item"
                        key={project.number}
                        onClick={() => setSelectedProject(project)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setSelectedProject(project);
                            }
                        }}
                    >


                        <div
                            className="portfolio-image clickable"
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>



                        <div className="portfolio-content">

                            <span>{project.number}</span>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <button
                                className="view-project-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedProject(project);
                                }}
                            >
                                View Project →
                            </button>

                        </div>


                    </div>
                ))}

            </div>




            {selectedProject && (
                <div
                    className="project-modal"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>

                        <h2>{selectedProject.title}</h2>

                        <p>{selectedProject.description}</p>


                        {selectedProject.videos?.length > 0 && (
                            <div className="project-videos">
                                <h3>Show Videos</h3>

                                <div className="project-video-grid">
                                    {selectedProject.videos.map((video, index) => (
                                        <div className="project-video" key={index}>
                                            <video controls preload="metadata">
                                                <source src={video} type="video/mp4" />
                                                Your browser does not support video playback.
                                            </video>

                                            <p>Show Video {index + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}







                        <div className="project-gallery">
                            {selectedProject.photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`${selectedProject.title} ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}



        </section>
    );
}

export default Portfolio;

