import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
  <div className="container mb-5 py-3">
    <div className="grid grid-cols-12 gap-4">
      <Link className="col-span-2" to="/">
        <Logo />
      </Link>
      <div className="col-span-10 flex justify-end items-center ">
        <Link className="px-4 py-3 hover:text-gray-600" to="/">
          HOME
        </Link>
        <Link className="px-4 py-3 hover:text-gray-600" to="/shop">
          SHOP
        </Link>
        <Link className="px-4 py-3 hover:text-gray-600" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="px-4 py-3 hover:text-gray-600 cursor-pointer"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="px-4 py-3 hover:text-gray-600" to="/signIn">
            SIGN IN
          </Link>
        )}
        <div className="pb-1 relative">
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
