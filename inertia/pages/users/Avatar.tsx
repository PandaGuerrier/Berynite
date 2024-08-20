import { Head, Link } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { toast } from 'sonner'
import { FileUpload } from '~/components/ui/file-upload'

export default function Avatar() {
  const [error, setError] = useState(null as string | null)
  const [file, setFile] = useState(null as File | null)

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    if (file) {
      formData.append('avatar', file)
    }
    const response = await fetch('/me', {
      method: 'PATCH',
      body: formData,
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }
    })

    const payload = await response.json()
    console.log(payload)

    if (response.ok) {
      const username = payload.username ?? 'Invité'
      toast.success('Hey ' + username + ' !', {
        position: 'bottom-right',
        duration: 5000
      })
     // window.location.href = '/'
    } else {
      setError(payload.errors[0].message)
    }
  }

  return (
    <MainLayout>
      <div className={"flex w-full h-[100vh] justify-center"}>
        <Head title={'Avatar'}/>
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
              <div className="flex flex-col min-w-24 space-y-10">
                {
                  error && <div className="bg-red-500 text-white p-2 rounded">{error}</div>
                }
                <FileUpload title={"Mettez votre meilleur avatar !"} description={"Mets à jour ton avatar et deviens la star de ta page !"} onChange={(file) => setFile(file)} />
                <div className={"flex space-x-5"}>
                  <Button as={Link} href={"/"} color={'default'} variant={'shadow'} fullWidth>Passer cette étape</Button>
                  <Button type={"submit"} color={'primary'} variant={'shadow'} fullWidth>Suivant</Button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
