const data = [
	{ link: "#contact", text: "<Kontakt/>".split("") },
	{ link: "#projects", text: "<Projekty/>".split("") },
	{ link: "#about", text: "<O_mně/>".split("") },
];

export default function TextContent() {
	return (
		<>
			{data.map((item) => (
				<li className="float-right pt-4 pr-4 pb-4 pl-5">
					<a
						className=" hover:text-green-400"
						href={item.link.toString()}
						id={item.text.join("")}
					>
						{item.text.map((letter) => (
							<span className="inline-block" id={item.text.join("") + letter}>
								{letter}
							</span>
						))}
					</a>
				</li>
			))}
		</>
	);
}
