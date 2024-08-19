import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import { AuroraBackground } from '~/components/ui/aurora-background'
import { motion } from 'framer-motion'
import InputPanda from '~/components/Input'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Username() {
  const [error, setError] = useState(null as string | null)

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const response = await fetch('/user/', {
      method: 'PATCH',
      body: formData,
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }
    })

    const payload = await response.json()

    if (response.ok) {
      const username = payload.username ?? 'Invité'
      toast.success('Hey ' + username + ' !', {
        position: 'bottom-right',
        duration: 5000
      })
      window.location.href = '/'
    } else {
      setError(payload.errors[0].message)
    }
  }

  return (
    <MainLayout>
      <AuroraBackground>
        <Head title={'Connexion'}/>
        <motion.div
          initial={{opacity: 0.0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 text-white w-full"
        >
          <div className="w-full flex justify-center">
            <form onSubmit={sendForm} className={'p-3 w-full md:w-1/4'}>
              <div className="flex flex-col gap-4 min-w-24">
                <h1 className="text-3xl font-bold text-center">Choisissez votre nouveau nom !</h1>
                <p className="text-center">Il vous sera utile quand vous posterez une suggestion !</p>
                {
                  error && (
                    <div className="bg-red-500 text-white p-2 rounded-md text-center">
                      {error}
                    </div>
                  )
                }
                <InputPanda label={'Nom d\'utilisateur'} type={'text'} name={'username'} required className={'w-full'}/>
                <Button type={'submit'} color={'primary'} variant={'shadow'}>Suivant</Button>
              </div>
            </form>
          </div>
        </motion.div>
      </AuroraBackground>
    </MainLayout>
  )
}
