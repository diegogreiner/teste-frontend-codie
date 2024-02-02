import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { FormData } from '../../../../pages/scheduling/schema'
import { Error } from './styles'

interface ErrorMessageProps {
  error: keyof FormData
  index?: number
  name?: keyof FormData
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext<FormData>()

  if (error === 'team') {
    return <Error>{errors[error]?.message?.toString()}</Error>
  }

  return <Error>{errors[error] && errors[error]?.message?.toString()}</Error>
}
