import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

export function Home() {
	return (
		<>
			<div className="container">
				<Navbar />
				<Jumbotron />
				<div className="d-flex justify-content-center">
					<Card
						img={
							"https://i.pinimg.com/736x/04/8c/77/048c773225d36e8c00f8006c10ce23df.jpg"
						}
						body={"Hide pain Bro!"}
						title={"Are you having a good time with React?"}
						link={
							"https://es.reactjs.org/docs/getting-started.html"
						}
						buttoncolor={"warning"}
					/>

					<Card
						img={
							"https://i.pinimg.com/736x/04/8c/77/048c773225d36e8c00f8006c10ce23df.jpg"
						}
						body={"I hope you understand sarcasm"}
						title={
							"Sure, I love it!!! #ReactLover #MyMomKnowsJavascript"
						}
						link={"https://es.reactjs.org/tutorial/tutorial.html"}
						buttoncolor={"warning"}
					/>

					<Card
						img={
							"https://i.pinimg.com/736x/04/8c/77/048c773225d36e8c00f8006c10ce23df.jpg"
						}
						body={"Javascript"}
						title={"When you finally understand HTML + CSS"}
						link={"https://github.com/facebook/react/"}
						buttoncolor={"warning"}
					/>
				</div>
			</div>
		</>
	);
}
