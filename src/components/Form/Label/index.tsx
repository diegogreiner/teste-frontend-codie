import React, { LabelHTMLAttributes, ReactNode } from 'react'
import { LabelStyled } from './styles'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
  text: string
}

export default function Label({ htmlFor, text }: LabelProps) {
  return <LabelStyled htmlFor={htmlFor}>{text}</LabelStyled>
}
