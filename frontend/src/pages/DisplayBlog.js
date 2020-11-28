import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import TimeStamp from "react-timestamp";

import "./DisplayBlog.css";

import Button from "../components/Button";

const DisplayBlog = () => {
	const { bid } = useParams();
	const [blog, setBlog] = useState({});
	const [redirect, setRedirect] = useState(false);

	async function getBlog() {
		const response = await fetch(`http://localhost:8888/blog/${bid}`);
		const data = await response.json();
		setBlog(await data.blog);
	}

	function handleDelete() {
		fetch(`http://localhost:8888/blog/${bid}`, {
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		});
		setRedirect(true);
	}

	getBlog();

	if (redirect) {
		return <Redirect to="/" />;
	}

	return (
		<div className="blog-container">
			<h1 className="title">{blog.title}</h1>
			<h4 className="author">
				{blog.author}{" "}
				<TimeStamp
					date={blog.time}
					style={{ fontSize: "1.2rem", marginLeft: "1rem" }}
					relative
				/>
			</h4>
			<p className="content">{blog.content}</p>
			<Button
				text="Back"
				href="/"
				color="var(--color-light-1)"
				backgroundColor="slateblue"
			/>
			<Button
				href={`/blog/${bid}/edit`}
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
	);
};

export default DisplayBlog;
