import { SERIES_FORMAT } from "@/data/constants/seriesFormat"
import { esportsTitles } from "@/data/gameList"


function TournamentStageRenderer({ index, tournamentData }) {
    const stageInfo = tournamentData?.stageInfo?.[index]
    const format = {
        single_elimination: 'Single Elimination'
    }
    const gameData = esportsTitles.find((item)=>item.name == tournamentData?.game)
    
    return (
        <div className="grid grid-cols-1 pt-5 border border-t-[#2f2f2f] border-accent gap-5 ">
            <div className="flex justify-between">
                <p>Format</p>
                <p>{format[stageInfo?.stageFormat]}</p>
            </div>

            <div className="flex justify-between">
                <p>Team Size</p>
                <p>{gameData?.maxTeamSize}</p>
            </div>

            {
                tournamentData?.settings?.gameFormat == SERIES_FORMAT.HEAD_TO_HEAD ?
                    <div className="flex justify-between">
                        <p>Number of rounds per match</p>
                        <p>{stageInfo?.roundsCount}</p>
                    </div>
                    :
                    <div className="flex justify-between">
                        <p>Number of rounds per match</p>
                        <p>{stageInfo?.matchCount}</p>
                    </div>
            }

           
        </div>
    )
}

export default TournamentStageRenderer