import Sidebar from '@/components/Sidebar';
import React from 'react'

const ChatPage = () => {
  return (
      <div className='flex'>
          <Sidebar />
          <div className='bg-[#343541] flex-1'>ChatPage</div>
        </div>
  )
}

export default ChatPage;