import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'react-toastify'

function DeleteRuleDialog({
    ruleRemoveButton,
    setRuleRemoveButton,
    index,
    remove
}) {
    const buttonStyle = 'bg-zinc-100 hover:bg-accent-foreground duration-500 cursor-pointer hover:text-white text-black p-1 rounded '
    const removRule = (index) => {
        remove(index)
        toast("Rule removed")
        setRuleRemoveButton(false)
    }
    return (
        <>
            <Dialog
                open={ruleRemoveButton}
                onOpenChange={setRuleRemoveButton}>
                <DialogContent className="">
                    <DialogHeader>
                        Remove rule {index + 1}
                    </DialogHeader>

                    <p>This action is not reversible. Proceed?</p>

                    <DialogFooter>
                        <button className={buttonStyle} onClick={() => setRuleRemoveButton(false)}>Cancel</button>
                        <button className={buttonStyle} onClick={() => {removRule(index)}} >Proceed</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DeleteRuleDialog