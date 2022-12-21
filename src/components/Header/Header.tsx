import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../api/services/categories.service'
import { setAllCategories } from '../../store/slices/categories'
import useWindowDimensions from '../hooks/getScreenSize'
import { FixedBottomNavigation } from '../mobile/bottom-navbar/BottomNavigation'
import { NavBar } from '../mobile/Navbar/NavBar'
import { NavbarDown } from './NavbarDown/NavbarDown'
import { Navbar } from './NavbarUp/Navbar'
import { useQuery } from 'react-query'
export const Header = ({ children }: { children: JSX.Element }) => {
  const [visibility, setVisibility] = useState(false)
  const { width } = useWindowDimensions()

  const dispatch = useDispatch()

  const { data, isSuccess } = useQuery(['todos'], getCategories)
  isSuccess && dispatch(setAllCategories(data.data))

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {width > 900 ? (
        <>
          <Navbar />
          <NavbarDown visibility={visibility} setVisibility={setVisibility} />
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
