import React from 'react'
import Login from './login'
import Logout from './logout'
import { useSelector } from 'react-redux'

export default function Profilo() {
  const state = useSelector((state) => state.user)
  console.log(state)
  return <div>{state.profile.login ? <Logout /> : <Login />}</div>
}
