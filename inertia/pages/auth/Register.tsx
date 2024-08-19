import { Head } from '@inertiajs/react'
import MainLayout from '~/layouts/MainLayout'
import InputPanda from '~/components/Input'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export type Errors = {
  [key: string]: {
    field: string
    message: string
  }
}

export default function Register() {
  const [errors, setErrors] = useState({} as Errors)

  function sortErrors(errors: any) {
    const errorsSorted = {}
    for (const errorIndex in errors) {
      const error = errors[errorIndex]

      // @ts-ignore
      errorsSorted[error.field] = {
        field: error.field,
        message: error.message
      }
    }
    setErrors(errorsSorted)
  }

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const response = await fetch('/auth/register', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }
    })

    const payload = await response.json()

    if (response.ok) {
      window.location.href = '/me/username'
    } else {
      sortErrors(payload.errors)
    }
  }

  return (
    <MainLayout>
      <div className={"flex w-full h-[100vh] justify-center"}>
        <Head title={'Inscription'}/>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 text-white w-full">
          <div className="w-full flex justify-center">
            <form onSubmit={sendForm} className={"p-3 w-full md:w-1/4"}>
              <div className="flex flex-col gap-4 min-w-24">
                <h1 className="text-3xl font-bold text-center">Inscription</h1>
                <p className="text-center">Création de votre compte</p>
                <InputPanda label={"Adresse email"} type={"email"} name={"email"} error={errors.email?.message}
                            required/>
                <InputPanda label={"Mot de passe"} type={"password"} name={"password"} error={errors.password?.message}
                            required/>
                <InputPanda label={"Répétez le mot de passe"} type={"password"} name={"repeat_password"}
                            error={errors.password?.message} required/>
                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"shadow"}>Inscription</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
)
}
