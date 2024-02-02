import React from 'react'
import HeaderInternal from '../../src/components/HeaderInternal'
import { Container } from './styles'
import AboutContent from '../../src/components/About'

export default function About() {
  return (
    <Container>
      <HeaderInternal description="A maior rede de tratamento pokémon." />
      <AboutContent />
    </Container>
  )
}
