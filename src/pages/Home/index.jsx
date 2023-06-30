import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/slice/user/authSlice'
import { useLogoutMutation } from '../../redux/slice/usersApiSlice'

const Home = () => {

  const { data } = useSelector(state => state.auth?.user)
  const [ logoutApiCall ] = useLogoutMutation()
  // const { isLoading, data } = useGetUserQuery()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log( error)
    }
  }
  // console.log(user);
  
  return (
    <div>
      Hello {data?.username}
      <p onClick={logoutHandler}>Logout</p>
    </div>
  )
}

export default Home