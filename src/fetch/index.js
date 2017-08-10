import fetch from 'isomorphic-fetch'

export const getUserTable = params => fetch(`http://rapapi.org/mockjsdata/24021/user?`).then(res => res.json())

export const getCharacterTable = params => fetch(`http://rapapi.org/mockjsdata/24021/character?`).then(res => res.json())