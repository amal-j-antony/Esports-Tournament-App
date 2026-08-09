
import { SERIES_FORMAT } from "./constants/seriesFormat";

export const esportsTitles = [
    {
        id: "cs2f7a",
        name: "Counter-Strike 2",
        slug: "counter-strike-2",
        genre: "Tactical FPS",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC"],
        image: "https://res.cloudinary.com/dwaaoyztz/image/upload/v1784260780/Cs2_boxart_yvxpba.webp",
        serverRegions: [
            "Asia",
            "Europe",
            "North America",
            "South America",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "lol8hk",
        name: "League of Legends",
        slug: "league-of-legends",
        genre: "MOBA",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC"],
        image: "https://m.media-amazon.com/images/M/MV5BMmEzYzQ2ZGQtNmU2NC00ZDFkLTg4NWItNDQwZGM0OTlkMWYyXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "South America",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "val3qt",
        name: "Valorant",
        slug: "valorant",
        genre: "Tactical FPS",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC"],
        image: "https://img.icons8.com/?size=100&id=aUZxT3Erwill&format=png&color=000000",
        serverRegions: [
            "Asia-Pacific",
            "Europe",
            "North America",
            "Latin America",
            "Brazil",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "dot2mv",
        name: "Dota 2",
        slug: "dota-2",
        genre: "MOBA",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC"],
        serverRegions: [
            "Southeast Asia",
            "East Asia",
            "Europe",
            "North America",
            "South America",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "mlbb9x",
        name: "Mobile Legends: Bang Bang",
        slug: "mobile-legends-bang-bang",
        genre: "MOBA",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["Mobile"],
        image: "https://m.media-amazon.com/images/M/MV5BODhlZDk5Y2EtMGFhOS00MTQ5LTgwNjgtYTI2ZmE1Y2ZjMDE2XkEyXkFqcGc@.V1.jpg",
        serverRegions: [
            "Southeast Asia",
            "East Asia",
            "Middle East",
            "Europe",
            "North America",
            "South America"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "pgm4nd",
        name: "PUBG Mobile",
        slug: "pubg-mobile",
        genre: "Battle Royale",
        minTeamSize: 1,
        maxTeamSize: 4,
        platform: ["Mobile"],
        serverRegions: [
            "Asia",
            "Europe",
            "Middle East",
            "North America",
            "South America"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "fort2e",
        name: "Fortnite",
        slug: "fortnite",
        genre: "Battle Royale",
        minTeamSize: 1,
        maxTeamSize: 4,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America East",
            "North America Central",
            "North America West",
            "Europe",
            "Brazil",
            "Asia",
            "Middle East",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "apx7lf",
        name: "Apex Legends",
        slug: "apex-legends",
        genre: "Battle Royale",
        minTeamSize: 1,
        maxTeamSize: 3,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "South America",
            "Europe",
            "Asia",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "rlg5pv",
        name: "Rocket League",
        slug: "rocket-league",
        genre: "Sports",
        minTeamSize: 1,
        maxTeamSize: 3,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "South America",
            "Europe",
            "Asia",
            "Oceania",
            "Middle East"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "r6sx2b",
        name: "Rainbow Six Siege X",
        slug: "rainbow-six-siege-x",
        genre: "Tactical FPS",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia-Pacific",
            "South America",
            "Middle East"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "ow29kj",
        name: "Overwatch 2",
        slug: "overwatch-2",
        genre: "Hero Shooter",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "ffr8du",
        name: "Free Fire",
        slug: "free-fire",
        genre: "Battle Royale",
        minTeamSize: 1,
        maxTeamSize: 4,
        platform: ["Mobile"],
        serverRegions: [
            "Asia",
            "Latin America",
            "North America",
            "Europe",
            "Middle East",
            "South America"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "hok6zm",
        name: "Honor of Kings",
        slug: "honor-of-kings",
        genre: "MOBA",
        minTeamSize: 5,
        maxTeamSize: 5,
        platform: ["Mobile"],
        serverRegions: [
            "Southeast Asia",
            "East Asia",
            "Europe",
            "Middle East",
            "North America",
            "South America"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "codm1q",
        name: "Call of Duty: Mobile",
        slug: "call-of-duty-mobile",
        genre: "FPS",
        minTeamSize: 1,
        maxTeamSize: 5,
        platform: ["Mobile"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "South America",
            "Middle East"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "tft3nx",
        name: "Teamfight Tactics",
        slug: "teamfight-tactics",
        genre: "Auto Battler",
        minTeamSize: 1,
        maxTeamSize: 1,
        platform: ["PC", "Mobile"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "Oceania",
            "Brazil",
            "Latin America"
        ],
        config: {
            format: SERIES_FORMAT.LOBBY
        }
    },

    {
        id: "sf64rw",
        name: "Street Fighter 6",
        slug: "street-fighter-6",
        genre: "Fighting",
        minTeamSize: 1,
        maxTeamSize: 1,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "South America",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "tk87yd",
        name: "Tekken 8",
        slug: "tekken-8",
        genre: "Fighting",
        minTeamSize: 1,
        maxTeamSize: 1,
        platform: ["PC", "Console"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia",
            "South America",
            "Oceania"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "fc26ph",
        name: "EA Sports FC 26",
        slug: "ea-sports-fc-26",
        genre: "Sports",
        minTeamSize: 1,
        maxTeamSize: 2,
        platform: ["PC", "Console"],
        serverRegions: [
            "Europe",
            "North America",
            "South America",
            "Asia",
            "Oceania",
            "Middle East"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "sc2ju8",
        name: "StarCraft II",
        slug: "starcraft-2",
        genre: "RTS",
        minTeamSize: 1,
        maxTeamSize: 1,
        platform: ["PC"],
        serverRegions: [
            "North America",
            "Europe",
            "Asia"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    },

    {
        id: "hs9mc4",
        name: "Hearthstone",
        slug: "hearthstone",
        genre: "Card Game",
        minTeamSize: 1,
        maxTeamSize: 1,
        platform: ["PC", "Mobile"],
        serverRegions: [
            "Americas",
            "Europe",
            "Asia-Pacific"
        ],
        config: {
            format: SERIES_FORMAT.HEAD_TO_HEAD
        }
    }
];

