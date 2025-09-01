import React,{useState} from 'react'
import Login from '../components/Authentication/Login';
const Authentication = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
    <div>Authentication</div>
    {isRegister ? <Register/> : <Login/>}
    </>
    
  )
}

export default Authentication