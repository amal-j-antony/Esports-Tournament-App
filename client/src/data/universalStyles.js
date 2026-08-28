export const button = "py-2 px-5 bg-accent rounded-xl hover:bg-[#4a4a4a] cursor-pointer duration-500"
export const textAndIconStyle = 'flex items-center gap-2'
export const inputStyle = 'bg-accent px-10 py-3  rounded-xl border '
export const errorStyle = 'col-span-2 text-center text-red-600'
export const tournamentStatus = {
    Draft: {
        text: "Draft",
        style: "bg-gray-700 text-gray-400 px-2 rounded-2xl"
    },
    Open: {
        text: "Open",
        style: "bg-green-700 text-green-400 px-2 rounded-2xl"
    },
    Closed: {
        text: "Closed",
        style: "bg-red-700 text-red-400 px-2 rounded-2xl"
    },
    Coming_Soon: {
        text: "Coming soon",
        style: "bg-slate-50/20 px-2 rounded-2xl"
    },
    Loading: {
        text: "Loading...",
        style: "bg-slate-50 px-2 rounded-2xl"
    }
}