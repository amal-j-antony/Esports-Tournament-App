import { Calendar, Gamepad2, SearchIcon } from 'lucide-react'
import React from 'react'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { FaTrophy } from 'react-icons/fa'

function TournamentHome() {

    const status = ["open", "coming soon", "live"]

    return (
        <>
            <section className='col-span-5 flex flex-col bg-card'>
                {/* search bar */}
                <div className="flex justify-center items-center relative gap-4 pt-10 pb-5">
                    {/* <input type="text" placeholder='Search for a game' className='bg-accent text-center p-3 w-1/2 rounded-3xl' /> */}
                    <Combobox items={status}>
                        <ComboboxInput className="h-11 w-1/2 text-center rounded-3xl" placeholder="Select Game" />
                        <ComboboxContent className="">
                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                        {item}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                    {/* <button className="p-2 bg-[#3f3f3f] rounded-3xl"><SearchIcon /></button> */}
                    <Combobox items={status}>
                        <ComboboxInput className="h-11 rounded-3xl" placeholder="Game Status" />
                        <ComboboxContent className="">
                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                        {item}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                </div>
                {/* view games */}
                <div className="flex gap-10 p-10">
                    <div className="p-5 bg-accent flex flex-col gap-5">
                        <img className='w-75 h-75 object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784263441/Ep8a1_Defiance_Youtube_Cover__a9tu1h.png" alt="" />
                        <h1 className='text-2xl font-bold text-nowrap' >Title</h1>
                        <h1 className="flex items-center gap-2 text-2xl"><FaTrophy />Prize Pool</h1>
                        <h1 className='text-2xl flex items-center gap-2'><Calendar />Start Date</h1>
                        <h1 className='text-2xl flex items-center gap-2'><Gamepad2 />Game</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TournamentHome