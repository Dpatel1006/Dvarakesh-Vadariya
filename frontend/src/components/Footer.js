import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = ({ theme = "light" }) => {
    const isDark = theme === "dark";

    return (
        <footer
            className={`py-5 ${isDark ? "bg-dark text-light" : "bg-light text-dark"
                }`}
        >
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={6}>
                        <h5 className="mb-1">Dvarakesh Vadariya</h5>
                        <p className="mb-0 small">Full Stack Developer — MERN | Open Source Contributor</p>
                    </Col>

                    <Col md={6} className="mt-3 mt-md-0 text-md-end">
                        <a
                            href="https://github.com/DELVADIYA-DEEP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`me-3 fs-5 ${isDark ? "text-light" : "text-dark"}`}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/delvadiya-deep/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`me-3 fs-5 ${isDark ? "text-light" : "text-dark"}`}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:deep@example.com"
                            className={`fs-5 ${isDark ? "text-light" : "text-dark"}`}
                        >
                            <FaEnvelope />
                        </a>
                    </Col>
                </Row>

                <hr className={`my-3 ${isDark ? "border-secondary" : "border-dark"}`} />

                <Row>
                    <Col className="text-center small">
                        &copy; {new Date().getFullYear()} Dvarakesh Vadariya. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

// This code defines a footer component for a React application using React Bootstrap.
// It includes contact information and social media links, styled with Bootstrap classes.
// The footer is responsive, adapting to different screen sizes, and includes a copyright notice.
// Icons from react-icons are used for social media links, enhancing visual appeal.
// The component is structured to be easily reusable and maintainable, following best practices in React development.