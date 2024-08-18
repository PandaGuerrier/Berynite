import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NavbarPanda from '~/components/Navbar'
import { Toaster } from 'sonner'

export default function MainLayout({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavbarPanda/>
      <Toaster />
      <div className={"bg-black text-white w-full h-full"}>
        {children}
      </div>
    </NextUIProvider>
  )
}
