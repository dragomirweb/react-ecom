import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, creatUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
      errorMessage: '',
      confirmationMessage: ''
		};
	}

	handleSubmit = async (event) => {
		const { displayName, email, password, confirmPassword } = this.state;
		event.preventDefault();

		if (password !== confirmPassword) {
			this.setState({ errorMessage: "Passwords don't match." });
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await creatUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
        confirmPassword: '',
        confirmationMessage: 'User was created successfully'
			});
		} catch (e) {
			this.setState({ errorMessage: e.message });
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		if (this.state.errorMessage.length > 0) this.setState({ errorMessage: '' });
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword, errorMessage, confirmationMessage } = this.state;
		return (
			<div className="col-span-5">
				<h2 className="text-2xl text-black font-semibold mb-5">I do not have an account</h2>
				<span className="text-gray-600">Sign up with your email and password</span>

				<form className="mt-4" onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label="Display Name"
						name="displayName"
						type="text"
						value={displayName}
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						label="Email"
						name="email"
						type="email"
						value={email}
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						label="Password"
						name="password"
						type="password"
						value={password}
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						required
					/>

					{errorMessage && errorMessage.length > 0 ? (
						<div className="flex mb-4">
							<p className="text-red-700">{errorMessage}</p>
						</div>
          ) : null}
          {confirmationMessage && confirmationMessage.length > 0 ? (
						<div className="flex mb-4">
							<p className="text-green-700">{confirmationMessage}</p>
						</div>
					) : null}

					<div className="flex justify-between">
						<CustomButton type="submit">Sign Up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
