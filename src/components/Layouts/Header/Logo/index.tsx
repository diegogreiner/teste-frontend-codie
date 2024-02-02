import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Logo() {
  const { asPath } = useRouter()
  const [show, setShow] = useState(true)
  const [initialLoad, setInitialLoad] = useState(false)

  useEffect(() => {
    if (asPath === '/') {
      const timer = setTimeout(() => {
        setShow(false)
        setInitialLoad(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [asPath])

  const handleMouseEnter = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    if (initialLoad) {
      setShow(false)
    }
  }

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="37"
          height="34"
          viewBox="0 0 37 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19" cy="17" r="17" fill="white" />
          <line y1="17" x2="37" y2="17" stroke="#E40F0F" strokeWidth="2" />
          <circle cx="19.5" cy="17.5" r="6.5" fill="#E40F0F" />
          <circle cx="19.5" cy="17.5" r="4.5" fill="white" />
        </svg>
        {show && <h3 style={{ display: 'flex' }}>Centro Pokémon</h3>}
      </Container>
    </Link>
  )
}
