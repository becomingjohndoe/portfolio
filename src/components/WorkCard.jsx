import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import giggleImage from "../assets/images/giggle-app-main-showcase.png";
import toppitImage from "../assets/images/toppit.png";
import toppitAPIImage from "../assets/images/toppit-api.png";
import paper from "../assets/images/paper-stocks.png";
export const WorkCard = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Row>
				<Col>
					<a href="https://github.com/becomingjohndoe/paper-stocks" target="_blank">
						<div className="work-container">
							<div className="work-details">
								<span>WEB APP</span>
								<h2 className="work-header">Paper Stocks</h2>
							</div>
							<img src={paper} alt="" className="work-web-image" />
						</div>
					</a>
					<a href="https://github.com/becomingjohndoe/NC-Giggle" target="_blank">
						<div className="work-container">
							<div className="work-details">
								<span>MOBILE</span>
								<h2 className="work-header">Giggle</h2>
							</div>
							<img src={giggleImage} alt="" className="work-app-image" />
						</div>
					</a>
					<a href="https://github.com/becomingjohndoe/news-frontend" target="_blank">
						<div className="work-container">
							<div className="work-details">
								<span>WEB APP</span>
								<h2 className="work-header">Toppit</h2>
							</div>
							<img src={toppitImage} alt="" className="work-web-image" />
						</div>
					</a>
					<a href="https://github.com/becomingjohndoe/news-api" target="_blank">
						<div className="work-container">
							<div className="work-details">
								<span>RESTful API</span>
								<h2 className="work-header">Toppit Back End</h2>
							</div>
							<img src={toppitAPIImage} alt="" className="work-web-image" />
						</div>
					</a>
				</Col>
			</Row>
		</Container>
	);
};
