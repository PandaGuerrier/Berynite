import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NavbarPanda from '~/components/Navbar'
import { Toaster } from 'sonner'
import { AuroraBackground } from '~/components/ui/aurora-background'

export default function MainLayout({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavbarPanda/>
      <Toaster/>
      <AuroraBackground className={'text-white w-full h-full bg-black'}>
        <div className={"w-full h-[100vh]"}>
          {children}
        </div>
      </AuroraBackground>
    </NextUIProvider>
)
}
