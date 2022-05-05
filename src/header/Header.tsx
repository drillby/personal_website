import logo from "../icons/logo.svg";
import TextContent from "./TextContent";

const Header = () => {
	// on hover efect
	return (
		<ul className="list-none overflow-hidden w-full text-lg">
			<li className="float-left pt-4 pl-4 pb-4">
				<img width={50} src={logo} alt="" />
			</li>
			<TextContent></TextContent>
		</ul>
	);
};
export default Header;
