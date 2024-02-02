import React, { ReactNode } from 'react'
import { Container } from './styles'

interface FieldProps {
  children: ReactNode
}

export default function Field({ children }: FieldProps) {
  return <Container>{children}</Container>
}
