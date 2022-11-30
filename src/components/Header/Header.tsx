import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getcateGories } from '../../api/services/categories.service'
import { setAllCategories } from '../../store/slices/categories'
import useWindowDimensions from '../hooks/getScreenSize'
import { FixedBottomNavigation } from '../mobile/bottom-navbar/BottomNavigation'

import { NavBar } from '../mobile/Navbar/NavBar'

import { NavbarDown } from './NavbarDown/NavbarDown'
import { Navbar } from './NavbarUp/Navbar'
export const Header = ({ children }: { children: JSX.Element }) => {
  const [visibility, setVisibility] = useState(false)
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  const { data, isSuccess } = useQuery(['sss'], getcateGories)
  useEffect(() => {
    isSuccess && dispatch(setAllCategories)
  }, [isSuccess])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {width > 900 ? (
        <>
          <Navbar /> <NavbarDown visibility={visibility} setVisibility={setVisibility} />
        </>
      ) : (
        <>
          <FixedBottomNavigation setVisibility={setVisibility} />
          <NavBar visibility={visibility} setVisibility={setVisibility} />
        </>
      )}
      {children}
    </div>
  )
}
function useQuery(arg0: string[], getcateGories: () => Promise<import('axios').AxiosResponse<any, any>>): { data: any; isSuccess: any } {
  throw new Error('Function not implemented.')
}
