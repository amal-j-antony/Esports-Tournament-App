export const QUALIFICATION_RULES = [
  {
    id: "top_n",
    label: "Top N Teams",
    description: "Advance the highest ranked teams from each group",
    config: {
      requiresNumber: true,
      defaultValue: 2
    }
  },
  {
    id: "points_threshold",
    label: "Points Threshold",
    description: "Advance teams that reach a minimum points requirement",
    config: {
      requiresNumber: true,
      unit: "points"
    }
  },
  {
    id: "win_threshold",
    label: "Minimum Wins",
    description: "Advance teams that achieve a required number of wins",
    config: {
      requiresNumber: true,
      unit: "wins"
    }
  },
  {
    id: "placement",
    label: "Placement Based",
    description: "Advance teams based on their finishing position",
    config: {
      requiresNumber: true,
      unit: "position"
    }
  },
  {
    id: "percentage",
    label: "Top Percentage",
    description: "Advance a percentage of teams from the stage",
    config: {
      requiresNumber: true,
      unit: "%"
    }
  },
  {
    id: "wildcard",
    label: "Wildcard Selection",
    description: "Allow manually selected teams to advance",
    config: {
      requiresSelection: true
    }
  },
  {
    id: "all_advance",
    label: "All Teams Advance",
    description: "Every participant moves to the next stage",
    config: {
      requiresNumber: false
    }
  },
  {
    id: "best_performers",
    label: "Best Performers",
    description: "Advance teams based on performance statistics",
    config: {
      requiresCriteria: true
    }
  },
//   {
//     id: "head_to_head",
//     label: "Head-to-Head Winner",
//     description: "Advance based on direct match results",
//     config: {
//       requiresNumber: false
//     }
//   },
//   {
//     id: "tiebreaker",
//     label: "Tiebreaker Result",
//     description: "Advance using additional tiebreaker matches",
//     config: {
//       requiresNumber: false
//     }
//   }
];