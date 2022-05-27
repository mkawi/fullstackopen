const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	return blogs.reduce((previousValue, current) => {
		return previousValue + current.likes;
	}, 0);
};

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) {
		return {};
	}

	const newObj = blogs.reduce((previousValue, current) =>
		previousValue.likes < current.likes ? current : previousValue
	);

	return { title: newObj.title, author: newObj.author, likes: newObj.likes };
};

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
};
