import React from "react";

import "./NewBlog.css";

import Form from "../components/Form";

const NewBlog = () => {
	return <Form action="http://192.168.0.14:8888/blogs" method="POST" />;
};

export default NewBlog;
