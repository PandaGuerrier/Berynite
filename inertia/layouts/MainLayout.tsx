import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NavbarPanda from '~/components/Navbar'
import User from '#models/user'

export default function MainLayout({children, user}: { children: React.ReactNode, user: User }) {
  return (
    <NextUIProvider>
      <div className={"bg-black text-white w-full h-full"}>
        {children}
      </div>
    </NextUIProvider>
  )
}
