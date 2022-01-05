import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";
export const Header = () => {
	return (
		<Container>
			<Row bg="dark" style={{ alignItems: "center" }}>
				<Col md="12" lg="6">
					<div>
						<h2 className="hero-title">Hi I'm Karl.</h2>
						<h3 className="hero-title">a full stack developer</h3>
					</div>
					<h4 class="header-info">
						with a passion for creating beautiful, functional, and user-friendly
						applications
					</h4>
				</Col>
				<Col lg="6">
					<div className="header-image-wrapper">
						<img className="header-logo" src={logo} alt="" />
					</div>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
};
