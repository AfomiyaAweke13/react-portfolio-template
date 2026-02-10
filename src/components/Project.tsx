import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>My GitHub Projects</h1>

            <div className="projects-grid">

                {/* Restaurant Reviews NLP */}
                <div className="project">
                    <a
                        href="https://github.com/AfomiyaAweke13/Restorant-reviews-NLP"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://opengraph.githubassets.com/1/AfomiyaAweke13/Restorant-reviews-NLP"
                            className="zoom"
                            alt="Restaurant Reviews NLP GitHub repo"
                            width="100%"
                        />
                    </a>
                    <h2>Restaurant Reviews NLP</h2>
                    <p>
                        Natural Language Processing project for sentiment analysis of restaurant reviews
                        using machine learning and NLP techniques.
                    </p>
                </div>

                {/* Netflix Clone */}
                <div className="project">
                    <a
                        href="https://github.com/AfomiyaAweke13/Neflexi-clone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://opengraph.githubassets.com/1/AfomiyaAweke13/Neflexi-clone"
                            className="zoom"
                            alt="Netflix clone GitHub repo"
                            width="100%"
                        />
                    </a>
                    <h2>Netflix Clone</h2>
                    <p>
                        React-based Netflix UI clone featuring movie rows, banners,
                        and a responsive modern layout.
                    </p>
                </div>

                {/* Amazon Clone */}
                <div className="project">
                    <a
                        href="https://github.com/AfomiyaAweke13/amazon-clon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://opengraph.githubassets.com/1/AfomiyaAweke13/amazon-clon"
                            className="zoom"
                            alt="Amazon clone GitHub repo"
                            width="100%"
                        />
                    </a>
                    <h2>Amazon Clone</h2>
                    <p>
                        E-commerce web application inspired by Amazon.
                        Includes product listings, cart functionality, and React UI.
                    </p>
                </div>

                {/* Portfolio */}
                <div className="project">
                    <a
                        href="https://github.com/AfomiyaAweke13/portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://opengraph.githubassets.com/1/AfomiyaAweke13/portfolio"
                            className="zoom"
                            alt="Developer portfolio GitHub repo"
                            width="100%"
                        />
                    </a>
                    <h2>Developer Portfolio</h2>
                    <p>
                        Personal developer portfolio built with React.
                        Showcases projects, skills, and GitHub work.
                    </p>
                </div>

                {/* GitHub Profile */}
                <div className="project">
                    <a
                        href="https://github.com/AfomiyaAweke13"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://opengraph.githubassets.com/1/AfomiyaAweke13"
                            className="zoom"
                            alt="GitHub profile preview"
                            width="100%"
                        />
                    </a>
                    <h2>GitHub Profile</h2>
                    <p>
                        Browse all my repositories, contributions,
                        and open-source work on GitHub.
                    </p>
                </div>

            </div>

            <div className="github-cta">
                <a
                    href="https://github.com/AfomiyaAweke13"
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                >
                    View GitHub Profile →
                </a>
                <p> Star repos ·  Report issues ·  Collaborate</p>
            </div>
        </div>
    );
}

export default Project;
