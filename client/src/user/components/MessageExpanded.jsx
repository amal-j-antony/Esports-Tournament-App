import { useAuth } from '@/context/AuthProvider'
import { inputStyle } from '@/data/universalStyles'
import { socket } from '@/services/webSocket'
import { useEffect, useRef, useState } from 'react'
import { FaPaperPlane, FaUser } from 'react-icons/fa6'

function MessageExpanded() {
    const [messageList, setMessageList] = useState([])    
    console.log(messageList);

    const { user } = useAuth()
    const textBubbleStyle = ' rounded  my-3  flex'


    const receiveMessage = (message) => {
        console.log(message);

        setMessageList(prev => [...prev, message])
    }


    const inputMessageRef = useRef()
    const handleSend = () => {
        const messageBody = inputMessageRef.current.value
        socket.emit("sendMessage", {
            message: messageBody,
            sender: user.username
        })
        console.log('message sent:', messageBody);
        
    }

    useEffect(() => {
        socket.on('receiveMessage',receiveMessage)
        return () => {
            socket.off('receiveMessage',receiveMessage)
        }

    }, [])
    return (
        <>
            <main className="flex flex-col relative h-full ">
                <div className="flex justify-center font-bold">
                    <h1>Message sender</h1>
                </div>
                <div className={` w-full flex flex-col overflow-y-auto flex-nowrap absolute bottom-20 h-8/10`}>
                    {
                        messageList.length > 0 &&
                        messageList.map((item, index) => (
                            <div key={"message" + { index }} className={textBubbleStyle + `${item.sender == user.username ? ' justify-end' : 'justify-start' }`}>
                                <div className={` flex items-center gap-4 bg-accent py-2 px-5`}>
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
                    
                </div>
                <div className='flex  w-full gap-2 absolute bottom-0'>
                        <input ref={inputMessageRef} type="text" className={inputStyle + " grow"} />
                        <div onClick={handleSend} className="py-2 px-4 border bg-[#2a2a2a] flex items-center rounded-full">
                            <FaPaperPlane />
                        </div>
                    </div>

            </main>
        </>
    )
}

export default MessageExpanded