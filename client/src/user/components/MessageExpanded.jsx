import { useAuth } from '@/context/AuthProvider'
import { inputStyle } from '@/data/universalStyles'
import { socket } from '@/services/webSocket'
import React, { useRef, useState } from 'react'
import { FaPaperPlane, FaUser } from 'react-icons/fa6'

function MessageExpanded() {
    const [messageList, setMessageList] = useState([])
    const [orientation,setOrientation] = useState(true)
    console.log(messageList);
    
    const {user} = useAuth()
    const textBubbleStyle = ' rounded  my-3  flex'
    socket.on("sendMessage", (message) => {
        console.log(message);
        
        setMessageList(prev => [...prev, message.message])
    })
    const inputMessageRef = useRef()
    const handleSend = () => {
        const messageBody = inputMessageRef.current.value
        socket.emit("sendMessage",messageBody)
        console.log('message sent:',messageBody);
        setMessageList(prev => [...prev,{
            message:messageBody,
            sender: user.username
        }])
    }
    return (
        <>
            <main className="flex flex-col  relative h-full">
                <div className="flex justify-center font-bold">
                    <h1>Message sender</h1>
                </div>
                <div className={`absolute bottom-0 w-full flex flex-col `}>
                    {
                        messageList.length > 0 &&
                        messageList.map((item, index) => (
                            <div className={textBubbleStyle +  `${item.sender == user.username && ' justify-end'}`}>
                                <div className={` flex  items-center gap-4 bg-accent py-2 px-5`}>
                                    <FaUser />
                                    <div className='grow'>
                                        <h1>{item.sender}</h1>
                                        <h1>{item.message}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className={textBubbleStyle}>
                        <div className=' flex items-center gap-4 bg-accent py-2 px-5'>
                            <FaUser />
                            <div className='grow'>
                                <h1>Sender</h1>
                                <h1>Hisdasssssssssssssssssssssssssssssssssssssssss</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex  w-full gap-2'>
                        <input ref={inputMessageRef}  type="text" className={inputStyle + " grow"} />
                        <div onClick={handleSend} className="py-2 px-4 border bg-[#2a2a2a] flex items-center rounded-full">
                            <FaPaperPlane />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default MessageExpanded