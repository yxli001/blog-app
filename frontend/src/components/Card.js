import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import TimeStamp from "react-timestamp";

import "./Card.css";

import Button from "./Button";

const Card = (props) => {
	const [redirect, setRedirect] = useState(false);

	function handleDelete() {
		fetch(`http://localhost:8888/blog/${props.id}`, {
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		});
		setRedirect(true);
	}

	if (redirect) {
		return <Redirect to="/" />;
	}

	return (
		<div className="card">
			<div className="left">
				<Link className="card__title" to={`/blog/${props.id}`}>
					{props.title}
				</Link>
				<h4 className="card__author">
					{props.author} <TimeStamp date={props.time} className="card__time" />
				</h4>
				<p className="card__content">
					{props.content.length > 80
						? `${props.content.slice(0, 80)}...`
						: props.content}{" "}
					{props.content.length > 80 && (
						<Link to={`/blog/${props.id}`} className="card__read-more">
							read more
						</Link>
					)}
				</p>
			</div>
			<div className="right">
				<Button
					href={`/blog/${props.id}/edit`}
					text="Edit"
					backgroundColor="var(--color-primary-dark)"
					color="var(--color-dark-1)"
				/>
				<Button
					href="/"
					text="Delete"
					backgroundColor="orangered"
					color="var(--color-dark-1)"
					onClick={handleDelete}
				/>
			</div>
		</div>
	);
};

export default Card;
