import React, { useContext, useState } from 'react'
import { Container, ContainerSelectStyled } from './styles'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { SchedulingContext } from '../../../../pages/scheduling/SchedulingContext'

interface SelectProps {
  name: string
  placeholder: string
  list: string[]
  index?: number
}

export default function Select({
  placeholder,
  name,
  list,
  index,
}: SelectProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')

  const { register, setError, setValue, getValues } = useFormContext()
  const { setDateSelected } = useContext(SchedulingContext)

  const handleClick = (item: string) => {
    setSelected(item)
    setChecked(false)
    if (name === 'date') {
      setDateSelected(item)
    }
    if (name === 'team') {
      setError(`team.${index}.pokemon`, { message: '' })
      setValue(`team.${index}.pokemon`, item)
    }
    register(name, { value: item })
    setError(name, { message: '' })
  }

  return (
    <Container>
      <input
        type="checkbox"
        id={name}
        autoComplete="off"
        onClick={() => setChecked(!checked)}
      />
      <ContainerSelectStyled>
        <div
          style={{
            borderRadius: checked ? '8px 8px 0px 0px' : '8px',
          }}
        >
          {selected === '' ? placeholder : selected}
          {checked ? (
            <ChevronUp size={30} color="#747474" strokeWidth={1} />
          ) : (
            <ChevronDown size={30} color="#747474" strokeWidth={1} />
          )}
        </div>
      </ContainerSelectStyled>
      <ul style={{ display: checked ? 'flex' : 'none' }}>
        {list &&
          list.map((item) => (
            <li key={item} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
      </ul>
    </Container>
  )
}
