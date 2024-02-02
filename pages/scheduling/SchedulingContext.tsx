import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

interface ContextType {
  pokemons: string[]
  setPokemons: Dispatch<SetStateAction<string[]>>
  cities: string[]
  setCities: Dispatch<SetStateAction<string[]>>
  regions: string[]
  setRegions: Dispatch<SetStateAction<string[]>>
  dateSelected: string
  setDateSelected: Dispatch<SetStateAction<string>>
  haveError: string,
  setHaveError: Dispatch<SetStateAction<string>>,
}

const initialContext: ContextType = {
  pokemons: [''],
  setPokemons: () => {},
  cities: [''],
  setCities: () => {},
  regions: [''],
  setRegions: () => {},
  dateSelected: '',
  setDateSelected: () => {},
  haveError: '',
  setHaveError: () => {},
}

export const SchedulingContext = createContext<ContextType>(initialContext)

export default function SchedulingProvider({
  children,
}: {
  children: ReactNode
}) {
  const [pokemons, setPokemons] = useState([''])
  const [cities, setCities] = useState([''])
  const [regions, setRegions] = useState([''])
  const [dateSelected, setDateSelected] = useState('')
  const [haveError, setHaveError] = useState('')

  return (
    <SchedulingContext.Provider
      value={{
        pokemons,
        setPokemons,
        cities,
        setCities,
        regions,
        setRegions,
        dateSelected,
        setDateSelected,
        haveError,
        setHaveError,
      }}
    >
      {children}
    </SchedulingContext.Provider>
  )
}
