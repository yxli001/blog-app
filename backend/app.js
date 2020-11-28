// import packages
const express = require("express");
const mongoose = require("mongoose");

// setup port number
const PORT = 8888 | process.env.PORT;

// setup express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, PUT, DELETE, OPTIONS"
	);
	next();
});

mongoose.connect("mongodb://localhost:27017/blogDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// import models
const Blog = require("./models/Blog");

// get blogs
app.get("/blogs", async (req, res) => {
	await Blog.find({}, (err, foundBlogs) => {
		if (foundBlogs != null && !err) {
			res.status(200).json({
				message: "Blogs found successfully.",
				blogs: foundBlogs,
			});
		} else {
			if (err) {
				res.status(404).json({
					error: err,
				});
			}
		}
	});
});

// create new blog
app.post("/blogs", (req, res) => {
	const blog = req.body;

	if (blog.title && blog.content && blog.author) {
		const newBlog = new Blog({
			...blog,
			time: Date.now(),
		});

		newBlog.save();

		res.status(201).json({
			message: "Blog created successfully.",
		});
	} else {
		res.status(400).json({
			error: "Invalid blog creation.",
		});
	}
});

// get a blog
app.get("/blog/:blogId", async (req, res) => {
	const blogId = req.params.blogId;

	await Blog.findById(blogId, (err, foundBlog) => {
		if (foundBlog != null && !err) {
			res.status(200).json({
				message: "Blog found successfully.",
				blog: foundBlog,
			});
		} else {
			if (err) {
				res.status(404).json({
					error: err,
				});
			}
		}
	});
});

// update a blog
app.put("/blog/:blogId", async (req, res) => {
	const blogId = req.params.blogId;
	const blog = req.body;

	await Blog.findByIdAndUpdate(blogId, { ...blog, time: Date.now() }, (err) => {
		if (!err) {
			res.status(200).json({
				message: "Blog updated successfully.",
				blog: blog,
			});
		} else {
			if (err) {
				res.status(404).json({
					error: err,
				});
			}
		}
	});
});

// delete a blog
app.delete("/blog/:blogId", async (req, res) => {
	const blogId = req.params.blogId;

	await Blog.findByIdAndRemove(blogId, (err) => {
		if (!err) {
			res.status(200).json({
				message: "Blog deleted successfully.",
			});
		} else {
			if (err) {
				res.status(404).json({
					error: err,
				});
			}
		}
	});
});

// delete all blogs
app.delete("/blogs", async (req, res) => {
	await Blog.remove({}, (err) => {
		if (!err) {
			res.status(200).json({
				message: "All blogs deleted successfully.",
			});
		} else {
			if (err) {
				res.status(404).json({
					error: err,
				});
			}
		}
	});
});

// listen on PORT
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
