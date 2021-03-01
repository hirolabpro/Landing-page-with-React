import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(cprops) {
	return (
		<div
			className="card text-white bg-secondary mb-3 m-3"
			style={{ width: "300px" }}>
			<img className="card-img-top" src={cprops.img} />
			<div className="card-body">
				<h5 className="card-title">{cprops.title}</h5>
				<p className="card-text">{cprops.body}</p>
				<a
					href={cprops.link}
					className={"btn btn-" + cprops.buttoncolor}>
					Click here to learn more
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	link: PropTypes.string,
	buttoncolor: PropTypes.string
};
