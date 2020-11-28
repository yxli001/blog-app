import React from "react";

import "./NewBlog.css";

import Form from "../components/Form";

const NewBlog = () => {
	return <Form action="http://localhost:8888/blogs" method="POST" />;
};

export default NewBlog;
