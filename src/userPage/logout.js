import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../store/userSlice'

export default function Logout() {
  const state = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(setLogout())
  }
  return (
    <div>
      <p>姓名：{state.profile.name}</p>
      <p>年齡：{state.profile.age}</p>
      <p>信箱：{state.profile.email}</p>
      <br />
      <br />
      <button onClick={handleLogOut}>登出</button>
    </div>
  )
}
