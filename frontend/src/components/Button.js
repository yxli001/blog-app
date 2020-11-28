import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
	return (
		<Link
			to={props.href}
			className="btn"
			style={{ backgroundColor: props.backgroundColor, color: props.color }}
			onClick={props.onClick}
		>
			{props.text}
		</Link>
	);
};

export default Button;
