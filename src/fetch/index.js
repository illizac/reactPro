import fetch from 'isomorphic-fetch'

export const getTestData = params => fetch(`http://rapapi.org/mockjsdata/24021/user?`)
	.then(res => {
		return res.json()})