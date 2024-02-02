import React from 'react'
import Image from 'next/image'
import Background from '../../../public/images/pokemon-hero.jpg'
import { ContainerImg } from './styles'

export default function HomeContainer() {
  return (
    <>
      <ContainerImg>
        <Image
          src={Background}
          alt="background"
          quality={100}
          priority
        />
        <h1>
          Cuidamos bem do seu pokémon, <br />
          para ele cuidar bem de você
        </h1>
      </ContainerImg>
    </>
  )
}
