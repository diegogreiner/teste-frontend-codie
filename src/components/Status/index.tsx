import React, { useContext } from 'react'
import { Main } from './styles'
import Check from './SVG/Check'
import Warning from './SVG/Warning'
import { ScheduledContext } from '../../../pages/scheduling/ScheduledContext'
import { useRouter } from 'next/router'
import { ButtonPrimary } from '../../shared/components/ButtonPrimary/styles'

interface StatusProps {
  type: 'success' | 'error'
  text?: string
}

export default function Status({ type, text }: StatusProps) {
  const { reload } = useRouter()
  const { pokemonsScheduled, dateScheduled, timeScheduled } =
    useContext(ScheduledContext)

  const formatedDate = dateScheduled.split('-').join('/')
  const formatedTime = (time: string) =>
    time
      .split(':')
      .map((value, index) => (index === 0 ? value + 'h' : value + 'm'))
      .join('')

  console.log(pokemonsScheduled)

  if (type === 'success') {
    return (
      <Main>
        <div>
          <h2>Consulta Agendada</h2>
          <Check />
          <p>
            Seu agendamento para dia {formatedDate}, às{' '}
            {formatedTime(timeScheduled)}, <br />
            para {pokemonsScheduled}x pokémons foi realizado com sucesso!
          </p>
          <ButtonPrimary onClick={() => reload()}>
            Fazer Novo Agendamento
          </ButtonPrimary>
        </div>
      </Main>
    )
  }

  return (
    <Main>
      <div>
        <h2>Houve um problema no agendamento</h2>
        <Warning />
        <p>{text}</p>
        <ButtonPrimary onClick={() => reload()}>Fazer Novo Agendamento</ButtonPrimary>
      </div>
    </Main>
  )
}
