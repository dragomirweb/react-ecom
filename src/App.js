import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './assets/css/main.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, creatUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		this.unsubscribeFromAuthState = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await creatUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuthState();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/contact" component={ShopPage} />
					<Route exact path="/signIn" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
