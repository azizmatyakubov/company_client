import React from 'react'
import { Helmet } from 'react-helmet';
import UsersTable from '../components/UsersTable/UsersTable'

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <div className='p-2'>
        <UsersTable />
      </div>
    </>
  )
}

export default Users