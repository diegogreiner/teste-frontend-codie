import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

interface ContextType {
  pokemonsScheduled: number
  setPokemonsScheduled: Dispatch<SetStateAction<number>>
  dateScheduled: string
  setDateScheduled: Dispatch<SetStateAction<string>>
  timeScheduled: string
  setTimeScheduled: Dispatch<SetStateAction<string>>
}

const initialContext: ContextType = {
  pokemonsScheduled: 0,
  setPokemonsScheduled: () => {},
  dateScheduled: '',
  setDateScheduled: () => {},
  timeScheduled: '',
  setTimeScheduled: () => {},
}

export const ScheduledContext = createContext<ContextType>(initialContext)

export default function ScheduledProvider({
  children,
}: {
  children: ReactNode
}) {
  const [pokemonsScheduled, setPokemonsScheduled] = useState(0)
  const [dateScheduled, setDateScheduled] = useState('')
  const [timeScheduled, setTimeScheduled] = useState('')

  return (
    <ScheduledContext.Provider
      value={{
        pokemonsScheduled,
        setPokemonsScheduled,
        dateScheduled,
        setDateScheduled,
        timeScheduled,
        setTimeScheduled,
      }}
    >
      {children}
    </ScheduledContext.Provider>
  )
}
