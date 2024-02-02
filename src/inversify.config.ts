import { Container } from 'inversify'
import ApiService from './services/ApiService'

const container = new Container()
container.bind<ApiService>(ApiService).toSelf()

export default container