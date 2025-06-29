import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = ({ theme = "light" }) => {
    const isDark = theme === "dark";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [toast, setToast] = useState({
        show: false,
        message: "",
        variant: "success",
    });

    const showToast = (message, variant = "success") => {
        setToast({ show: true, message, variant });
        setTimeout(() => setToast({ ...toast, show: false }), 4000);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            showToast("Please fill in all fields.", "danger");
            return;
        }

        emailjs
            .send(
                "service_c77ditc",      // <-- Replace
                "template_yir8pfv",     // <-- Replace
                formData,
                "GRALOTYgrxluzMok5"       // <-- Replace      // replace with your public key
            )
            .then(
                () => {
                    showToast("Message sent successfully!", "success");
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    showToast("Failed to send message. Try again later.", "danger");
                }
            );
    };

    return (
        <section
            id="contact"
            className={`pt-5 pb-3 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
        >

            <Container>
                <h2 className="text-center fw-bold mb-4">Contact Me</h2>

                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form
                            onSubmit={handleSubmit}
                            className={`p-4 rounded-4 shadow-sm ${isDark ? "bg-secondary" : "bg-white"
                                }`}
                        >
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="message" className="mb-4">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    placeholder="Type your message"
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                variant={isDark ? "info" : "primary"}
                                className="w-100"
                            >
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>

                {/* Toast */}
                <ToastContainer position="bottom-end" className="p-3">
                    <Toast
                        bg={toast.variant}
                        onClose={() => setToast({ ...toast, show: false })}
                        show={toast.show}
                        delay={4000}
                        autohide
                    >
                        <Toast.Body className="text-white">{toast.message}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    );
};

export default Contact;
