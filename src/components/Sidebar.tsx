import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat'
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow'; 
import ModelSelection from './ModelSelection';


const Sidebar = () => {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc"))
    );

  return (
      <div className='bg-[#202123] max-w-sm h-screen overflow-y-auto md:min-w-[20rem]'>
          <div className='p-2 flex flex-col h-screen'>
          <div className='flex-1'>
              <div>
                  {/* newChat */}
                      <NewChat />
                      <div className='hidden sm:inline'>
                          <ModelSelection />    
                      </div>
                  <div>
                      {/* ModelSelection */}
                  </div>
                      {/* Map through chat role */}
                      {chats?.docs?.map((chat) => (
                          <ChatRow key={chat.id} id={chat.id} />
                      ))}
              </div>
          </div>
          {session && <img
              onClick={() => signOut()}
              src={session?.user?.image!}
              alt='profile'
              className='h-12 w-12 border rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
          />}
      </div>
      </div>
  )
}

export default Sidebar