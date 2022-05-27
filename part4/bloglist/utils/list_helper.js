const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	return blogs.reduce((previousValue, current) => {
		return previousValue + current.likes;
	}, 0);
};

module.exports = {
	dummy,
	totalLikes,
};
