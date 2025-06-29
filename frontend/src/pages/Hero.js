import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Hero = ({ theme = "dark" }) => {
    const isDark = theme === "dark";

    return (
        <section
            className={`py-5 d-flex align-items-center min-vh-100 ${isDark ? "bg-dark text-light" : "bg-light text-dark"
                }`}
            id="home"
        >
            <Container>
                <Row className="align-items-center">
                    {/* Left Column */}
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="fw-bold mb-3">Hi, I'm Dvarakesh Vadariya</h1>
                        <h4 className="mb-3 text-info">MERN Stack Developer</h4>
                        <p className="mb-4">
                            I build scalable full-stack web apps with React, Node.js, MongoDB, and more.
                            Passionate about open-source, clean code, and continuous learning.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                            <Button
                                variant={isDark ? "info" : "primary"}
                                className="d-flex align-items-center gap-2"
                                href="/resume.pdf"
                                target="_blank"
                            >
                                <FaDownload /> Download Resume
                            </Button>
                            <Button
                                variant={isDark ? "outline-light" : "outline-dark"}
                                className="d-flex align-items-center gap-2"
                                href="#contact"
                            >
                                <FaEnvelope /> Contact Me
                            </Button>
                        </div>
                    </Col>

                    {/* Right Column */}
                    <Col md={6} className="mt-4 mt-md-0 text-center">
                        <img
                            src="/hero-illustration.svg"
                            alt="Full Stack Developer Illustration"
                            className="img-fluid"
                            style={{ maxHeight: "380px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
