import { useQuery } from '@tanstack/react-query'
import ApiService from '../services/ApiService'
import container from '../inversify.config'

export const useDateData = () => {
  const query = useQuery({
    queryKey: ['date'],
    queryFn: async () => {
      const apiService = container.get<ApiService>(ApiService)
      return apiService.getDate()
    },
  })
  return {
    ...query,
    date: query.data,
  }
}
