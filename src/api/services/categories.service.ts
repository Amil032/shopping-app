import { instance } from '../axios'

export const getcateGories = () => {
  return instance.get('/categories')
}
