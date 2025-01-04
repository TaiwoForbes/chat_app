import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './configs/firebase'
import { AppContext } from './context/AppContext'
const App = () => {

  const avigate = useNavigate()
  const{loaderuserData} = useContext(AppContext)
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        navigate('/chat')
      }else{
        navigate('/')
        
        await loaderuserData(user.uid)
        
      }
    })
  },[])
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/chat' element = {<Chat/>}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App