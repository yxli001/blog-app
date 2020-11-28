import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<Link to="/" className="navbar__link navbar__brand">
						Blogs
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/blogs/new" className="navbar__link">
						New blog
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/" className="navbar__link">
						Log in
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/" className="navbar__link">
						Sign up
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
