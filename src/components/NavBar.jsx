// return
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import octocat from "../assets/images/Octocat.png";
import github from "../assets/images/GitHub-Mark-64px.png";
import React from "react";
export const NavBar = () => {
	return (
		<Navbar variant="dark">
			<Container>
				<Nav>
					<Nav.Link>
						<Link to="/">Work</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about">About</Link>
					</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
				<Nav.Link>
					<Link to="/Desktop">WIP</Link>
				</Nav.Link>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-center"
					/>
				</Navbar.Brand>

				<a href="https://github.com/becomingjohndoe" target="_blank">
					<img
						alt=""
						src={github}
						width="30"
						height="30"
						className="align-right"
						style={{ background: "#fff", borderRadius: "50%" }}
					/>
				</a>
			</Container>
		</Navbar>
	);
};
