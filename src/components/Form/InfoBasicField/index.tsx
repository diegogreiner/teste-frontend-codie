import React, { useContext } from 'react'
import Field from '../Field'
import Label from '../Label'
import Input from '../Input'
import Select from '../Select'
import ErrorMessage from '../ErrorMessage'
import { SchedulingContext } from '../../../../pages/scheduling/SchedulingContext'

export default function InfoBasicField() {
  const { regions } = useContext(SchedulingContext)
  const { cities } = useContext(SchedulingContext)

  return (
    <>
      <Field>
        <div>
          <Label htmlFor="name" text="Nome" />
          <Input name="name" type="text" placeholder="Digite seu nome" />
          <ErrorMessage error="name" />
        </div>
        <div>
          <Label htmlFor="lastname" text="Sobrenome" />
          <Input
            name="lastname"
            type="text"
            placeholder="Digite seu sobrenome"
          />
          <ErrorMessage error="lastname" />
        </div>
      </Field>
      <Field>
        <div>
          <Label htmlFor="country" text="Região" />
          <Select
            placeholder="Selecione sua região"
            name="country"
            list={regions as string[]}
          />
          <ErrorMessage error="country" />
        </div>
        <div>
          <Label htmlFor="city" text="Cidade" />
          <Select
            placeholder="Selecione sua cidade"
            name="city"
            list={cities as string[]}
          />
          <ErrorMessage error="city" />
        </div>
      </Field>
    </>
  )
}
