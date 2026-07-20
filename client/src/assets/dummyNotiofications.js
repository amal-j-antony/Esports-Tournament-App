export const notifications = [
  {
    id: "notif_001",
    type: "tournament",
    title: "Tournament Starting Soon",
    message: "Valorant Champions Cup begins in 30 minutes.",
    timestamp: "2026-07-19T19:30:00Z",
    read: false,
    priority: "high",
    icon: "trophy",
    action: {
      label: "View Tournament",
      route: "/tournaments/valorant-champions-cup"
    }
  },

  {
    id: "notif_002",
    type: "squad",
    title: "Squad Invite",
    message: "ShadowViper invited you to join squad 'Night Raiders'.",
    timestamp: "2026-07-19T18:50:00Z",
    read: false,
    priority: "medium",
    icon: "users",
    sender: "ShadowViper",
    action: {
      label: "Respond",
      route: "/squads/invites"
    }
  },

  {
    id: "notif_003",
    type: "clan",
    title: "New Clan Event",
    message: "Phoenix Legion scheduled a practice session for tonight.",
    timestamp: "2026-07-19T17:45:00Z",
    read: true,
    priority: "low",
    icon: "shield",
    action: {
      label: "View Event",
      route: "/clans/events"
    }
  },

  {
    id: "notif_004",
    type: "friend",
    title: "Friend Request",
    message: "AceHunter sent you a friend request.",
    timestamp: "2026-07-19T16:10:00Z",
    read: false,
    priority: "low",
    icon: "user-plus",
    sender: "AceHunter",
    action: {
      label: "Accept",
      route: "/friends"
    }
  },

  {
    id: "notif_005",
    type: "match",
    title: "Match Result",
    message: "Your squad won the BGMI Weekly Scrims (2nd Place).",
    timestamp: "2026-07-19T15:25:00Z",
    read: true,
    priority: "medium",
    icon: "award",
    action: {
      label: "View Stats",
      route: "/matches/weekly-scrims"
    }
  },

  {
    id: "notif_006",
    type: "announcement",
    title: "New Tournament Added",
    message: "Registrations are now open for Fortnite Zero Build Showdown.",
    timestamp: "2026-07-19T14:55:00Z",
    read: false,
    priority: "medium",
    icon: "megaphone",
    action: {
      label: "Register",
      route: "/tournaments"
    }
  },

  {
    id: "notif_007",
    type: "reminder",
    title: "Registration Closing",
    message: "Call of Duty Mobile Championship registration closes in 2 hours.",
    timestamp: "2026-07-19T13:30:00Z",
    read: false,
    priority: "high",
    icon: "clock",
    action: {
      label: "Complete Registration",
      route: "/tournaments/codm"
    }
  },

  {
    id: "notif_008",
    type: "squad",
    title: "Member Joined",
    message: "NovaStrike joined your squad.",
    timestamp: "2026-07-19T12:15:00Z",
    read: true,
    priority: "low",
    icon: "user-check"
  },

  {
    id: "notif_009",
    type: "clan",
    title: "Clan Promotion",
    message: "You've been promoted to Clan Officer in Phoenix Legion.",
    timestamp: "2026-07-19T11:40:00Z",
    read: false,
    priority: "medium",
    icon: "crown"
  },

  {
    id: "notif_010",
    type: "reward",
    title: "Reward Claimed",
    message: "You received 500 XP and the 'Tournament Veteran' badge.",
    timestamp: "2026-07-19T10:55:00Z",
    read: true,
    priority: "low",
    icon: "gift"
  },

  {
    id: "notif_011",
    type: "system",
    title: "Profile Verified",
    message: "Your player profile has been successfully verified.",
    timestamp: "2026-07-19T09:40:00Z",
    read: true,
    priority: "low",
    icon: "badge-check"
  },

  {
    id: "notif_012",
    type: "event",
    title: "Bracket Updated",
    message: "Playoff brackets have been updated for the Valorant Open.",
    timestamp: "2026-07-19T08:55:00Z",
    read: false,
    priority: "medium",
    icon: "git-branch"
  },

  {
    id: "notif_013",
    type: "match",
    title: "Check-In Open",
    message: "Check-in is now available for your upcoming Free Fire tournament.",
    timestamp: "2026-07-19T08:00:00Z",
    read: false,
    priority: "high",
    icon: "clipboard-check"
  },

  {
    id: "notif_014",
    type: "moderation",
    title: "Report Resolved",
    message: "A player you reported has received disciplinary action.",
    timestamp: "2026-07-18T20:35:00Z",
    read: true,
    priority: "low",
    icon: "shield-alert"
  },

  {
    id: "notif_015",
    type: "clan",
    title: "Clan War Starting",
    message: "Phoenix Legion vs Eclipse Esports begins in 1 hour.",
    timestamp: "2026-07-18T18:20:00Z",
    read: false,
    priority: "high",
    icon: "swords"
  },

  {
    id: "notif_016",
    type: "social",
    title: "Post Liked",
    message: "28 players liked your tournament highlight clip.",
    timestamp: "2026-07-18T17:10:00Z",
    read: true,
    priority: "low",
    icon: "heart"
  },

  {
    id: "notif_017",
    type: "achievement",
    title: "Achievement Unlocked",
    message: "Reached Top 100 in the regional Valorant leaderboard.",
    timestamp: "2026-07-18T15:45:00Z",
    read: false,
    priority: "medium",
    icon: "medal"
  },

  {
    id: "notif_018",
    type: "squad",
    title: "Squad Leader Changed",
    message: "ShadowViper transferred squad leadership to you.",
    timestamp: "2026-07-18T14:20:00Z",
    read: false,
    priority: "high",
    icon: "flag"
  },

  {
    id: "notif_019",
    type: "announcement",
    title: "Platform Maintenance",
    message: "Servers will undergo maintenance from 2:00 AM to 4:00 AM UTC.",
    timestamp: "2026-07-18T12:00:00Z",
    read: true,
    priority: "medium",
    icon: "server"
  },

  {
    id: "notif_020",
    type: "event",
    title: "Prize Pool Increased",
    message: "The BGMI Invitational prize pool has increased to ₹1,00,000.",
    timestamp: "2026-07-18T10:15:00Z",
    read: false,
    priority: "medium",
    icon: "coins",
    action: {
      label: "View Event",
      route: "/tournaments/bgmi-invitational"
    }
  }
];