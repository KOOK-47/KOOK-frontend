import React from 'react';
import { userAuth } from '../context/AuthContext';

function Dashboard() {

  const { user } = userAuth()
  console.log(user)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard