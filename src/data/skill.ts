import { Skill } from "./types";

export enum skillNames {
    "Attack Boost",
    "Burst",
    "Critical Boost",
    "Critical Eye",
    "Fortify",
    "Heroics",
    "Latent Power",
    "Offensive Guard",
    "Peak Performance",
    "Quick Work",
    "Resentment",
    "Rising Tide",
    "Skyward Striker",
    "Sneak Attack",
    "Special Boost",
    "Status Sneak Attack",
    "Weakness Exploit",
    "Fire Attack",
    "Water Attack",
    "Thunder Attack",
    "Ice Attack",
    "Dragon Attack",
    "Poison Attack",
    "Paralysis Attack",
    "Sleep Attack",
    "Artful Dodger",
    "Concentration",
    "Earplugs",
    "Evade Extender",
    "Evasive Concentration",
    "Firm Foothold",
    "Focus",
    "Guard",
    "Guts",
    "Health Boost",
    "Lock On",
    "Partbreaker",
    "Power Prolonger",
    "Recoil Down",
    "Reload Speed",
    "Slugger",
    "Windproof",
    "Bleeding Resistance",
    "Defense Boost",
    "Divine Blessing",
    "Last Stand",
    "Tremor Resistance",
    "Fire Resistance",
    "Water Resistance",
    "Thunder Resistance",
    "Ice Resistance",
    "Poison Resistance",
    "Paralysis Resistance",
    "Sleep Resistance",
}

export const skills: Record<string, Skill> = {
    "Attack Boost": {
        name: "Attack Boost",
        description: "Increases Attack Power.",
        effects: [
            {
                level: 1,
                description: "Increases attack power by 20."
            },
            {
                level: 2,
                description: "Increases attack power by 40."
            },
            {
                level: 3,
                description: "Increases attack power by 60."
            },
            {
                level: 4,
                description: "Increases attack power by 80."
            },
            {
                level: 5,
                description: "Increases attack power by 120."
            }
        ]
    },
    "Critical Eye": {
        name: "Critical Eye",
        description: "Increases affinity.",
        effects: [
            {
                level: 1,
                description: "Increases affinity by 10%."
            },
            {
                level: 2,
                description: "Increases affinity by 15%."
            },
            {
                level: 3,
                description: "Increases affinity by 20%."
            },
            {
                level: 4,
                description: "Increases affinity by 30%."
            },
            {
                level: 5,
                description: "Increases affinity by 40%."
            }
        ]
    },
    "Thunder Resistance": {
        name: "Thunder Resistance",
        description: "Decreases damage taken from thunder-element monsters.",
        effects: [
            {
                level: 1,
                description: "Decreases damage taken from thunder-element monsters by 10%."
            },
            {
                level: 2,
                description: "Decreases damage taken from thunder-element monsters by 20%."
            },
            {
                level: 3,
                description: "Decreases damage taken from thunder-element monsters by 30%."
            },
            {
                level: 4,
                description: "Decreases damage taken from thunder-element monsters by 40%."
            },
            {
                level: 5,
                description: "Decreases damage taken from thunder-element monsters by 50%."
            }
        ]
    },
    "Fire Resistance": {
        name: "Fire Resistance",
        description: "Decreases damage taken from fire-element monsters.",
        effects: [
            {
                level: 1,
                description: "Decreases damage taken from fire-element monsters by 10%."
            },
            {
                level: 2,
                description: "Decreases damage taken from fire-element monsters by 20%."
            },
            {
                level: 3,
                description: "Decreases damage taken from fire-element monsters by 30%."
            },
            {
                level: 4,
                description: "Decreases damage taken from fire-element monsters by 40%."
            },
            {
                level: 5,
                description: "Decreases damage taken from fire-element monsters by 50%."
            }
        ]
    },
    "Ice Resistance": {
        name: "Ice Resistance",
        description: "Decreases damage taken from ice-element monsters.",
        effects: [
            {
                level: 1,
                description: "Decreases damage taken from ice-element monsters by 10%."
            },
            {
                level: 2,
                description: "Decreases damage taken from ice-element monsters by 20%."
            },
            {
                level: 3,
                description: "Decreases damage taken from ice-element monsters by 30%."
            },
            {
                level: 4,
                description: "Decreases damage taken from ice-element monsters by 40%."
            },
            {
                level: 5,
                description: "Decreases damage taken from ice-element monsters by 50%."
            }
        ]
    },
    "Defense Boost": {
        name: "Defense Boost",
        description: "Increases defense.",
        effects: [
            {
                level: 1,
                description: "Increases defense by 20."
            },
            {
                level: 2,
                description: "Increases defense by 40."
            },
            {
                level: 3,
                description: "Increases defense by 60."
            },
            {
                level: 4,
                description: "Increases defense by 80."
            },
            {
                level: 5,
                description: "Increases defense by 100."
            }
        ]
    },
    "Health Boost": {
        name: "Health Boost",
        description: "Increases maximum health.",
        effects: [
            {
                level: 1,
                description: "Increases health by 10."
            },
            {
                level: 2,
                description: "Increases health by 20."
            },
            {
                level: 3,
                description: "Increases health by 30."
            },
            {
                level: 4,
                description: "Increases health by 40."
            },
            {
                level: 5,
                description: "Increases health by 50."
            }
        ]
    },
    "Water Resistance": {
        name: "Water Resistance",
        description: "Decreases damage taken from water-element monsters.",
        effects: [
            {
                level: 1,
                description: "Decreases damage taken from water-element monsters by 10%."
            },
            {
                level: 2,
                description: "Decreases damage taken from water-element monsters by 20%."
            },
            {
                level: 3,
                description: "Decreases damage taken from water-element monsters by 30%."
            },
            {
                level: 4,
                description: "Decreases damage taken from water-element monsters by 40%."
            },
            {
                level: 5,
                description: "Decreases damage taken from water-element monsters by 50%."
            }
        ]
    },
    "Poison Resistance": {
        name: "Poison Resistance",
        description: "Grants a chance to prevent poison status when damaged by a poison-element attack.",
        effects: [
            {
                level: 1,
                description: "Grants a 20% chance of preventing poison status when damaged by a poison-element attack."
            },
            {
                level: 2,
                description: "Grants a 40% chance of preventing poison status when damaged by a poison-element attack."
            },
            {
                level: 3,
                description: "Grants a 60% chance of preventing poison status when damaged by a poison-element attack."
            },
            {
                level: 4,
                description: "Grants a 80% chance of preventing poison status when damaged by a poison-element attack."
            },
            {
                level: 5,
                description: "Prevents poisoning."
            }
        ]
    },
    "Paralysis Resistance": {
        name: "Paralysis Resistance",
        description: "Grants a chance to prevent paralysis status when damaged by a paralysis-element attack",
        effects: [
            {
                level: 1,
                description: "Grants a 20% chance of preventing paralysis status when damaged by a paralysis-element attack."
            },
            {
                level: 2,
                description: "Grants a 40% chance of preventing paralysis status when damaged by a paralysis-element attack."
            },
            {
                level: 3,
                description: "Grants a 60% chance of preventing paralysis status when damaged by a paralysis-element attack."
            },
            {
                level: 4,
                description: "Grants a 80% chance of preventing paralysis status when damaged by a paralysis-element attack."
            },
            {
                level: 5,
                description: "Prevents paralysis."
            }
        ]
    },
    "Firm Foothold": {
        name: "Firm Foothold",
        description: "Reduces knockback when taking damage.",
        effects: [
            {
                level: 1,
                description: "Very slightly reduces knockback when taking damage."
            },
            {
                level: 2,
                description: "Slightly reduces knockback when taking damage."
            },
            {
                level: 3,
                description: "Moderately reduces knockback when taking damage."
            }
        ]
    },
    "Rising Tide": {
        name: "Rising Tide",
        description: "Increases attack power and defense as the hunt timer runs out.",
        effects: [
            {
                level: 1,
                description: "Very slightly increases attack power and defense as the hunt timer runs out."
            },
            {
                level: 2,
                description: "Slightly increases attack power and defense as the hunt timer runs out."
            },
            {
                level: 3,
                description: "Moderately increases attack power and defense as the hunt timer runs out."
            },
            {
                level: 4,
                description: "Greatly increases attack power and defense as the hunt timer runs out."
            },
            {
                level: 5,
                description: "Massively increases attack power and defense as the hunt timer runs out."
            }
        ]
    },
    "Water Attack": {
        name: "Water Attack",
        description: "Increases weapon's water-element value.",
        effects: [
            {
                level: 1,
                description: "Increases weapon's water-element value by 50."
            },
            {
                level: 2,
                description: "Increases weapon's water-element value by 100."
            },
            {
                level: 3,
                description: "Increases weapon's water-element value by 200."
            },
            {
                level: 4,
                description: "Increases weapon's water-element value by 350."
            },
            {
                level: 5,
                description: "Increases weapon's water-element value by 500."
            }
        ]
    },
    "Fortify": {
        name: "Fortify",
        description: "Increases attack power for 10 seconds each time you revive after fainting in a hunt.",
        effects: [
            {
                level: 1,
                description: "Increases attack power by 10% for 10 seconds each time you revive after fainting during a hunt."
            },
            {
                level: 2,
                description: "Increases attack power by 15% for 10 seconds each time you revive after fainting during a hunt."
            },
            {
                level: 3,
                description: "Increases attack power by 20% for 10 seconds each time you revive after fainting during a hunt."
            },
            {
                level: 4,
                description: "Increases attack power by 30% for 10 seconds each time you revive after fainting during a hunt."
            },
            {
                level: 5,
                description: "Increases attack power by 40% for 10 seconds each time you revive after fainting during a hunt."
            }
        ]
    },
}