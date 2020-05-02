import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
  <div className="container grid grid-cols-12 gap-4 mt-10">
    <SignIn />
    <div className="col-span-2" />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
