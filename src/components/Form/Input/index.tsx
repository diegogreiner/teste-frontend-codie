import React, { InputHTMLAttributes } from 'react'
import { InputStyled } from './styles'
import { useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormData } from '../../../../pages/scheduling/schema'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof FormData
  type: string
  placeholder: string
  registerField?: keyof FormData
}

export default function Input({ registerField, name, ...props }: InputProps) {
  const { register } = useFormContext<FormData>()

  const isRegisterField = registerField ? registerField : name

  return (
    <InputStyled
      {...props}
      id={name}
      {...register(isRegisterField)}
      autoComplete="off"
    />
  )
}
