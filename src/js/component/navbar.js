import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Contact
						</a>

						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">
								Send us an email
							</a>
							<a className="dropdown-item" href="#">
								Call us
							</a>
							<a className="dropdown-item" href="#">
								Find us on social media
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}
