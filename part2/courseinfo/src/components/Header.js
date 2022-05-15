const Header = (props) => {
	return (
		<div className="header">
			<h1>{props.course.name}</h1>
		</div>
	);
};

export default Header;
