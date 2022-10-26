import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../logo";
import { FormEvent, useState } from "react";
import axios from 'axios';

export function SignIn() {

  const [isUserSignedIn, setsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'mattheusadhonnaysf@hotmail.com.br',
      senha: '12345678',
    })

    setsUserSignedIn(true);

  }

  return (
    <div className='w-screen h-screen bg-gray-900 items-center justify-center text-gray-100 flex flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size="lg" className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className='flex flex-col gap-3'>

          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope>

              </Envelope>
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>

          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="passwod" placeholder='*******' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <CheckBox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar demim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

      </form>

      <footer className='flex flex-col place-items-center gap-4 mt-4'>
        <Text asChild size="sm">
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  )
}