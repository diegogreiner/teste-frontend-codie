import * as yup from 'yup'

export const FormData = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastname: yup.string().required('Sobrenome é obrigatório'),
  country: yup.string().required('Selecione uma região'),
  city: yup.string().required('Selecione uma cidade'),
  team: yup
    .array(yup.object({ pokemon: yup.string().required() }))
    .required('Selecione pelo menos 1 pokemon')
    .max(6),
  date: yup.string().required('Selecione uma data'),
  time: yup.string().required('Selecione um horário'),
})

export type FormData = yup.InferType<typeof FormData>
