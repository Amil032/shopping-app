import { Card } from '@mui/material'
import React from 'react'
interface Props {
  show: boolean
  setShow: (data: boolean) => void
  category: Sub[]
}
interface Sub {
  name: string
  description: string
}
export const SubCategories = ({ show, setShow, category }: Props) => {
  console.log(category)
  return (
    <Card
      sx={{ height: '432px', width: '100%' }}
      onMouseOver={(e) => {
        setShow(true)
      }}
      onMouseOut={() => setShow(false)}
    >
      {category.map((item, index) => (
        <h3 key={index}>{item.description}</h3>
      ))}
    </Card>
  )
}
