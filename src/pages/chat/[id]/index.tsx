import Chat from '@/components/Chat';
import ChatInput from '@/components/ChatInput';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import React from 'react'

const ChatPage = () => {
  const pathname = usePathname();
  const id = pathname?.split('/')[2];

  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-[#343541] flex-1'>
        <div className='flex flex-col h-screen overflow-hidden'>
          <Chat chatId={String(id)} />
          <ChatInput chatId={String(id)} />
        </div>
      </div>
    </div>
  )
};

export default ChatPage;