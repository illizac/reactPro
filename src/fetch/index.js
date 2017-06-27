import fetch from 'isomorphic-fetch'

export const getTestData = params => fetch(`http://www.subreddit.com/r/reactjs.json`)
	.then(res => res.json())