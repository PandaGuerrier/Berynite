import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import { AuroraBackground } from '~/components/ui/aurora-background'
import { motion } from 'framer-motion'
import InputPanda from '~/components/Input'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Login() {
  const [error, setError] = useState(null as string | null)

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const response = await fetch('/auth/login', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }
    })

    const payload = await response.json()

    if (response.ok) {
      const username = payload.username ?? "Invité"
      toast.success("Hey " + username + " !", {
        position: "bottom-right",
        duration: 5000,
      })
      window.location.href = '/'
    } else {
      switch (payload.errors[0].message) {
        case 'Invalid user credentials':
          setError('Adresse email ou mot de passe incorrect')
          break
        default:
          setError(payload.errors[0].message)
          break
      }
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
            <form onSubmit={sendForm} className={"p-3 w-full md:w-1/4"}>
              <div className="flex flex-col gap-4 min-w-24">
                <h1 className="text-3xl font-bold text-center">Connexion</h1>
                <p className="text-center">Connectez-vous à votre compte</p>
                {
                  error && (
                    <div className="bg-red-500 text-white p-2 rounded-md text-center">
                      {error}
                    </div>
                  )
                }
                <InputPanda label={"Adresse email"} type={"email"} name={"email"} required/>
                <InputPanda label={"Mot de passe"} type={"password"} name={"password"} required/>
                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"shadow"}>Connexion</Button>
              </div>
            </form>
          </div>
        </motion.div>
      </AuroraBackground>
    </MainLayout>
  )
}
