import React from "react";
import { Card } from "./cards";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

let cardElements = [
	{
		title: "Card 1",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam!"
	},
	{
		title: "Card 2",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam!"
	},
	{
		title: "Card 3",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam!"
	},
	{
		title: "Card 4",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam!"
	}
];

export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<div className="card-group col d-flex justify-content-center pb-4">
				{cardElements.map((element, index) => {
					return (
						<div className="col-md-auto" key={index}>
							<Card title={element.title} text={element.text} />
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}
