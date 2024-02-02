import React, { useContext } from 'react'
import Field from '../Field'
import Label from '../Label'
import Select from '../Select'
import { ContainerButton, Description } from './styles'
import { Plus } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormData } from '../../../../pages/scheduling/schema'
import ErrorMessage from '../ErrorMessage'
import { SchedulingContext } from '../../../../pages/scheduling/SchedulingContext'

export default function TeamField() {
  const { pokemons } = useContext(SchedulingContext)

  const form = useForm<FormData>({
    resolver: yupResolver(FormData),
    mode: 'onTouched',
  })

  const { control } = form

  const { fields, append } = useFieldArray({
    control,
    name: 'team',
  })

  const handleAddPokemon = () => {
    if (fields.length < 6) {
      append({ pokemon: '' })
    }
  }

  return (
    <>
      <Field>
        <div>
          <h4>Cadastre seu time</h4>
          <Description>
            Atendemos até 06 pokémons por vez{' '}
            {fields.length <= 0 && <ErrorMessage error="team" />}
          </Description>
        </div>
      </Field>
      {fields.map((field, index) => (
        <Field key={field.id}>
          <h4>{`Pokemon 0${index + 1}`}</h4>
          <span>
            <Select
              placeholder="Selecione seu pokémon"
              list={pokemons as string[]}
              index={index}
              name={`team.${index}`}
            />
            <ErrorMessage error="team" />
          </span>
        </Field>
      ))}
      <Field>
        <ContainerButton>
          {fields.length < 6 && (
            <div onClick={handleAddPokemon}>
              <span>Adicionar novo pokémon ao time...</span>
              <Plus size={10} color="#1D1D1D" strokeWidth={4} />
            </div>
          )}
        </ContainerButton>
      </Field>
    </>
  )
}
