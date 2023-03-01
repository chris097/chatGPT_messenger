import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image'; 
    
const Login = () => {
  return (
      <div className='flex flex-col justify-center items-center h-screen bg-[#11A37F] text-center'>
          <Image
              src="https://links.papareact.com/2i6"
              height={300}
              width={300}
              alt="logo"
          />
          <button onClick={() => signIn('google')} className='text-3xl animate-pulse font-bold text-white cursor-pointer'>Sign In to use ChatGPT</button>
    </div>
  )
}

export default Login