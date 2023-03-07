import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
}

const Message = ({ message }: Props) => {
    
    const isChatGPT = message.user.name === 'ChatGPT';
  return (
      <div className={`py-5 text-white ${isChatGPT && 'bg-[#434653]'}`}>
          <div className="flex spaxe-x-5 px-10 max-w-2xl mx-auto">
          <img src={message.user.avatar} alt="" className="h-8 w-8" />
          <p className="pt-1 text-sm ml-3">
              {message.text}
          </p>
    </div>
      </div>
  )
}

export default Message