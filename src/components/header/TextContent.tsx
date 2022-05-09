import { motion } from "framer-motion";

const data = [
	{ link: "#contact", text: "<Kontakt/>".split("") },
	{ link: "#projects", text: "<Projekty/>".split("") },
	{ link: "#about", text: "<O_mně/>".split("") },
];

export default function TextContent() {
	const scaleVariants = {
		hover: {
			scale: 1.1,
			trasition: { duration: 2 },
		},
		clicked: { scale: 0.9, trasition: { duration: 2 } },
	};

	return (
		<>
			{data.map((item) => (
				<li className="float-right pt-4 pr-4 pb-4 pl-5">
					<motion.div
						variants={scaleVariants}
						whileHover="hover"
						whileTap="clicked"
					>
						<a
							href={item.link.toString()}
							id={item.text.join("")}
							className="hover:text-green-400"
						>
							{item.text.map((letter) => (
								<span className="inline-block" id={item.text.join("") + letter}>
									{letter}
								</span>
							))}
						</a>
					</motion.div>
				</li>
			))}
		</>
	);
}
