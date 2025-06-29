import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const projects = [
    {
        id: 1,
        title: "Task Manager App",
        image: "/projects/task-manager.jpg",
        description: "A React + Node.js app to manage tasks with user authentication, CRUD operations, and responsive design.",
        tech: "React, Node.js, MongoDB, Bootstrap",
        demo: "https://example.com/demo1",
        github: "https://github.com/DELVADIYA-DEEP/task-manager",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        image: "/projects/ecommerce.jpg",
        description: "A full-stack e-commerce app with product filtering, Stripe payment integration, and admin management.",
        tech: "MERN Stack, Stripe API",
        demo: "https://example.com/demo2",
        github: "https://github.com/DELVADIYA-DEEP/ecommerce-app",
    },
    // Add more projects as needed
];

const Projects = ({ theme = "light" }) => {
    const isDark = theme === "dark";
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    return (
        <section
            id="projects"
            className={`py-5 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
            <Container>
                <h2 className="text-center fw-bold mb-5">Projects</h2>

                <Row>
                    {projects.map((project, idx) => (
                        <Col md={6} lg={4} key={project.id} className="mb-4">
                            <Card
                                className={`h-100 shadow-sm border-0 ${isDark ? "bg-secondary text-light" : "bg-white text-dark"
                                    }`}
                            >
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.tech}</Card.Text>
                                    <Button variant="info" onClick={() => openModal(project)}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Modal */}
                <Modal show={showModal} onHide={closeModal} centered size="lg" className={isDark ? "text-light" : ""}>
                    <Modal.Header closeButton className={isDark ? "bg-dark border-secondary" : ""}>
                        <Modal.Title>{selectedProject?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={isDark ? "bg-dark" : ""}>
                        <img
                            src={selectedProject?.image}
                            alt={selectedProject?.title}
                            className="img-fluid mb-3 rounded"
                        />
                        <p>{selectedProject?.description}</p>
                        <p><strong>Tech Stack:</strong> {selectedProject?.tech}</p>
                    </Modal.Body>
                    <Modal.Footer className={isDark ? "bg-dark border-secondary" : ""}>
                        <Button
                            variant="secondary"
                            href={selectedProject?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="primary"
                            href={selectedProject?.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </section>
    );
};

export default Projects;
