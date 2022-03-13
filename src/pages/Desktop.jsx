import React, { Component } from "react";
import ReactModal from "react-modal-resizable-draggable";

class Desktop extends Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}
	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.openModal}>Open modal</button>
				<ReactModal
					initWidth={800}
					initHeight={400}
					onFocus={() => console.log("Modal is clicked")}
					className={"my-modal-custom-class"}
					onRequestClose={this.closeModal}
					isOpen={this.state.modalIsOpen}
				>
					<h3>My Modal</h3>
					<div className="body">
						<p>This is the modal&apos;s body.</p>
					</div>
					<button onClick={this.closeModalOne}>Close modal</button>
				</ReactModal>
				<button onClick={this.openModalOne}>Open modal</button>
				<ReactModal
					initWidth={800}
					initHeight={400}
					onFocus={() => console.log("Modal is clicked")}
					className={"my-modal-custom-class"}
					onRequestClose={this.closeModalOne}
					isOpen={this.state.modalOneIsOpen}
				>
					<h3>My Modal</h3>
					<div className="body">
						<p>This is the modal&apos;s body.</p>
					</div>
					<button onClick={this.closeModalOne}>Close modal</button>
				</ReactModal>
			</div>
		);
	}
}

export default Desktop;
