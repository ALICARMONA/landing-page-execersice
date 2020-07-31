import React from "react";
import { Card } from "./cards";

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
		<div className="container-fluid text-center mt-5">
			{/* Navbar Jumbotron */}
			<div className="row justify-content-md-center">
				{cardElements.map((element, index) => {
					return (
						<div className="col-md-auto" key={index}>
							<Card title={element.title} text={element.text} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
