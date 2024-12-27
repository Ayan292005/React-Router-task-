import React from 'react'
import UserFooter from '../../../components/user/userFooter'
import UserNavbar from '../../../components/user/userNavbar'
import { Outlet } from "react-router"
function UserRoot() {
  return (
    <>
     <UserNavbar/>
     <Outlet/>
     <UserFooter/> 
    </>
  )
}

export default UserRoot
