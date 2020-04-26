import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'

const SignInAndSignUpPage = () => (
  <div className="container grid grid-cols-12 gap-4 mt-10">
    <div className="col-span-1"></div>
    <SignIn />
    <div className="col-span-5">asd</div>
    <div className="col-span-1"></div>
  </div>
)

export default SignInAndSignUpPage