import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrapComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
