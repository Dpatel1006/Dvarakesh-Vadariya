import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaMoon, FaSun, FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header = ({ theme, toggleTheme }) => {
    const [expanded, setExpanded] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const isDark = theme === "dark";

    const navItems = [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "about", label: "About", icon: <FaUser /> },
        { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
        { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
        { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    ];

    const handleScroll = () => {
        const scrollY = window.scrollY;
        for (let item of navItems) {
            const section = document.getElementById(item.id);
            if (section) {
                const offset = section.offsetTop - 100;
                const height = section.offsetHeight;
                if (scrollY >= offset && scrollY < offset + height) {
                    setActiveLink(item.id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            expanded={expanded}
            className={`${isDark ? "bg-dark navbar-dark" : "bg-light navbar-light"} shadow-sm`}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">
                    Deep Delvadiya
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded((prev) => !prev)} />

                <Navbar.Collapse>
                    <Nav className="ms-auto text-center">
                        {navItems.map(({ id, label, icon }) => (
                            <Nav.Link
                                key={id}
                                href={`#${id}`}
                                className={`d-flex align-items-center gap-1 text-capitalize ${activeLink === id ? "fw-bold text-info" : ""
                                    }`}
                                onClick={() => setExpanded(false)}
                            >
                                {icon}
                                {label}
                            </Nav.Link>
                        ))}

                        <Nav.Link
                            onClick={toggleTheme}
                            className="ms-lg-3 mt-2 mt-lg-0"
                            style={{ cursor: "pointer" }}
                        >
                            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />} Theme
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
