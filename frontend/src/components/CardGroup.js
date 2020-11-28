import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CardGroup.css";

import Card from "./Card";

// const blogs = [
// 	{
// 		id: "b1",
// 		title: "Hello World",
// 		author: "Yixuan Li",
// 		content: "This blog says 'Hello World'",
// 		time: "2020-11-26",
// 	},
// 	{
// 		id: "b2",
// 		title: "Hello World 2",
// 		author: "Jaden Li",
// 		content: "This blog says 'Hello World 2'",
// 		time: "2020-11-26",
// 	},
// 	{
// 		id: "b3",
// 		title: "Hello World 3",
// 		author: "Brandon Yang",
// 		content: "This blog says 'Hello World 3'",
// 		time: "2020-11-26",
// 	},
// 	{
// 		id: "b4",
// 		title: "Hello World 4",
// 		author: "Reed Swearingen",
// 		content:
// 			"This blog says 'Hello World 4' and so much more than that that it's so much more than 100 characters and it can't fit as a short description.",
// 		time: "2020-11-26",
// 	},
// ];

const CardGroup = () => {
	const [blogs, setBlogs] = useState([]);

	fetch("http://192.168.0.14:8888/blogs", {
		mode: "cors",
	})
		.then((response) => response.json())
		.then((data) => setBlogs(data.blogs));

	return (
		<div className="card-group">
			{(blogs === undefined || blogs.length === 0) && (
				<h2 className="no-blogs-text">
					No blogs found, <Link to="/blogs/new">create one?</Link>
				</h2>
			)}
			{blogs !== [] &&
				blogs.map((blog) => {
					return (
						<Card
							key={blog._id}
							id={blog._id}
							title={blog.title}
							author={blog.author}
							content={blog.content}
							time={blog.time}
						/>
					);
				})}
		</div>
	);
};

export default CardGroup;
