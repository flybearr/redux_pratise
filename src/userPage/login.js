import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogin } from '../store/userSlice'

export default function Login() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [mail, setMail] = useState('')
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(
      setLogin({
        name: name,
        age: age,
        email: mail,
      })
    )
  }
  return (
    <div>
      <label htmlFor="">姓名：</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">年齡：</label>
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">信箱：</label>
      <input
        type="text"
        placeholder="email"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value)
        }}
      />
      <br />
      <br />
      <button onClick={handleLogin}>登入</button>
    </div>
  )
}
