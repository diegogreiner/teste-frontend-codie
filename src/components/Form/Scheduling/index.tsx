import React, { useContext, useEffect, useState } from 'react'
import Field from '../Field'
import Label from '../Label'
import Select from '../Select'
import ErrorMessage from '../ErrorMessage'
import { useDateData } from '../../../hooks/useQueryData'
import container from '../../../inversify.config'
import ApiService from '../../../services/ApiService'
import { SchedulingContext } from '../../../../pages/scheduling/SchedulingContext'

export default function SchedulingContainer() {
  const { date } = useDateData()
  const { dateSelected, setHaveError } = useContext(SchedulingContext)
  const [time, setTime] = useState([''])

  useEffect(() => {
    const fetchTime = async () => {
      try {
        if (dateSelected !== '') {
          const apiService = container.get<ApiService>(ApiService)
          const response = await apiService.getTime(dateSelected)
          setTime(response)
        }
      } catch (error: any) {
        console.log(error)
        setHaveError(error.message)
      }
    }
    fetchTime()
  }, [dateSelected, setHaveError])

  const haveTime: string[] = time.length === 1 && time[0] === '' ? [] : time

  return (
    <>
      <Field>
        <div>
          <Label htmlFor="date" text="Data para Atendimento" />
          <Select
            placeholder="Selecione uma data"
            name="date"
            list={date as string[]}
          />
          <ErrorMessage error="date" />
        </div>
        <div>
          <Label htmlFor="time" text="Horário de Atendimento" />
          <Select
            placeholder="Selecione um horário"
            name="time"
            list={haveTime}
          />
          <ErrorMessage error="time" />
        </div>
      </Field>
    </>
  )
}
