import React from "react";
import PropTypes from "prop-types";

export function Card({ title, text }) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://picsum.photos/500/325"
				className="card-img-top"
				alt="random images"
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
