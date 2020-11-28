import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./EditBlog.css";

import Form from "../components/Form";

const EditBlog = () => {
	let { bid } = useParams();
	let [editBlog, setEditBlog] = useState({});

	async function getBlog() {
		const response = await fetch(`http://localhost:8888/blog/${bid}`);
		const data = await response.json();

		setEditBlog(await data.blog);
	}

	getBlog();

	return (
		<Form
			action={`http://localhost:8888/blog/${bid}`}
			method="PUT"
			edit={true}
			editBlog={editBlog}
		/>
	);
};

export default EditBlog;
