import React from 'react'
import { HeaderContainer } from './styles'
import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  )
}
