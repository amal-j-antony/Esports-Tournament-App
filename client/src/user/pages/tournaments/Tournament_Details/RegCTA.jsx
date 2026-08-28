import { format } from "date-fns"
import { FaBell } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6"


const buttonStyle = "bg-slate-100 py-3 text-black text-xl flex items-center justify-center gap-2 rounded-2xl"

export function RegOpenCTA(schedule) {
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Registration open</h1>
            <p>Register your team to participate in the tournament</p>
            <button className={buttonStyle} > Register Team <FaArrowRight /></button>
            <p>Regitration closes on 1/1/2030 </p>
        </div>
    )
}

export function ComingSoonCTA(schedule) {
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Registration Opening Soon</h1>
            <p>Get notified when registrations open</p>
            <button className={buttonStyle} > Notify Me <FaBell/> </button>
            <p>Regitration closes on Aug 10,2026</p>
        </div>
    )
}

export function ClosedCTA(schedule) {
    return (
        <div className="flex flex-col gap-5 bg-red-900 p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Registration closed</h1>
            <p>This tournament is no longer accepting registrations</p>
            <button className={buttonStyle} > View other tournaments <FaArrowRight /></button>
            
        </div>
    )
}

