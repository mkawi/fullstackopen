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

const mostBlogs = (blogs) => {
	if (blogs.length === 0) {
		return {};
	} else {
		let authorCounts = blogs.reduce((authorCount, blog) => {
			authorCount[blog.author] = (authorCount[blog.author] || 0) + 1;
			return authorCount;
		}, {});
		let maxCount = Math.max(...Object.values(authorCounts));
		let mostFrequent = Object.keys(authorCounts).filter(
			(author) => authorCounts[author] === maxCount
		);
		return {
			author: mostFrequent[0],
			blogs: maxCount,
		};
	}
};

module.exports = {
	totalLikes,
	favoriteBlog,
	mostBlogs,
};
