import 'reflect-metadata'
import { injectable } from 'inversify'
import axios from 'axios'
import { config } from 'dotenv'

config()

const getNames = (response: any) => {
  return response.map((pokemon: any) => pokemon.name)
}

const toUppercaseFirstLetter = (names: string[]) => {
  return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1))
}

const removeDuplicates = (names: string[]) => {
  return names.filter((name, index) => names.indexOf(name) === index)
}

interface ApiServiceInterface {
  getDate: () => Promise<string[]>
  getTime: (date: string) => Promise<string[]>
  getPokemons: () => Promise<string[]>
  getCities: () => Promise<string[]>
  getRegions: () => Promise<string[]>
}

@injectable()
export default class ApiService implements ApiServiceInterface {
  async getDate(): Promise<string[]> {
    const response = await axios
      .get(`${process.env.NEXT_PUBLIC_API_SCHEDULING}date`)
      .then((response) => response.data)
      .catch((error) => error.message)
    return response
  }

  async getTime(date: string): Promise<string[]> {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API_SCHEDULING}time`, { date })
      .then((response) => response.data)
      .catch((error) => error.message)
    const removeSeconds = (response as string[]).map((time) => time.slice(0, 5))
    return removeSeconds
  }

  async getPokemons(): Promise<string[]> {
    const response = await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_POKEAPI}pokemon?limit=100000&offset=0`
      )
      .then((response) => response.data.results)
      .catch((error) => error.message)
    const names = getNames(response)
    const namePrimaryLetterUppercase = toUppercaseFirstLetter(names)
    const sortedNames = namePrimaryLetterUppercase.sort()
    return sortedNames
  }

  async getCities(): Promise<string[]> {
    const response = await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_POKEAPI}location?limit=100000&offset=0`
      )
      .then((response) => response.data.results)
      .catch((error) => error.message)
    const names = getNames(response)
    const formattedNames = names.map((name: string) => {
      return name
        .split('-')
        .filter((word) => word !== 'area')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    })
    const removeDuplicatesNames = removeDuplicates(formattedNames)
    const sortedNames = removeDuplicatesNames.sort()
    return sortedNames
  }

  async getRegions(): Promise<string[]> {
    const response = await axios
      .get(`${process.env.NEXT_PUBLIC_API_POKEAPI}region?limit=100000&offset=0`)
      .then((response) => response.data.results)
      .catch((error) => error.message)
    const names = getNames(response)
    const namePrimaryLetterUppercase = toUppercaseFirstLetter(names)
    const sortedNames = namePrimaryLetterUppercase.sort()
    return sortedNames
  }
}
