import React, { useContext, useEffect, useState } from 'react'
import { Container, Main } from './styles'
import HeaderInternal from '../../src/components/HeaderInternal'
import InfoBasicField from '../../src/components/Form/InfoBasicField'
import TeamField from '../../src/components/Form/TeamField'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormData } from './schema'
import { SchedulingContext } from './SchedulingContext'
import container from '../../src/inversify.config'
import ApiService from '../../src/services/ApiService'
import SchedulingContainer from '../../src/components/Form/Scheduling'
import Prices from '../../src/components/Form/Prices'
import { ScheduledContext } from './ScheduledContext'
import Status from '../../src/components/Status'

interface PropsScheduling {
  pokemons: string[]
  cities: string[]
  regions: string[]
  error: unknown
}

export default function Scheduling({
  pokemons,
  cities,
  regions,
  error,
}: PropsScheduling) {
  const { setPokemons, setCities, setRegions, haveError } =
    useContext(SchedulingContext)
  const { setPokemonsScheduled, setDateScheduled, setTimeScheduled } =
    useContext(ScheduledContext)

  const form = useForm<FormData>({
    resolver: yupResolver(FormData),
    mode: 'onTouched',
  })

  const { handleSubmit, reset } = form

  const [isScheduled, setIsScheduled] = useState(false)
  const isExistError = error || haveError !== ''

  useEffect(() => {
    setPokemons(pokemons)
    setCities(cities)
    setRegions(regions)
  }, [pokemons, cities, regions, setPokemons, setCities, setRegions])

  const handleFormSubmit = (data: FormData) => {
    console.log('Seus dados são:', data)
    setPokemonsScheduled(data.team.length)
    setDateScheduled(data.date)
    setTimeScheduled(data.time)
    setIsScheduled(true)
    reset()
  }

  return (
    <Main>
      <HeaderInternal description="Recupere seus pokémons em 5 segundos" />
      {isScheduled && <Status type="success" />}
      {isExistError && (
        <Status
          type="error"
          text={typeof error === 'string' ? error : haveError}
        />
      )}
      {!isScheduled && !isExistError && (
        <FormProvider {...form}>
          <Container onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
            <InfoBasicField />
            <TeamField />
            <SchedulingContainer />
            <Prices />
          </Container>
        </FormProvider>
      )}
    </Main>
  )
}

export const getServerSideProps = async () => {
  try {
    const apiService = container.get<ApiService>(ApiService)
    const pokemons = await apiService.getPokemons()
    const cities = await apiService.getCities()
    const regions = await apiService.getRegions()

    return {
      props: {
        pokemons,
        cities,
        regions,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        error,
      },
    }
  }
}
