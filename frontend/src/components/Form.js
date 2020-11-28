import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Form.css";

import Button from "./Button";

const Form = (props) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [edit, setEdit] = useState(props.edit);

	function handleSubmit(e) {
		e.preventDefault();
		fetch(props.action, {
			method: props.method, // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify({
				title: title,
				author: author,
				content: content,
			}), // body data type must match "Content-Type" header
		});
		setRedirect(true);
	}

	function handleTitleChange(e) {
		if (edit) {
			setTitle(props.editBlog.title);
			setContent(props.editBlog.content);
			setAuthor(props.editBlog.author);
			setEdit(false);
		}
		setTitle(e.target.value);
	}

	function handleAuthorChange(e) {
		if (edit) {
			setTitle(props.editBlog.title);
			setContent(props.editBlog.content);
			setAuthor(props.editBlog.author);
			setEdit(false);
		}
		setAuthor(e.target.value);
	}

	function handleContentChange(e) {
		if (edit) {
			setTitle(props.editBlog.title);
			setContent(props.editBlog.content);
			setAuthor(props.editBlog.author);
			setEdit(false);
		}
		setContent(e.target.value);
	}

	if (redirect) {
		return <Redirect to="/" />;
	}

	return (
		<div className="form-container">
			<form
				action={props.action}
				method={props.method}
				className="form"
				onSubmit={handleSubmit}
			>
				<label htmlFor="title" className="form__label">
					Title:
				</label>
				<input
					type="text"
					name="title"
					id="title"
					className="form__input"
					value={edit ? props.editBlog.title : title}
					onChange={handleTitleChange}
					required
				/>
				<label htmlFor="author" className="form__label">
					Author:
				</label>
				<input
					type="text"
					name="author"
					id="author"
					className="form__input"
					value={edit ? props.editBlog.author : author}
					onChange={handleAuthorChange}
					required
				/>
				<label htmlFor="content" className="form__label">
					Content:
				</label>
				<textarea
					name="content"
					id="content"
					cols="30"
					rows="10"
					className="form__input"
					value={edit ? props.editBlog.content : content}
					onChange={handleContentChange}
					required
				></textarea>

				<div className="btn-group">
					<Button
						text="Back"
						href="/"
						color="var(--color-light-1)"
						backgroundColor="slateblue"
					/>
					<button className="form__submit" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
