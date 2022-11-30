import { Card } from '@mui/material'
import React, { FC, useState } from 'react'
import { catalogItems, subCategories } from '../../consts/catalog'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import classes from './Index.module.css'
import { useQuery } from 'react-query'
import { getcateGories } from '../../api/services/categories.service'
import { useDispatch } from 'react-redux'
interface Props {
  show: boolean
  setShow: (data: boolean) => void
  setCategory: (data: Sub[]) => void
}
interface Sub {
  name: string
  description: string
}

export const Catalog: FC<Props> = ({ show, setShow, setCategory }) => {
  const [id, setId] = useState('')
  for (const property in subCategories) {
    if (property === id) {
      setCategory(subCategories[property])
    }
  }
  const dispatch = useDispatch()
  const { data, isSuccess } = useQuery(['cat'], getcateGories)
  isSuccess && console.log(data.data)
  return (
    <Card
      sx={{
        height: '432px',
        backgroundColor: 'white',
        minWidth: '314px',
        padding: '0'
      }}
      className={classes.category}
    >
      <div>
        {catalogItems.map((item) => (
          <div
            key={item.name}
            style={{ display: 'flex', justifyContent: 'space-between' }}
            onMouseOver={() => {
              setShow(true)
              setId(item.name)
            }}
            onMouseOut={() => setShow(false)}
          >
            <strong style={{ marginLeft: '20px' }}>{item.description}</strong>
            <div>
              <ChevronRightIcon />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
