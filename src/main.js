import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { Provider, connect } from 'react-redux'

import store from './redux/store.js'

import { getSideMenu } from './redux/createAction.js'

import Home from './pages/home.jsx'

import './assets/style/main.less'
import Page from './page.jsx'
import Login from './pages/login.jsx'
import UserManage from './pages/userManage/userManage.jsx'
import CharacterManage from './pages/characterManage/characterManage.jsx'

//saga replace thunk
// <Route path = {'/home'} component = {Home} onEnter = {() => store.dispatch(getSideMenu())}>  

const routeConfig = (
	<Route path = {'/'} component = {Page}>
		<IndexRedirect to="/home/userManage" />
		<Route path = {'/home'} component = {Home}>
			<Route path = {'userManage'} component = {UserManage}/>
			<Route path = {'characterManage'} component = {CharacterManage}/>
		</Route>
		<Route path = {'/login'} component = {Login}/>
	</Route>
)

ReactDom.render(
	<Provider store = { store }>
		<Router history = {hashHistory}>
			{routeConfig}
		</Router>
	</Provider>,
	document.getElementById('root')
)