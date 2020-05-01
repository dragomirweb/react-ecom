import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './assets/css/main.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, creatUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuthState = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await creatUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuthState();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/contact" component={ShopPage} />
					<Route
						exact
						path="/signIn"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (payload) => dispatch(setCurrentUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
