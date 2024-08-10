'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import Navbar from '@/components/Navbar'

interface Props {
  children: React.ReactNode
}

const AuthProvider = ({children} :Props) => {
  return (
    <SessionProvider>
      <Navbar/>
      {children}
      </SessionProvider>
  )
}

export default AuthProvider