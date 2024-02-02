import React from 'react'
import { Container, NavBar } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight } from 'lucide-react'

interface HeaderInternalProps {
  description: string
}

export default function HeaderInternal({ description }: HeaderInternalProps) {
  const { asPath } = useRouter()

  const paths: Record<string, string> = {
    '/': 'Home',
    '/about': 'Quem Somos',
    '/scheduling': 'Agendar Consulta',
  }

  const pathName: string = paths[asPath]

  return (
    <Container>
      <NavBar>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <p>Home</p>
        </Link>
        <ChevronRight size={15} />
        <Link href={asPath} style={{ textDecoration: 'none' }}>
          <p>{pathName}</p>
        </Link>
      </NavBar>
      <h1>{pathName}</h1>
      <p>{description}</p>
    </Container>
  )
}
