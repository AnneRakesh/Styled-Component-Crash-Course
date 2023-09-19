import React from 'react';

import { StyledHeader } from './StyledComponents/header.styled'

const Header = () => {
  return (
    <StyledHeader bg="red">
      <h1>Hubble</h1>
      {/* <h1 className='test'>Hubble</h1> */}
    </StyledHeader>
  )
}


export default Header;