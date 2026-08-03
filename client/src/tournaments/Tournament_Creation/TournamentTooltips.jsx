import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
import { IoInformationCircle } from "react-icons/io5";

export function NumRoundsInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Number of rounds per match in a best of format.Default: 3</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}


export function TournamentFormatInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        <strong>Head-to-Head:</strong> Matches are played between two teams.
                    </p>
                    <p>
                        <strong>Lobby:</strong> Multiple teams play in the same match, with rankings determined by placement, eliminations, or both.
                    </p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function NumberOfMatchesInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Specify the total number of lobby matches. Teams earn points across all
                        matches based on their placement and eliminations.
                    </p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function GroupStageInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Adds a preliminary group stage. Qualified teams from each group progress to the next stage of the tournament.
                    </p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function GroupNumInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Number of groups the teams will be sorted into in group stage. Default: 2
                    </p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function InviteOnly() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Players need to be invited to register for the tournament
                    </p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function PodiumRewardsInfo() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        Set reward details for top finishers in the tournament. This information will be displayed in the tournament details section.
                    </p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}

export function CheckInTooltip() {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <IoInformationCircle />
                </TooltipTrigger>
                <TooltipContent className="flex flex-col">
                    <p>
                        Check-in is a confirmation that a player or team is present and ready to compete. If they don't check in during the designated window, the organizer may:                                                
                    </p>
                    <ul>
                        <li>Automatically forfeit them.</li>
                        <li>Remove them from the bracket or lobby.</li>
                        <li>Replace them with a standby team.</li>
                        <li>Mark them as a no-show.</li>
                    </ul>
                    <p>Whether they immediately forfeit depends on the tournament rules.</p>

                </TooltipContent>
            </Tooltip>
        </>
    )
}



