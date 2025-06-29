import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = ({ theme = "light" }) => {
    const isDark = theme === "dark";

    return (
        <section
            id="about"
            className={`py-5 ${isDark ? "bg-secondary text-light" : "bg-white text-dark"}`}
        >
            <Container>
                <h2 className="text-center mb-5 fw-bold">About Me</h2>

                <Row className="align-items-center">
                    {/* Profile Image */}
                    <Col md={5} className="text-center mb-4 mb-md-0">
                        <img
                            src="/profile.jpg"
                            alt="Dvarakesh Vadariya"
                            className="img-fluid rounded-circle shadow"
                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                        />
                    </Col>

                    {/* About Content */}
                    <Col md={7}>
                        <div
                            className={`p-4 rounded-4 shadow-sm ${isDark
                                    ? "bg-dark bg-opacity-75 border border-light"
                                    : "bg-light bg-opacity-75 border border-secondary"
                                }`}
                            style={{ backdropFilter: "blur(10px)" }}
                        >
                            <p className="mb-3">
                                👋 Hi, I’m <strong>Dvarakesh Vadariya</strong>, a passionate Full Stack Developer
                                specializing in MERN (MongoDB, Express, React, Node.js). I love building clean,
                                performant web apps and exploring the latest tech trends.
                            </p>

                            <ul className="ps-3 mb-0">
                                <li>💻 2+ Years Experience in Web Development</li>
                                <li>🚀 Focused on scalable & optimized applications</li>
                                <li>🌐 Open Source Contributor & Tech Blogger</li>
                                <li>🎯 Clean Code | UI/UX Focused | Problem Solver</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
