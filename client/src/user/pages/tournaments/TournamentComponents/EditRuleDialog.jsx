import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function EditRuleDialog({
    ruleUpdateHandler,
    index,
    ruleEditButton,
    setRuleEditButton
}) {
    const [data, setData] = useState("")
    const buttonStyle = 'bg-zinc-100 hover:bg-accent-foreground duration-500 cursor-pointer hover:text-white text-black p-2 rounded '
    return (
        <>
            <Dialog
                open={ruleEditButton}
                onOpenChange={setRuleEditButton}>
                <DialogContent className="">
                    <DialogHeader>
                        Update rule {index + 1}
                    </DialogHeader>
                    <div className="">
                        <input className='w-full bg-accent py-2 px-4 rounded-xl' placeholder='Enter updated rule' type="text" onChange={(e)=>setData(e.target.value)} value={data} />
                    </div>
                    <DialogFooter>
                        <button className={buttonStyle}  onClick={() => setRuleEditButton(false)}>Cancel</button>
                        <button className={buttonStyle} onClick={()=>ruleUpdateHandler(index,data)} >Update Rule</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default EditRuleDialog