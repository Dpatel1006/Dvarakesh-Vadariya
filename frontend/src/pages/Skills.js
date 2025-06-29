import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Node.js & Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "Bootstrap & Tailwind", level: 90 },
    { name: "REST APIs", level: 85 },
];

const Skills = ({ theme = "light" }) => {
    const isDark = theme === "dark";

    return (
        <section
            id="skills"
            className={`py-5 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
            <Container>
                <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
                    Skills
                </h2>

                <Row>
                    {skills.map((skill, idx) => (
                        <Col md={6} className="mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="mb-2 d-flex justify-content-between">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <ProgressBar
                                now={skill.level}
                                variant={isDark ? "info" : "primary"}
                                animated
                                style={{ height: "10px", borderRadius: "5px" }}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
