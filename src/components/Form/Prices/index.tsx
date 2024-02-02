import { useFormContext } from 'react-hook-form'
import { Bar, ContainerPrices, Total } from './styles'
import React, { useContext } from 'react'
import { ButtonPrimary } from '../../../shared/components/ButtonPrimary/styles'

export default function Prices() {
  const { getValues } = useFormContext()

  const PokemonsSelected = getValues('team')
  const isListPokemons = PokemonsSelected && PokemonsSelected.length > 0
  const parseNumberAndFormat = (number: number) => {
    return number.toFixed(2).replace('.', ',')
  }

  return (
    <>
      <Bar></Bar>
      <ContainerPrices>
        <div>
          <p>Número de pokémons a serem atendidos:</p>
          <p>
            <span>{isListPokemons ? '0' + PokemonsSelected.length : '0'}</span>
          </p>
        </div>
        <div>
          <p>Atendimento unitário por pokémon:</p>
          <p>
            R$
            <span>70,00</span>
          </p>
        </div>
        <div>
          <p>Subtotal:</p>
          <p>
            R$
            <span>
              {isListPokemons
                ? parseNumberAndFormat(70 * PokemonsSelected.length)
                : '0,00'}
            </span>
          </p>
        </div>
        <div>
          <p>Taxa geracional*:</p>
          <p>
            R$
            <span>
              {isListPokemons
                ? parseNumberAndFormat(
                    (3 * (70 * PokemonsSelected.length)) / 100
                  )
                : '0,00'}
            </span>
          </p>
        </div>
        <div>
          <span>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </span>
        </div>
      </ContainerPrices>
      <Total>
        <h3>
          Valor Total: R${' '}
          {isListPokemons &&
            parseNumberAndFormat(
              70 * PokemonsSelected.length +
                (3 * (70 * PokemonsSelected.length)) / 100
            )}
        </h3>
        <ButtonPrimary>Concluir Agendamento</ButtonPrimary>
      </Total>
    </>
  )
}
