import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default AppLayout