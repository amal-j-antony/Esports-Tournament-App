
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaChevronDown } from "react-icons/fa"

import { TbPointFilled } from "react-icons/tb"

export function EditTournamentStatus({currentStatus,updateTournamentStatus}) {
    const options = ['Draft','Open','Closed','Coming_Soon']
    return(
        <DropdownMenu >
            <DropdownMenuTrigger className='bg-[#4B4B4B] p-4 rounded-2xl cursor-pointer flex items-center gap-2 justify-center' >
                Tournament Status : {currentStatus} <FaChevronDown/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-accent text-ceter">
                {
                    options.map((item)=>(
                        <DropdownMenuItem className="items-center gap-2" key={item} >{item} {item == currentStatus && <><TbPointFilled/> </> } </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}