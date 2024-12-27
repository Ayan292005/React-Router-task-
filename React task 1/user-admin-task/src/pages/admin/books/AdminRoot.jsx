import React from 'react'
import AdminFooter from '../../../components/admin/adminFooter'
import AdminNavbar from '../../../components/admin/adminNavbar'
import { Outlet } from "react-router"

function AdminRoot() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}

export default AdminRoot