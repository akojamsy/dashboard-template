import  Divider  from '../../components/Divider'
import React, { useEffect } from 'react'
import LOGO from '../../assets/cover.png'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../redux/slice/usersApiSlice'
import { setCredentials } from '../../redux/slice/user/authSlice'

const rules = [
  {
    required: true,
    message: 'required',
  }
]
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, {isLoading}] = useLoginMutation()
  const { user } = useSelector(state => state.auth)

  const onFinish = async (values) => {
    try {
      const res = await login(values).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      message.error(error.data.message || error.error)
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])
  
  return (
    <div className='w-full h-screen bg-light-secondary flex justify-center items-center p-5 md:p-0'>
      <div className="bg-white p-5 rounded w-[450px]">
        <img src={LOGO} alt="logo" className='text-center w-48 mx-auto' />
        <Divider />
        <Form layout='vertical'  onFinish={onFinish}>
          <Form.Item label="User Id" name="userId" rules={rules}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rules}>
              <Input placeholder="Password" type="password" />
            </Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit" block className="mt-2 py-1 bg-light-secondary">
              Login
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login