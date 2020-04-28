import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
export default class SignIn extends Component {
	constructor(props) {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="col-span-5">
				<h2 className="text-2xl text-black font-semibold mb-5">I already have an account</h2>
				<span className="text-gray-600">Sign in with your email and password</span>

				<form className="mt-4" onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label="email"
						name="email"
						type="email"
						value={this.state.email}
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						label="password"
						name="password"
						type="password"
						value={this.state.password}
					/>

					<div className="flex justify-between">
						<CustomButton type="submit"> Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
