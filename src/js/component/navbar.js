import React from 'react'
import { Link } from "react-router-dom";
import logo from "/workspace/starwarscards/src/img/logo.png"

export const Navbar=() => {
	return (
		<div className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">{logo}</Link>
			<div className="ml-auto">
				<Link to="/favorites">
					<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites +
					</button>
					<ul className="dropdown-menu">
						<li></li>
					</ul>
				</Link>
			</div>
		</div>
	)
}

 