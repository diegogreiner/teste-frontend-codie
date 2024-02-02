import Link from 'next/link'
import React from 'react'
import { NavBarContainer } from './styles'
import { ButtonPrimary } from '../../../../shared/components/ButtonPrimary/styles'

export default function NavBar() {
  return (
    <NavBarContainer>
      <ul>
        <li>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <p>Quem Somos</p>
          </Link>
        </li>
        <li>
          <Link href="/scheduling" style={{ textDecoration: 'none' }}>
            <ButtonPrimary as="p">Agendar Consulta</ButtonPrimary>
          </Link>
        </li>
      </ul>
    </NavBarContainer>
  )
}
