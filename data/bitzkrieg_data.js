/* =====================================================================
 * BITZKRIEG 28 — SHARED RULES DATABASE (Mortalis + Wrath & Ruin)
 *
 * One record per item. The base fields apply to BOTH games.
 *  - wr: { ... }        fields that are different in Wrath & Ruin (usually name / effect wording)
 *  - mortalis: { ... }  fields that are different in Mortalis
 *  - games: ["wr"]      the item only exists in that game (no "games" = both games)
 *
 * Change a cost or rule once here and both games get it.
 * ===================================================================== */
(function () {
  var GAMES = {
    mortalis: {
      key: "mortalis",
      name: "Mortalis",
      tagline: "Grimdark Future",
      terms: {
        gameName: "Mortalis",
        psyker: "Psyker",
        psykers: "Psykers",
        masterPsyker: "Master Psyker",
        masterPsykers: "Master Psykers",
        powers: "Psychic Powers",
        powersShort: "Psychic",
        cv: "MV",
        cvSuffix: "+",
        critLabel: "Critical Manifestation",
        team: "Team",
        teamLower: "team",
        teams: "Teams",
        forgeTitle: "Mortalis Fighter Forge",
        rosterTitle: "Mortalis — Team Builder",
        featTitle: "Mortalis – Feat Sheet Builder"
      },
      assets: {
        texture: "img/mortalis/mortalistexture.jpg",
        iconCC: "img/mortalis/sword.svg",
        iconRanged: "img/mortalis/crosshair.svg",
        logo: "img/mortalis/fighterforge.png",
        featBg: "img/mortalis/feat-card-bg.jpg"
      },
      storagePrefix: "mortalis",
      filePrefix: "mortalis_",
      rosterKey: "team",
      featStorageKey: "mortalis_feat_sheet_state_v2",
      cardPowerStyle: "keyword",
      prebuilt: [
        {
          label: "Eldar Aspect Warriors",
          url: "teams/mortalis/Eldar_Aspect_Warriors.json"
        },
        {
          label: "Kroot Hunters",
          url: "teams/mortalis/Kroot.json"
        },
        {
          label: "Noise Marines",
          url: "teams/mortalis/Church_of_Noise.json"
        },
        {
          label: "Sisters of Battle",
          url: "teams/mortalis/Sisters_of_Battle.json"
        },
        {
          label: "Mechanicus",
          url: "teams/mortalis/Mechanicus_Team.json"
        },
        {
          label: "Creations of Ghaust",
          url: "teams/mortalis/Creations_of_Ghaust.json"
        },
        {
          label: "Word Bearers",
          url: "teams/mortalis/Word_Bearers.json"
        },
        {
          label: "Necron Canoptek Circle",
          url: "teams/mortalis/Necron_Canoptek.json"
        },
        {
          label: "Necron Destroyer Cult",
          url: "teams/mortalis/Necron_Destroyers.json"
        },
        {
          label: "Da Ork Piratez",
          url: "teams/mortalis/Da_Ork_Piratez.json"
        }
      ],
      RANGED_CATEGORIES: [
        {
          key: "pistols",
          label: "Pistols/Grenades",
          ids: ["arcPistol", "autoLaspistol", "boltPistol", "handFlamer", "meltaPistol", "phosphorBlastPistol", "plasmaPistol", "rokkitPistol", "slugga", "warpflamePistol", "fragGrenade", "krakGrenade", "meltaBomb", "diylightPistol", "diymediumPistol", "diyheavyPistol"]
        },
        {
          key: "light",
          label: "Light/Medium Ranged",
          ids: ["autoLasgun", "boltGun", "gaussBlaster", "hvyShotgun", "infernoBoltGun", "ionRifle", "neutronBlaster", "pulseCarbine", "shotgun", "shoota", "shurikenRifle", "teslaCarbine", "burstCannon", "diylightRifle", "diymediumRifle", "diyheavyRifle"]
        },
        {
          key: "special",
          label: "Special",
          ids: ["flamer", "grenadeLauncher", "meltaGun", "neutronRailRifle", "plasmaGun", "scopedBigShoota", "shredder", "sniperRifle", "synapticDisintegrator", "warpflamer"]
        },
        {
          key: "heavy",
          label: "Heavy",
          ids: ["eavyRokkitLauncha", "bigShoota", "chaincannon", "fragCannon", "heavyBolter", "heavyFlamer", "heavyStubber", "lascannon", "missileLauncher", "multiMelta", "plasmaCannon", "rokkitLauncha", "shurikenCannon", "soulreaperCannon", "wraithCannon", "diyheavyantiinfantryGun", "diyheavyantieliteGun", "diyheavyantitankGun"]
        }
      ]
    },
    wr: {
      key: "wr",
      name: "Wrath & Ruin",
      tagline: "Dark Fantasy",
      terms: {
        gameName: "Wrath & Ruin",
        psyker: "Warlock",
        psykers: "Warlocks",
        masterPsyker: "Master Warlock",
        masterPsykers: "Master Warlocks",
        powers: "Spells",
        powersShort: "Spells",
        cv: "CV",
        cvSuffix: "",
        critLabel: "Critical Conjuring",
        team: "Warband",
        teamLower: "warband",
        teams: "Warbands",
        forgeTitle: "Wrath & Ruin — Fighter Forge",
        rosterTitle: "Wrath & Ruin — Warband Builder",
        featTitle: "Wrath & Ruin – Feat Sheet Builder"
      },
      assets: {
        texture: "img/wr/darkrealmstextureparchment.jpg?v=5",
        iconCC: "img/wr/sword.svg",
        iconRanged: "img/wr/bow.svg",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin53YjAv5DMXeyTtBZ46sdejUgvoHz7ywthTD96Kos-uKuFtaSPbW6E4HQLHtfehFonJX4f3eU18-I7CY2WJeZq76lX2bIwjEZC0d_V0rN9KaWNxSxzwkh6DBiPeR6dwyuHhGCTif7vNtjban5sPiLesX5dg-u9T_50AQeeSp3kolL0WpcWTFueTj06IVh/s1482/FFWrathicon.png",
        featBg: "img/wr/feat-card-bg.jpg"
      },
      storagePrefix: "wr",
      filePrefix: "wrath_ruin_",
      rosterKey: "warband",
      featStorageKey: "darkrealms_feat_sheet_state_v1",
      cardPowerStyle: "plain",
      prebuilt: [],
      RANGED_CATEGORIES: [
        {
          key: "pistols",
          label: "Pistols/Grenades",
          ids: ["blackpowderPistol", "handCrossbow", "throwingKnives", "thrownGlassOrbExplosive", "thrownGlassOrbFire", "thrownGlassOrbPoison", "thrownRock", "thrownSpear"]
        },
        {
          key: "light",
          label: "Light/Medium Ranged",
          ids: ["bow", "crossbow", "sling", "blunderbuss", "flamespurter"]
        },
        {
          key: "special",
          label: "Special",
          ids: ["breathWeaponBeasts", "blackpowderRifle"]
        },
        {
          key: "heavy",
          label: "Heavy",
          ids: ["longBow", "repeaterBlackpowderGun", "repeatingCrossbow", "rocketGun"]
        }
      ]
    }
  };

  var STAT_CONFIG = [
    {
      key: "move",
      label: "Move",
      unit: "\"",
      base: 6,
      min: 5,
      max: 8,
      upCost: 4,
      downCost: 4,
      lowerIsBetter: false
    },
    {
      key: "def",
      label: "DEF",
      unit: "+",
      base: 9,
      min: 5,
      max: 11,
      upCost: 1,
      downCost: 1,
      lowerIsBetter: true
    },
    {
      key: "ap",
      label: "AP",
      unit: "",
      base: 2,
      min: 2,
      max: 3,
      upCost: 7,
      downCost: 7,
      lowerIsBetter: false
    },
    {
      key: "hp",
      label: "HP",
      unit: "",
      base: 7,
      min: 3,
      max: 99,
      upCost: 1,
      downCost: 1,
      lowerIsBetter: false
    },
    {
      key: "atk",
      label: "ATK",
      unit: "",
      base: 3,
      min: 3,
      max: 5,
      upCost: 2,
      downCost: 0,
      lowerIsBetter: false
    },
    {
      key: "fight",
      label: "Fight",
      unit: "+",
      base: 7,
      min: 5,
      max: 11,
      upCost: 2,
      downCost: 1,
      lowerIsBetter: true
    },
    {
      key: "shoot",
      label: "Shoot",
      unit: "+",
      base: 7,
      min: 5,
      max: 11,
      upCost: 2,
      downCost: 1,
      lowerIsBetter: true
    }
  ];

  var CC_WEAPONS = [
    {
      id: "fistsClaws",
      name: "Fists/Claws",
      points: 0,
      profile: "ATK User, Hit User, DMG 2/3"
    },
    {
      id: "knife",
      name: "Knife",
      points: 1,
      profile: "ATK User, Hit User, DMG 3/3",
      games: ["wr"]
    },
    {
      id: "beastClawsBite",
      name: "Beast Claws/Bite",
      points: 2,
      profile: "ATK User, Hit User, DMG 3/4"
    },
    {
      id: "bigBladeAxe",
      name: "Big Blade/Axe",
      points: 3,
      profile: "ATK User, Hit User, DMG 3/5"
    },
    {
      id: "clubMace",
      name: "Club/Maze",
      points: 3,
      profile: "ATK User, Hit User, DMG 4/4",
      games: ["wr"]
    },
    {
      id: "spear",
      name: "Spear",
      points: 3,
      profile: "ATK User, Hit User, DMG 3/3, Rng 2\"",
      games: ["wr"]
    },
    {
      id: "staff",
      name: "Staff",
      points: 3,
      profile: "ATK User, Hit User, DMG 4/4",
      games: ["wr"]
    },
    {
      id: "greatBlade",
      name: "Great Blade",
      points: 4,
      profile: "ATK User, Hit User, DMG 4/5",
      games: ["wr"]
    },
    {
      id: "halberd",
      name: "Halberd",
      points: 4,
      profile: "ATK User, Hit User, DMG 3/4, Rng 2\"",
      games: ["wr"]
    },
    {
      id: "twoHandedBlade",
      name: "Two Handed Blade",
      points: 5,
      profile: "ATK User, Hit User, DMG 5/6",
      games: ["wr"]
    },
    {
      id: "bigChainblade",
      name: "Big Chainblade",
      points: 5,
      profile: "ATK User, Hit User, DMG 5/6",
      games: ["mortalis"]
    },
    {
      id: "bladeAxe",
      name: "Blade/Axe",
      points: 2,
      profile: "ATK User, Hit User, DMG 3/4"
    },
    {
      id: "chainsword",
      name: "Chainsword",
      points: 4,
      profile: "ATK User, Hit User, DMG 4/5",
      games: ["mortalis"]
    },
    {
      id: "flail",
      name: "Flail",
      points: 4,
      profile: "ATK User, Hit User-1, DMG 4/5, Rng 2",
      wr: {
        profile: "ATK User, Hit User-1, DMG 4/5, Rng 2\""
      }
    },
    {
      id: "greatHammer",
      name: "Great Hammer",
      points: 7,
      profile: "ATK User, Hit User-2, DMG 5/7, Reroll (1)",
      games: ["wr"]
    },
    {
      id: "hugeHammerAxeBlade",
      name: "Huge Hammer/Axe/Blade",
      points: 6,
      profile: "ATK User, Hit User, DMG 5/6, Reroll (1)"
    },
    {
      id: "monstrousClaws",
      name: "Monstrous Claws",
      points: 6,
      profile: "ATK User, Hit User, DMG 5/6, MW (1)"
    },
    {
      id: "poisonedKnife",
      name: "Poisoned Knife",
      points: 3,
      profile: "ATK User, Hit User, DMG 3/4, Poison",
      games: ["mortalis"]
    },
    {
      id: "poisonedWeapon",
      name: "Poisoned Weapon",
      points: 6,
      profile: "ATK User, Hit User, DMG 4/5, Poison, Reroll (1)",
      games: ["mortalis"]
    },
    {
      id: "powerFist",
      name: "Power Fist",
      points: 8,
      profile: "ATK User, Hit User-1, DMG 5/7, Crits on 9+, MW (1)",
      games: ["mortalis"]
    },
    {
      id: "powerKnife",
      name: "Power Knife",
      points: 4,
      profile: "ATK User, Hit User, DMG 3/5, Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "powerRapier",
      name: "Power Rapier",
      points: 6,
      profile: "ATK User, Hit User, DMG 4/5, Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "powerSpear",
      name: "Power Spear",
      points: 8,
      profile: "ATK User, Hit User, DMG 4/6, , Rng 2, Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "powerWeapon",
      name: "Power Weapon",
      points: 7,
      profile: "ATK User, Hit User, DMG 4/6, Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "psychicStaff",
      name: "Psychic Staff",
      points: 8,
      profile: "ATK User, Hit User, DMG 4/6, Crits on 9+, Fire",
      games: ["mortalis"]
    },
    {
      id: "thunderHammer",
      name: "Thunder Hammer",
      points: 10,
      profile: "ATK User, Hit User-2, DMG 5/7, Crits on 9+, MW (2)",
      games: ["mortalis"]
    },
    {
      id: "whip",
      name: "Whip",
      points: 2,
      profile: "ATK User, Hit User-1, DMG 3/4, Rng 2",
      games: ["mortalis"]
    }
  ];

  var RANGED_WEAPONS = [
    {
      id: "blackpowderPistol",
      name: "Blackpowder Pistol",
      points: 4,
      profile: "ATK 4, Hit User, DMG 4/5, Rng 8\", Piercing (-3), Risky",
      games: ["wr"]
    },
    {
      id: "blackpowderRifle",
      name: "Blackpowder Rifle",
      points: 9,
      profile: "ATK 4, Hit User, DMG 4/5, Piercing (-3), Risky",
      games: ["wr"]
    },
    {
      id: "blunderbuss",
      name: "Blunderbuss",
      points: 4,
      profile: "ATK 4, Hit User+1, DMG 4/4, Rng 6\"",
      games: ["wr"]
    },
    {
      id: "bow",
      name: "Bow",
      points: 2,
      profile: "ATK 4, Hit User, DMG 3/4",
      games: ["wr"]
    },
    {
      id: "breathWeaponBeasts",
      name: "Breath Weapon (Beasts)",
      points: 6,
      profile: "ATK 4, Hit User+2, DMG 3/4, Rng 6\", Boost (2) Cover, Piercing (-2), Torrent (1\"), Fire",
      games: ["wr"]
    },
    {
      id: "crossbow",
      name: "Crossbow",
      points: 4,
      profile: "ATK 4, Hit User, DMG 3/4, Piercing Crits (-2)",
      games: ["wr"]
    },
    {
      id: "flamespurter",
      name: "Flamespurter",
      points: 5,
      profile: "ATK 4, Hit User+2, DMG 3/4, Rng 6\", Boost (2) Cover, Torrent (1\"), Fire",
      games: ["wr"]
    },
    {
      id: "handCrossbow",
      name: "Hand Crossbow",
      points: 3,
      profile: "ATK 4, Hit User, DMG 3/4, Rng 8\", Piercing Crits (-2)",
      games: ["wr"]
    },
    {
      id: "longBow",
      name: "Long Bow",
      points: 3,
      profile: "ATK 4, Hit User, DMG 4/5, Heavy (Dash)",
      games: ["wr"]
    },
    {
      id: "repeaterBlackpowderGun",
      name: "Repeater Blackpowder Gun",
      points: 10,
      profile: "ATK 6, Hit User, DMG 4/4, Reroll (1), Heavy (Dash), Piercing (-3), Risky",
      games: ["wr"]
    },
    {
      id: "repeatingCrossbow",
      name: "Repeating Crossbow",
      points: 7,
      profile: "ATK 5, Hit User, DMG 4/5, Piercing Crits (-2), Heavy (Dash)",
      games: ["wr"]
    },
    {
      id: "rocketGun",
      name: "Rocket Gun",
      points: 8,
      profile: "ATK 5, Hit User, DMG 4/5, Blast (1\"), Heavy (Dash)",
      games: ["wr"]
    },
    {
      id: "sling",
      name: "Sling",
      points: 2,
      profile: "ATK 4, Hit User, DMG 2/3, Rng 8\"",
      games: ["wr"]
    },
    {
      id: "throwingKnives",
      name: "Throwing Knives",
      points: 3,
      profile: "ATK 4, Hit User, DMG 3/4, Rng 6\"",
      games: ["wr"]
    },
    {
      id: "thrownGlassOrbExplosive",
      name: "Thrown Glass Orb – Explosive",
      points: 6,
      profile: "ATK 4, Hit User-2, DMG 2/4, Rng 6\", Blast (2\"), Boost (1) Cover",
      games: ["wr"]
    },
    {
      id: "thrownGlassOrbFire",
      name: "Thrown Glass Orb – Fire",
      points: 6,
      profile: "ATK 4, Hit User-2, DMG 2/4, Rng 6\", Torrent (1\"), Boost (2) Cover, Fire",
      games: ["wr"]
    },
    {
      id: "thrownGlassOrbPoison",
      name: "Thrown Glass Orb – Poison",
      points: 6,
      profile: "ATK 4, Hit User-2, DMG 4/5, Rng 6\", Piercing (-2), Boost (1) Cover, Poison",
      games: ["wr"]
    },
    {
      id: "thrownRock",
      name: "Thrown Rock",
      points: 0,
      profile: "ATK 4, Hit User, DMG 1/2, Rng 8\"",
      games: ["wr"]
    },
    {
      id: "thrownSpear",
      name: "Thrown Spear (Javelin)",
      points: 4,
      profile: "ATK 4, Hit User-1, DMG 3/4, Rng 12\"",
      games: ["wr"]
    },
    {
      id: "arcPistol",
      name: "Arc Pistol",
      points: 6,
      profile: "ATK 4, Hit User, DMG 4/5, Rng 6\", Piercing (-3)",
      games: ["mortalis"]
    },
    {
      id: "autoLaspistol",
      name: "Auto/Laspistol",
      points: 1,
      profile: "ATK 4, Hit User, DMG 2/3, Rng 6\", Quick",
      games: ["mortalis"]
    },
    {
      id: "boltPistol",
      name: "Bolt Pistol",
      points: 3,
      profile: "ATK 4, Hit User, DMG 3/4, Rng 6\", Piercing Crits (-2), Quick",
      games: ["mortalis"]
    },
    {
      id: "handFlamer",
      name: "Hand Flamer",
      points: 4,
      profile: "ATK 4, Hit User+2, DMG 3/4, Rng 6\", Boost (2) Cover, Torrent (1\"), Fire",
      games: ["mortalis"]
    },
    {
      id: "meltaPistol",
      name: "Melta Pistol",
      points: 7,
      profile: "ATK 4, Hit User, DMG 6/3, Rng 3\", Piercing (-5), MW (4)",
      games: ["mortalis"]
    },
    {
      id: "phosphorBlastPistol",
      name: "Phosphor Blast Pistol",
      points: 4,
      profile: "ATK 4, Hit User, DMG 3/4, Rng 6\", Blast (1\"), Quick",
      games: ["mortalis"]
    },
    {
      id: "plasmaPistol",
      name: "Plasma Pistol",
      points: 7,
      profile: "ATK 4, Hit User, DMG (Std) 4/5, Rng 6\", Piercing (-3), Crits on 9+; (Supercharged): DMG 5/6, Rng 6\", Piercing (-4), Crits on 9+, Risky",
      cardProfiles: [
        {
          label: "Standard",
          profile: "ATK 4, Hit User, DMG 4/5, Rng 6\", Piercing (-3), Crits on 9+"
        },
        {
          label: "Supercharged",
          profile: "ATK 4, Hit User, DMG 5/6, Rng 6\", Piercing (-4), Crits on 9+, Risky"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "rokkitPistol",
      name: "Rokkit Pistol",
      points: 7,
      profile: "ATK 6, Hit User, DMG 4/5, Rng 6\", Blast (1\")",
      games: ["mortalis"]
    },
    {
      id: "slugga",
      name: "Slugga",
      points: 2,
      profile: "ATK 6, Hit User, DMG 1/2, Rng 6\", Quick",
      games: ["mortalis"]
    },
    {
      id: "warpflamePistol",
      name: "Warpflame Pistol",
      points: 6,
      profile: "ATK 4, Hit User+2, DMG 3/4, Rng 6\", Boost (2) Cover, Piercing (-2), Torrent (1\"), Fire",
      games: ["mortalis"]
    },
    {
      id: "fragGrenade",
      name: "Frag Grenades",
      points: 5,
      profile: "ATK 4, Hit User-2, DMG 2/4, Rng 6\", Blast (2\"), Boost (1) Cover, Quick",
      games: ["mortalis"]
    },
    {
      id: "krakGrenade",
      name: "Krak Grenades",
      points: 6,
      profile: "ATK 4, Hit User-2, DMG 4/5, Rng 6\", Piercing (-2), Quick",
      games: ["mortalis"]
    },
    {
      id: "meltaBomb",
      name: "Melta Grenades",
      points: 8,
      profile: "ATK 4, Hit User-2, DMG 5/6, Rng 6\", Blast (2\"), Piercing (-2)",
      games: ["mortalis"]
    },
    {
      id: "diylightPistol",
      name: "DIY Light Pistol",
      points: 2,
      profile: "ATK 4, Hit User, DMG 2/3, Rng 6\", Quick",
      games: ["mortalis"]
    },
    {
      id: "diymediumPistol",
      name: "DIY Medium Pistol",
      points: 3,
      profile: "ATK 4, Hit User, DMG 3/4, Rng 6\", Quick",
      games: ["mortalis"]
    },
    {
      id: "diyheavyPistol",
      name: "DIY Heavy Pistol",
      points: 4,
      profile: "ATK 4, Hit User, DMG 4/5, Rng 6\"",
      games: ["mortalis"]
    },
    {
      id: "autoLasgun",
      name: "Auto/Lasgun",
      points: 3,
      profile: "ATK 4, Hit User, DMG 2/3",
      games: ["mortalis"]
    },
    {
      id: "boltGun",
      name: "Bolt Gun",
      points: 5,
      profile: "ATK 4, Hit User, DMG 3/4, Piercing Crits (-2)",
      games: ["mortalis"]
    },
    {
      id: "gaussBlaster",
      name: "Gauss Blaster",
      points: 7,
      profile: "ATK 4, Hit User, DMG 4/5, Piercing (-2)",
      games: ["mortalis"]
    },
    {
      id: "hvyShotgun",
      name: "Hvy. Shotgun",
      points: 4,
      profile: "ATK 4, Hit User+2, DMG 4/4, Rng 8\"",
      games: ["mortalis"]
    },
    {
      id: "infernoBoltGun",
      name: "Inferno Bolt Gun",
      points: 6,
      profile: "ATK 4, Hit User, DMG 3/4, Piercing (-2)",
      games: ["mortalis"]
    },
    {
      id: "ionRifle",
      name: "Ion Rifle",
      points: 6,
      profile: "ATK 4, Hit User, DMG 4/5, Piercing Crits (-2)",
      games: ["mortalis"]
    },
    {
      id: "neutronBlaster",
      name: "Neutron Blaster",
      points: 5,
      profile: "ATK 4, Hit User, DMG 3/3, MW (2)",
      games: ["mortalis"]
    },
    {
      id: "pulseCarbine",
      name: "Pulse Carbine",
      points: 5,
      profile: "ATK 4, Hit User, DMG 4/5, Reroll (1)",
      games: ["mortalis"]
    },
    {
      id: "shotgun",
      name: "Shotgun",
      points: 3,
      profile: "ATK 4, Hit User+2, DMG 3/3, Rng 8\"",
      games: ["mortalis"]
    },
    {
      id: "shoota",
      name: "Shoota",
      points: 4,
      profile: "ATK 6, Hit User, DMG 1/2",
      games: ["mortalis"]
    },
    {
      id: "shurikenRifle",
      name: "Shuriken Rifle",
      points: 6,
      profile: "ATK 4, Hit User, DMG 3/4, Piercing (-2)",
      games: ["mortalis"]
    },
    {
      id: "teslaCarbine",
      name: "Tesla Carbine",
      points: 6,
      profile: "ATK 5, Hit User, DMG 3/3, Deals MW (2) to Fighters within 2\" of target",
      games: ["mortalis"]
    },
    {
      id: "diylightRifle",
      name: "DIY Light Rifle",
      points: 3,
      profile: "ATK 4, Hit User, DMG 2/3",
      games: ["mortalis"]
    },
    {
      id: "diymediumRifle",
      name: "DIY Medium Rifle",
      points: 4,
      profile: "ATK 4, Hit User, DMG 3/4",
      games: ["mortalis"]
    },
    {
      id: "diyheavyRifle",
      name: "DIY Heavy Rifle",
      points: 5,
      profile: "ATK 4, Hit User, DMG 4/5",
      games: ["mortalis"]
    },
    {
      id: "burstCannon",
      name: "Burst Cannon",
      points: 6,
      profile: "ATK 6, Hit User-2, DMG 3/3",
      games: ["mortalis"]
    },
    {
      id: "flamer",
      name: "Flamer",
      points: 8,
      profile: "ATK 4, Hit User+2, DMG 4/4, Rng 10\", Boost (2) Cover, Torrent (2\"), Fire",
      games: ["mortalis"]
    },
    {
      id: "grenadeLauncher",
      name: "Grenade Launcher",
      points: 8,
      profile: "ATK 4, Hit User, DMG (Frag) 2/4, Blast (2\"); (Krak): DMG 4/5, Piercing (-2)",
      cardProfiles: [
        {
          label: "Frag",
          profile: "ATK 4, Hit User, DMG 2/4, Blast (2\")"
        },
        {
          label: "Krak",
          profile: "ATK 4, Hit User, DMG 4/5, Piercing (-2)"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "meltaGun",
      name: "Melta Gun",
      points: 10,
      profile: "ATK 4, Hit User, DMG 6/3, Rng 6\", Piercing (-5), MW (4)",
      games: ["mortalis"]
    },
    {
      id: "neutronRailRifle",
      name: "Neutron Rail Rifle",
      points: 6,
      profile: "ATK 4, Hit User, DMG 4/4, MW (2)",
      games: ["mortalis"]
    },
    {
      id: "plasmaGun",
      name: "Plasma Gun",
      points: 10,
      profile: "ATK 4, Hit User, DMG (Std) 4/6, Piercing (-3), Crits on 9+; (Supercharged): DMG 5/6, Piercing (-4), Crits on 9+, Risky",
      cardProfiles: [
        {
          label: "Standard",
          profile: "ATK 4, Hit User, DMG 4/6, Piercing (-3), Crits on 9+"
        },
        {
          label: "Supercharged",
          profile: "ATK 4, Hit User, DMG 5/6, Piercing (-4), Crits on 9+, Risky"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "scopedBigShoota",
      name: "Scoped Big Shoota",
      points: 8,
      profile: "ATK 5, Hit User+1, DMG 3/3, MW (2), Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "shredder",
      name: "Shredder",
      points: 8,
      profile: "ATK 4, Hit User, DMG 4/5, Piercing (-3)",
      games: ["mortalis"]
    },
    {
      id: "sniperRifle",
      name: "Sniper Rifle",
      points: 12,
      profile: "ATK 4, Hit User+1, DMG 3/3, Piercing (-2), Boost (1) Cover, MW (3), Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "synapticDisintegrator",
      name: "Synaptic Disintegrator",
      points: 11,
      profile: "ATK 4, Hit User+1, DMG 4/3, Piercing (-4), Boost (1) Cover, MW (1), Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "warpflamer",
      name: "Warpflamer",
      points: 10,
      profile: "ATK 4, Hit User+2, DMG 4/4, Rng 8\", Boost (2) Cover, Torrent (2\"), Piercing (-2), Fire",
      games: ["mortalis"]
    },
    {
      id: "eavyRokkitLauncha",
      name: "‘Eavy Rokkit Launcha",
      points: 12,
      profile: "ATK 6, Hit User, DMG 4/5, Blast (1\"), Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "bigShoota",
      name: "Big Shoota",
      points: 8,
      profile: "ATK 6, Hit User, DMG 3/4",
      games: ["mortalis"]
    },
    {
      id: "chaincannon",
      name: "Chaincannon",
      points: 10,
      profile: "ATK 6, Hit User, DMG 4/4, Reroll (1), Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "fragCannon",
      name: "Frag Cannon",
      points: 10,
      profile: "ATK 4, Hit User, DMG (Shell) 5/7, Piercing (-3); (Shrapnel): DMG 4/5, Blast (2\")",
      cardProfiles: [
        {
          label: "Shrapnel",
          profile: "ATK 4, Hit User, DMG 4/5, Blast (2\")"
        },
        {
          label: "Shell",
          profile: "ATK 4, Hit User, DMG 5/7, Piercing (-3)"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "heavyBolter",
      name: "Heavy Bolter",
      points: 10,
      profile: "ATK 5, Hit User, DMG 5/6, Reroll (1), Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "heavyFlamer",
      name: "Heavy Flamer",
      points: 11,
      profile: "ATK 4, Hit User+2, DMG 5/5, Rng 10\", Boost (2) Cover, Piercing (-2), Torrent (2\"), Fire",
      games: ["mortalis"]
    },
    {
      id: "heavyStubber",
      name: "Heavy Stubber",
      points: 6,
      profile: "ATK 5, Hit User, DMG 4/5, Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "lascannon",
      name: "Lascannon",
      points: 12,
      profile: "ATK 4, Hit User, DMG 6/7, Piercing (-4), MW (2), Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "missileLauncher",
      name: "Missile Launcher",
      points: 10,
      profile: "Mode (Krak): ATK 4, Hit User, DMG 6/7, Piercing (-3), Heavy (Dash); (Frag): DMG 4/5, Blast (2\"), Piercing Crits (-2), Heavy (Dash)",
      cardProfiles: [
        {
          label: "Krak",
          profile: "ATK 4, Hit User, DMG 6/7, Piercing (-3), Heavy (Dash)"
        },
        {
          label: "Frag",
          profile: "ATK 4, Hit User, DMG 4/5, Piercing Crits (-2), Blast 2\", Heavy (Dash)"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "multiMelta",
      name: "Multi Melta",
      points: 11,
      profile: "ATK 4, Hit User, DMG 6/3, MW (4), Heavy (Dash), Piercing (-5)",
      games: ["mortalis"]
    },
    {
      id: "plasmaCannon",
      name: "Plasma Cannon",
      points: 12,
      profile: "Mode (Std): ATK 4, Hit User, DMG 5/6, Blast (2\"), Piercing (-3), Heavy (Dash), Crits on 9+; (Supercharged): DMG 6/6, Blast (2\"), Piercing (-4), Heavy (Dash), Crits on 9+, Risky",
      cardProfiles: [
        {
          label: "Standard",
          profile: "ATK 4, Hit User, DMG 5/6, Piercing (-3), Blast (2\"),Heavy (Dash), Crits on 9+"
        },
        {
          label: "Supercharge",
          profile: "ATK 4, Hit User, DMG 6/6, Piercing (-4), Blast 2\", Heavy (Dash), Crits on 9+, Risky"
        }
      ],
      games: ["mortalis"]
    },
    {
      id: "rokkitLauncha",
      name: "Rokkit Launcha",
      points: 9,
      profile: "ATK 6, Hit User, DMG 4/5, Blast (1\")",
      games: ["mortalis"]
    },
    {
      id: "shurikenCannon",
      name: "Shuriken Cannon",
      points: 7,
      profile: "ATK 5, Hit User, DMG 4/5",
      games: ["mortalis"]
    },
    {
      id: "soulreaperCannon",
      name: "Soulreaper Cannon",
      points: 12,
      profile: "ATK 6, Hit User, DMG 4/5, Piercing Crits (-2)",
      games: ["mortalis"]
    },
    {
      id: "wraithCannon",
      name: "Wraith Cannon",
      points: 11,
      profile: "ATK 4, Hit User, DMG 6/3, MW (3), Heavy (Dash), Piercing (-4), Crits on 9+",
      games: ["mortalis"]
    },
    {
      id: "diyheavyantiinfantryGun",
      name: "DIY H. Anti-Infantry Gun",
      points: 8,
      profile: "ATK 6, Hit User, DMG 4/5, Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "diyheavyantieliteGun",
      name: "DIY H. Anti-Elite Gun",
      points: 7,
      profile: "ATK 5, Hit User, DMG 5/6, Heavy (Dash)",
      games: ["mortalis"]
    },
    {
      id: "diyheavyantitankGun",
      name: "DIY H. Anti-Tank Gun",
      points: 5,
      profile: "ATK 4, Hit User, DMG 6/7, Heavy (Dash)",
      games: ["mortalis"]
    }
  ];

  var FIGHTER_ABILITIES = [
    {
      id: "counterstrike",
      name: "Counterstrike",
      category: "Defensive",
      points: 4,
      effect: "Each time an enemy Fighter deals this Fighter damage from an attack dice in Close Combat, this Fighter deals that Fighter 1 MW."
    },
    {
      id: "terrifying",
      name: "Terrifying",
      category: "Defensive",
      points: 3,
      effect: "Close Combat attacks made by enemy Fighters within 1\" of this Fighter suffer Weaken (1).",
      wr: {
        effect: "This Fighter gains Weaken (1) against Close Combat attacks."
      }
    },
    {
      id: "expertGunfighter",
      name: "Expert Gunfighter",
      category: "Offensive",
      points: 4,
      effect: "This Fighter can make Shooting attacks with Pistols even while within 1\" of enemy Fighters."
    },
    {
      id: "horrifyingDismemberment",
      name: "Horrifying Dismemberment",
      category: "Utility",
      points: 2,
      effect: "When this Fighter slays an enemy in Close Combat, enemy Fighters within 6\" of the slain Fighter get -1 AP for the rest of the turn."
    },
    {
      id: "experiencedBrawler",
      name: "Experienced Brawler",
      category: "Offensive",
      points: 2,
      effect: "This Fighter does not suffer Weaken from being outnumbered in Close Combat, and enemies do not gain Boost from outnumbering this Fighter.",
      wr: {
        effect: "When this Fighter attacks in Close Combat, the Defender does not gain Weaken (1) for this Fighter being within 1\" of two or more Enemy Fighters. When this Fighter is attacked in Close Combat, the Attacker does not gain Boost (1) from Friendly Fighters within 1\" of this Fighter."
      }
    },
    {
      id: "nullPariah",
      name: "Null / Pariah",
      category: "Utility",
      points: 5,
      effect: "This Fighter cannot be targeted by Psychic Powers and cannot be a Psyker. Psykers (friend or foe) within 6\" cannot use Psychic Powers.",
      wr: {
        effect: "This Fighter cannot be targeted by Spells and cannot be a Warlock. Warlocks (friend or foe) within 6\" cannot use Spells."
      }
    },
    {
      id: "zealot",
      name: "Zealot",
      category: "Offensive",
      points: 3,
      effect: "When this Fighter fights in Close Combat after Charging this activation, its attacks gain Boost (1).",
      wr: {
        effect: "When this Fighter fights in Close Combat after Charging this activation, it gains Boost (1)."
      }
    },
    {
      id: "fast",
      name: "Fast",
      category: "Mobility",
      points: 3,
      effect: "This Fighter may perform a free Dash action during its activation (no AP cost)."
    },
    {
      id: "hyperAggressive",
      name: "Sustained Fire",
      category: "Offensive",
      points: "= priciest Ranged Weapon",
      dynamicType: "maxRanged",
      effect: "This Fighter may perform 2 Shooting actions (Pistols/Light/Medium only) during its activation, but if it does, its ranged weapons gain Heavy (Dash). (Max. 1 instance of this ability per 3 models in the Team.) Cost equals this Fighter’s most expensive Ranged Weapon. Cannot be combined with Patient and Reactive.",
      wr: {
        effect: "This Fighter may perform 2 Shooting actions (Pistols/Light/Medium only) during its activation, but if it does, its ranged weapons gain Heavy (Dash). (Max. 1 instance of this ability per 3 models in the Warband.) Cost equals this Fighter’s most expensive Ranged Weapon. Cannot be combined with Patient and Reactive."
      }
    },
    {
      id: "aggressive",
      name: "Aggressive",
      category: "Offensive",
      points: 2,
      effect: "This Fighter may perform 2 Fight actions during its activation."
    },
    {
      id: "gestaltMind",
      name: "Gestalt Mind",
      category: "Utility",
      points: 2,
      effect: "This Fighter may share its AP with other Fighters in the Team that also have Gestalt Mind. When activating a Fighter, you may give 1 AP to another unactivated Gestalt Mind Fighter (max 4 AP on a Fighter).",
      wr: {
        effect: "This Fighter may share its AP with other Fighters in the Warband that also have Gestalt Mind. When activating a Fighter, you may give 1 AP to another unactivated Gestalt Mind Fighter (max 4 AP on a Fighter)."
      }
    },
    {
      id: "reanimation",
      name: "Reanimation",
      category: "Utility",
      points: "30% of total cost (min 4)",
      dynamicType: "percentTotal",
      dynamicFactor: 0.3,
      dynamicMin: 4,
      effect: "When a Fighter with Reanimation is slain, place a token within 1\". At the start of each turn, on 5+ it is reanimated within 1\" with D3+2 HP and may act as normal. The HP it returns with becomes its maximum HP for the rest of the battle (cross off the remaining HP); it can never be healed above it. A Fighter can only be reanimated once; fail = leave the token and try next turn. Cost: 30% of the Fighter’s total cost, not counting Reanimation itself (min. 4). Cannot be combined with Endless Horde.",
      wr: {
        effect: "When this Fighter is Slain, place a token within 1\". It still counts as Slain. At the start of each following turn, roll a D12: on 5+, set it up within 1\" of the token with D3+2 HP. That value becomes its maximum HP for the rest of the game. On a fail, leave the token and try again next turn. A Fighter can only be Reanimated once. Cannot be combined with Endless Horde."
      }
    },
    {
      id: "vengeance",
      name: "Vengeance",
      category: "Offensive",
      points: 2,
      effect: "When an enemy slays one of your Fighters, that enemy gains a Vengeance token. Fighters with Vengeance may turn one normal hit into a Crit when attacking an enemy with a Vengeance token. Remove the token when the enemy is slain; Vengeance tokens stack."
    },
    {
      id: "powerFromPain",
      name: "Power from Pain",
      category: "Utility",
      points: 4,
      effect: "This Fighter gains a PfP token each time it injures or slays an enemy in Close Combat. During its activation it may spend PfP to: gain 1 AP (this turn), regain D3+1 HP, or gain Reroll (2) on all weapons (this turn)."
    },
    {
      id: "ruthless",
      name: "Ruthless",
      category: "Offensive",
      points: 2,
      effect: "This Fighter may shoot at enemies locked in Combat. Any failed To Hit rolls of 1–2 hit the friendly model as normal damage."
    },
    {
      id: "regenerate",
      name: "Regenerate",
      category: "Defensive",
      points: 4,
      effect: "At the beginning of this Fighter’s activation, it regains D3+1 lost HP."
    },
    {
      id: "resilient",
      name: "Resilient",
      category: "Defensive",
      points: "+40% of HP Stat",
      dynamicType: "percentHp",
      dynamicFactor: 0.4,
      effect: "This Fighter gains Weaken (1)."
    },
    {
      id: "unfetteredRage",
      name: "Unfettered Rage",
      category: "Offensive",
      points: 4,
      effect: "If this Fighter does not score any Critical Hits in Close Combat, you may change one normal hit to a Critical Hit."
    },
    {
      id: "noxiousPresence",
      name: "Noxious Presence",
      category: "Utility",
      points: 4,
      effect: "Enemy Fighters within 3\" reduce their DEF by 1. This stacks with other Noxious Presence auras."
    },
    {
      id: "scarred",
      name: "Scarred",
      category: "Offensive",
      points: 3,
      effect: "Once per turn in Close Combat, this Fighter may lose 1 HP to reroll one attack die. If the reroll hits, add +1 Damage; if it misses, the Fighter loses 1 additional HP."
    },
    {
      id: "bornInDarkness",
      name: "Born in Darkness",
      category: "Utility",
      points: 5,
      effect: "This Fighter cannot be targeted by Shooting attacks from 12\" or more away, and cannot make Shooting attacks at targets 12\" or more away."
    },
    {
      id: "alchemist",
      name: "Alchemist",
      category: "Offensive",
      points: 3,
      effect: "Damage from Poison/Fire tokens applied by this Fighter’s weapons instead deals D3+1 damage."
    },
    {
      id: "trenchWarrior",
      name: "Trench Warrior",
      category: "Offensive",
      points: 4,
      effect: "This Fighter can use the Shoot action (only Pistols/Grenades/Light/Medium Ranged Weapons) even while Hidden, and may Hide in an Activation it has performed a Shoot Action."
    },
    {
      id: "safeguard",
      name: "Safeguard",
      category: "Offensive",
      points: 3,
      effect: "Whenever this Fighter is within proximity of an Objective, its weapons gain Reroll (1)."
    },
    {
      id: "gunslinger",
      name: "Gunslinger",
      category: "Offensive",
      points: "= priciest Pistol",
      dynamicType: "maxPistol",
      effect: "If the Fighter can make multiple Shoot Actions with pistols in the same Activation, the second Shoot Action made with a pistol on their Activation may be for free."
    },
    {
      id: "headTaker",
      name: "Head-taker",
      category: "Offensive",
      points: 3,
      effect: "Whenever this Fighter kills an enemy in Melee, increase Crit Damage for all its Melee weapons by +2 for the rest of the battle."
    },
    {
      id: "endlessHorde",
      name: "Endless Horde",
      category: "Mobility",
      points: "= HP Stat",
      dynamicType: "hpStat",
      dynamicFactor: 1,
      effect: "Cost equals this Fighter’s current HP stat. When this Fighter is Slain, at the start of the next turn it returns in your Rearguard Deployment Zone. Only for Fighters with 2 AP or less and 10 HP or less. Cannot be combined with Reanimation."
    },
    {
      id: "volatileExpiration",
      name: "Volatile Expiration",
      category: "Offensive",
      points: 3,
      effect: "When this Fighter is slain, you may roll a D12 (subtract 2 if within 1\" of another enemy). On 6+, each Fighter within 2\" suffers D3 MW."
    },
    {
      id: "expendable",
      name: "Expendable",
      category: "Utility",
      points: 3,
      effect: "When this Fighter dies, roll a D12; on 6+ you gain 1 FP."
    },
    {
      id: "agent",
      name: "Agent",
      category: "Utility",
      points: 3,
      effect: "The AP cost of all Interact actions for this Fighter is reduced by 1 (to a minimum of 0)."
    },
    {
      id: "sacrificialFollower",
      name: "Sacrificial Follower",
      category: "Utility",
      points: 4,
      effect: "When within 6\" of a Friendly Psyker, add 1 Warp Dice to your Warp Dice Pool each turn. If within 3\", the Fighter may also suffer any effects of Perils of the Warp, instead of the Psyker. Choose who suffers before rolling.",
      wr: {
        effect: "While within 6\" of a Friendly Warlock, that Warlock may roll 1 extra Aether Dice when Conjuring or Denying. If within 3\", this Fighter may suffer any Magic Backlash instead of the Warlock. Choose who suffers before rolling."
      }
    },
    {
      id: "soulAnchor",
      name: "Soul Anchor",
      category: "Utility",
      points: 4,
      effect: "Psyker Only. When this Psyker is Slain, before removing it from the Battlefield, it may immediately perform one last Manifestation, made exactly like a normal Manifestation, with the risk of Perils.",
      wr: {
        effect: "Warlock Only. When this Warlock is Slain, before removing it from the Battlefield, it may immediately perform one last Conjuring Action, made exactly like a normal Conjuring Action, with the risk of Magic Backlash."
      }
    },
    {
      id: "hexmarked",
      name: "Hexmarked",
      category: "Utility",
      points: 3,
      effect: "Any Psykers within 12\" of this Fighter treat both Natural 1's and Natural 2's as Triggers for Perils of the Warp.",
      wr: {
        effect: "Any Warlocks within 12\" of this Fighter treat both Natural 1's and Natural 2's on Aether Dice as triggers for Magic Backlash."
      }
    },
    {
      id: "recklessPsyker",
      name: "Reckless Psyker",
      category: "Utility",
      points: 6,
      effect: "Psyker Only. This Psyker may choose to gain a +2 to its Manifest Roll at any time, but Natural 2's trigger Perils and Natural 1's trigger TWO rolls on the Perils table. Choose before rolling, and if both triggers appear, only 1's are applied.",
      wr: {
        name: "Reckless Warlock",
        effect: "Warlock Only. This Warlock may choose to add +2 to its Conjuring Result at any time, but Natural 2's trigger Magic Backlash and Natural 1's trigger TWO rolls on the Magic Backlash table. Choose before rolling, and if both triggers appear, only 1's are applied."
      }
    },
    {
      id: "patientandReactive",
      name: "Patient and Reactive",
      category: "Utility",
      points: 17,
      effect: "This Fighter may make two activations per turn and split its AP between those activations. For all intents and purposes, this counts as two separate activations. Additionally, this Fighter can take any one action for free once each turn, but it may not perform any other free actions outside of Hide. This Fighter may not Reposition more than its Move Stat + 4\" per Turn. Cannot be combined with Sustained Fire."
    },
    {
      id: "finalDefiance",
      name: "Final Defiance",
      category: "Utility",
      points: 4,
      effect: "When this Fighter is slain, it may immediately perform one last action before removing it from play. "
    },
    {
      id: "instinctive",
      name: "Instinctive",
      category: "Mobility",
      points: 0,
      effect: "The Fighter can perform a free Dash action during its activation (no AP cost). This fighter cannot control objectives, and cannot perform Interact actions. No more than 1/3 your Team can be Instinctive.",
      wr: {
        effect: "The Fighter can perform a free Dash action during its activation (no AP cost). This fighter cannot control objectives, and cannot perform Interact actions. No more than 1/3 your Warband can be Instinctive."
      }
    },
    {
      id: "coordinated",
      name: "Coordinated",
      category: "Utility",
      points: 3,
      effect: "When activating a Fighter with Coordinated, you may choose and activate 1 other Fighter with Coordinated immediately after. This ability can only be taken on Fighters with 2 AP or less, 10 HP or less and max. 3/4 damage Weapons."
    },
    {
      id: "strikefromtheShadows",
      name: "Strike from the Shadows",
      category: "Offensive",
      points: 3,
      effect: "The Fighter may perform the Fight Action even while Hidden, and may Hide in an Activation it has performed the Fight Action."
    },
    {
      id: "superhumanWarrior",
      name: "Superhuman Warrior",
      category: "Utility",
      points: 10,
      effect: "This Fighter may perform 2 Shooting actions or 2 Close Combat actions in its activation. If using a Special/Heavy weapon, the second Shoot costs 2 AP. When Counteracting, it may perform 2 different actions.",
      wr: {
        points: "10 + 6 per AP above 2",
        dynamicType: "apScaled",
        dynamicFactor: 10,
        effect: "This Fighter's second Shoot or Fight action in an activation costs 1 AP instead of 2, and the second Shoot may use any ranged weapon, including Special/Heavy weapons. When Counteracting, it may perform 2 different actions."
      }
    }
  ];

  var LEADER_ABILITIES = [
    {
      id: "inspiringPresence",
      name: "Inspiring Presence",
      category: "Utility",
      points: 0,
      effect: "1 AP: Friendly Fighters within 3\" of your Leader gain 1 AP until end of turn."
    },
    {
      id: "masterTactician",
      name: "Master Tactician",
      category: "Utility",
      points: 0,
      effect: "1 AP: You immediately gain 1 FP."
    },
    {
      id: "guidance",
      name: "Guidance",
      category: "Utility",
      points: 0,
      effect: "1 AP: Choose a friendly Fighter within Line of Sight. That Fighter gains 1 AP until end of turn."
    },
    {
      id: "grizzledVeteran",
      name: "Grizzled Veteran",
      category: "Utility",
      points: 0,
      effect: "As long as this Fighter is on the battlefield, you can use the Tactical Reroll once per turn for 0 FP.",
      wr: {
        effect: "As long as this Fighter is on the battlefield, you may Reroll one of your dice for 0 FP once per turn."
      }
    },
    {
      id: "heroicLeader",
      name: "Heroic Leader",
      category: "Utility",
      points: 0,
      effect: "May use a Feat for free once per turn, but only during this Fighter’s activation."
    },
    {
      id: "giveOrders",
      name: "Give Orders",
      category: "Offensive",
      points: 0,
      effect: "1 AP: All friendly Fighters within 6\" gain ONE of the following (chosen once for all) until end of turn: Boost (1) on all attacks, +1\" Charge range, or Hide action for 0 AP.",
      wr: {
        effect: "1 AP: All friendly Fighters within 6\" gain ONE of the following (chosen once for all) until end of turn: Boost (1) on their attacks, +1\" Charge range, or Hide action for 0 AP."
      }
    },
    {
      id: "noEscape",
      name: "No Escape",
      category: "Mobility",
      points: 0,
      effect: "Enemy Fighters within this Fighter’s melee range reduce their Move by 2\" when performing a Fall Back action."
    },
    {
      id: "getHimMark",
      name: "Get Him!",
      category: "Offensive",
      points: 0,
      effect: "1 AP: Select an enemy Fighter within Line of Sight. All shooting attacks against that Fighter gain Reroll (1) until end of turn."
    },
    {
      id: "perfectDuellist",
      name: "Perfect Duellist",
      category: "Defensive",
      points: 0,
      effect: "This Fighter can defend against Critical Hits in Close Combat using normal Defence rolls."
    },
    {
      id: "implacable",
      name: "Implacable",
      category: "Defensive",
      points: 0,
      effect: "This Fighter is immune to Glancing Hits."
    },
    {
      id: "impermeable",
      name: "Impermeable",
      category: "Defensive",
      points: 0,
      effect: "This Fighter is immune to effects from the Poison/Fire keyword."
    },
    {
      id: "infernal",
      name: "Infernal",
      category: "Offensive",
      points: 0,
      effect: "This Fighter’s weapons gain Poison/Fire. When attacking enemy Fighters that have a Poison/Fire token, the weapon’s Damage values are improved by +1/+1."
    },
    {
      id: "uncontrolledEruption",
      name: "Uncontrolled Eruption",
      category: "Defensive",
      points: 0,
      effect: "2 AP: Inflict D3+2 Mortal Wounds to each other Fighter that is within 2\" and visible to this Fighter."
    },
    {
      id: "whispersWarp",
      name: "Whispers of the Warp",
      category: "Utility",
      points: 0,
      effect: "Whenever an opponent activates a Fighter within 6\", roll a D6. If the result is higher than that Fighter’s AP, it loses 1 AP for this activation.",
      wr: {
        name: "Whispers of the Aether"
      }
    },
    {
      id: "spiritualPariah",
      name: "Spiritual Pariah",
      category: "Defensive",
      points: 0,
      effect: "Enemy Fighters within 6\" and visible to this Fighter cannot reroll attack or defence rolls."
    },
    {
      id: "mercilessOnslaught",
      name: "Merciless Onslaught",
      category: "Offensive",
      points: 0,
      effect: "1 AP: Activate before rolling to Hit with a Close Combat attack. For that attack, Glancing Hits deal 2 Damage."
    },
    {
      id: "mindOnMission",
      name: "Mind on the Mission",
      category: "Utility",
      points: 0,
      effect: "All friendly Fighters within 6\" may use the Interact action for 0 AP."
    },
    {
      id: "feedOnPain",
      name: "Feed on Pain",
      category: "Utility",
      points: 0,
      effect: "If this Fighter slays an enemy Fighter with a Close Combat attack, it regains 3+D3 lost HP."
    }
  ];

  var SPELLS = [
    {
      id: "voidfireBlast",
      name: "VOIDFIRE BLAST",
      category: "Destructive",
      points: 0,
      cv: 9,
      effect: "Range: 12\"<br><br>Effect: Pick a point within 12\". All models within 2\" of impact suffer 3 Mortal Wounds each.<br><br>Critical Manifestation: Same as above, but radius increases to 4” and the Psyker suffers 1 Mortal Wound.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Pick a point within 12\". All models within 2\" of impact suffer 3 Mortal Wounds each.<br><br>Critical Conjuring: Same as above, but radius increases to 4” and the Warlock suffers 1 Mortal Wound."
      }
    },
    {
      id: "blazingWind",
      name: "BLAZING WIND",
      category: "Destructive",
      points: 0,
      cv: 7,
      effect: "Range: 12\"<br><br>Effect: Target suffers 3 MW and is moved 2\" directly away from the Psyker.<br><br>Critical Manifestation: Target suffers 4 MW and is moved 4\" directly away.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Target suffers 3 MW and is moved 2\" directly away from the Warlock.<br><br>Critical Conjuring: Target suffers 4 MW and is moved 4\" directly away."
      }
    },
    {
      id: "fireblast",
      name: "FIREBLAST",
      category: "Destructive",
      points: 0,
      cv: 7,
      effect: "Range: 12\"<br><br>Effect: Target suffers 3 MW and gains a Fire token.<br><br>Critical Manifestation: Target suffers 5 MW and gains a Fire token.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Target suffers 3 MW and gains a Fire token.<br><br>Critical Conjuring: Target suffers 5 MW and gains a Fire token."
      }
    },
    {
      id: "lightningBolt",
      name: "LIGHTNING BOLT",
      category: "Destructive",
      points: 0,
      cv: 8,
      effect: "Range: -<br><br>Effect: Target suffers 4 Mortal Wounds.<br><br>Critical Manifestation: Target suffers 6 Mortal Wounds.",
      wr: {
        effect: "Range: -<br><br>Effect: Target suffers 4 Mortal Wounds.<br><br>Critical Conjuring: Target suffers 6 Mortal Wounds."
      }
    },
    {
      id: "tempest",
      name: "TEMPEST",
      category: "Control",
      points: 0,
      cv: 7,
      effect: "Range: 16\"<br><br>Effect: Target suffers D3 Mortal Wounds; roll a D12 - on 11 or 12, push the target D6\" directly away from the Psyker and it is knocked Prone (loses 1 AP next Activation).<br><br>Critical Manifestation: Same as above, but Target suffers D3+2 Mortal Wounds before the push/Prone check.",
      wr: {
        effect: "Range: 16\"<br><br>Effect: Target suffers D3 Mortal Wounds; roll a D12 - on 11 or 12, push the target D6\" directly away from the Warlock and it is knocked Prone (loses 1 AP next Activation).<br><br>Critical Conjuring: Same as above, but Target suffers D3+2 Mortal Wounds before the push/Prone check."
      }
    },
    {
      id: "graviticMaelstrom",
      name: "GRAVITIC MAELSTROM",
      category: "Control",
      points: 0,
      cv: 9,
      effect: "Range: 12\", 3\" Area of Effect<br><br>Effect: All models inside AoE must roll 7+ on a D12 or be dragged D3\" toward the center and suffer D3 Mortal Wounds.<br><br>Critical Manifestation: Same as above, but Fighters dragged suffer D3+2 Mortal Wounds instead.",
      wr: {
        effect: "Range: 12\", 3\" Area of Effect<br><br>Effect: All models inside AoE must roll 7+ on a D12 or be dragged D3\" toward the center and suffer D3 Mortal Wounds.<br><br>Critical Conjuring: Same as above, but Fighters dragged suffer D3+2 Mortal Wounds instead."
      }
    },
    {
      id: "stolenSight",
      name: "STOLEN SIGHT",
      category: "Control",
      points: 0,
      cv: 7,
      effect: "Range: 12\"<br><br>Effect: Until end of Turn, the target's Shooting attacks suffer Weaken (2); if already Engaged, its Close Combat attacks instead suffer Weaken (1).<br><br>Critical Manifestation: Until end of Turn, the target's Shooting and Close Combat attacks both suffer Weaken (2).",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Target suffers -3 to Shoot until end of Turn; if already Engaged, instead suffers -2 to Fight.<br><br>Critical Conjuring: Target suffers -4 to Shoot, -3 to Fight (both apply) until end of Turn."
      }
    },
    {
      id: "twistOfWill",
      name: "TWIST OF WILL",
      category: "Control",
      points: 0,
      cv: 7,
      effect: "Range: 12\"<br><br>Effect: Target must reroll all successful attack rolls on its next Activation.<br><br>Critical Manifestation: In addition to the above, target also cannot Charge until the start of next Turn.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Target must reroll all successful attack rolls on its next Activation.<br><br>Critical Conjuring: In addition to the above, target also cannot Charge until the start of next Turn."
      }
    },
    {
      id: "circleOfWarding",
      name: "WARP FIELD",
      category: "Buff",
      points: 0,
      cv: 6,
      effect: "Range: 3\" radius circle centered on the Psyker<br><br>Effect: Until end of Turn, Friendly Fighters inside gain +2 DEF (max 5+) and cannot be Charged.<br><br>Critical Manifestation: In addition to the above, the Circle remains until the start of the Psyker's next Activation.",
      wr: {
        name: "CIRCLE OF WARDING",
        effect: "Range: 3\" radius circle centered on the Warlock<br><br>Effect: Until end of Turn, Friendly Fighters inside gain +2 DEF (max 5+) and cannot be Charged.<br><br>Critical Conjuring: In addition to the above, the Circle remains until the start of the Warlock's next Activation."
      }
    },
    {
      id: "mendFlesh",
      name: "MEND FLESH",
      category: "Buff",
      points: 0,
      cv: 6,
      effect: "Range: 12\"<br><br>Effect: Restore 3 HP to a Friendly Fighter.<br><br>Critical Manifestation: Restore 5 HP and remove one Poison/Burning token.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Restore 3 HP to a Friendly Fighter.<br><br>Critical Conjuring: Restore 5 HP and remove one Poison/Fire token."
      }
    },
    {
      id: "arcaneAegis",
      name: "IMMATERIAL SHIELD",
      category: "Buff",
      points: 0,
      cv: 7,
      effect: "Range: 6\"<br><br>Effect: Target gains +2 DEF (max 5+) until the start of next Turn.<br><br>Critical Manifestation: In addition to the above, Target also ignores the first 2 Damage it suffers the next time an attack causes Damage to it.",
      wr: {
        effect: "Range: 6\"<br><br>Effect: Target gains +2 DEF (max 5+) until the start of next Turn.<br><br>Critical Conjuring: In addition to the above, Target also ignores the first 2 Damage it suffers the next time an attack causes Damage to it."
      }
    },
    {
      id: "spectralDecoy",
      name: "SPECTRAL DECOY",
      category: "Buff",
      points: 0,
      cv: 6,
      effect: "Range: Self<br><br>Effect: Until the Psykers next Activation, remove one successful Normal attack die each time the Psyker is attacked.<br><br>Critical Manifestation: In addition to the above, the Psyker may also ignore a second successful attack die once, until its next Activation.",
      wr: {
        effect: "Range: Self<br><br>Effect: Until the Warlocks next Activation, remove one successful Normal attack die each time the Warlock is attacked.<br><br>Critical Conjuring: In addition to the above, the Warlock may also ignore a second successful attack die once, until its next Activation."
      }
    },
    {
      id: "soulflameSurge",
      name: "SOULFLAME SURGE",
      category: "Other",
      points: 0,
      cv: 8,
      effect: "Range: 12\"<br><br>Effect: A Friendly Fighter gains +1 ATK and its Close Combat weapons gain Crits on 9+ until end of Turn.<br><br>Critical Manifestation: Same as above, but affects two Friendly Fighters within 12\" instead of one.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: A Friendly Fighter gains +1 ATK and its Close Combat weapons gain Crits on 9+ until end of Turn.<br><br>Critical Conjuring: Same as above, but affects two Friendly Fighters within 12\" instead of one."
      }
    },
    {
      id: "veilOfShadows",
      name: "VEIL OF SHADOWS",
      category: "Other",
      points: 0,
      cv: 7,
      effect: "Range: Self or Friendly Fighter within 6\"<br><br>Effect: Target becomes Hidden, unlocked from combat (if applicable), and the controlling player may place it up to 3\" away from its current position, and not within 1\" of an Enemy Fighter.<br><br>Critical Manifestation: Same as above, but the Target is placed up to 6\" away instead of 3\"",
      wr: {
        effect: "Range: Self or Friendly Fighter within 6\"<br><br>Effect: Target becomes Hidden, unlocked from combat (if applicable), and the controlling player may place it up to 3\" away from its current position, and not within 1\" of an Enemy Fighter.<br><br>Critical Conjuring: Same as above, but the Target is placed up to 6\" away instead of 3\""
      }
    },
    {
      id: "phantasmalHorror",
      name: "PHANTASMAL HORROR",
      category: "Other",
      points: 0,
      cv: 8,
      effect: "Range: 12\"<br><br>Effect: Target must roll equal to or below its AP × 2 on a D12, or it cannot Charge or Move closer to Fighters in the Psyker's Team this Turn.<br><br>Critical Manifestation: Same as above, but the target must instead roll equal to or below its AP on a D12.",
      wr: {
        effect: "Range: 12\"<br><br>Effect: Target must roll equal to or below its AP × 2 on a D12, or it cannot Charge or Move closer to Fighters in the Warlock's Warband this Turn.<br><br>Critical Conjuring: Same as above, but the target must instead roll equal to or below its AP on a D12."
      }
    },
    {
      id: "siphonLife",
      name: "SIPHON LIFE",
      category: "Other",
      points: 0,
      cv: 7,
      effect: "Range: 8\"<br><br>Effect: Target suffers 3 Mortal Wounds; the Psyker regains the same (to a maximum of its starting HP).<br><br>Critical Manifestation: Target suffers 5 Mortal Wounds; the Psyker regains the same.",
      wr: {
        effect: "Range: 8\"<br><br>Effect: Target suffers 3 Mortal Wounds; the Warlock regains the same (to a maximum of its starting HP).<br><br>Critical Conjuring: Target suffers 5 Mortal Wounds; the Warlock regains the same."
      }
    },
    {
      id: "veilOfSouls",
      name: "VEIL OF SOULS",
      category: "Other",
      points: 0,
      cv: 8,
      effect: "Range: Self<br><br>Effect: Until the Psykers next Activation, the Psyker gains +1 DEF; attacks made by enemies within 3\" suffer Weaken (1).<br><br>Critical Manifestation: Same as above, but the Psyker gains +2 DEF instead; attacks made by enemies within 3\" still suffer Weaken (1).",
      wr: {
        effect: "Range: Self<br><br>Effect: Until the Warlocks next Activation, the Warlock gains +1 DEF and Weaken (1).<br><br>Critical Conjuring: Same as above, but the Warlock gains +2 DEF instead (and still gains Weaken (1))."
      }
    },
    {
      id: "etherealBody",
      name: "ETHEREAL BODY",
      category: "Other",
      points: 0,
      cv: 7,
      effect: "Range: Self<br><br>Effect: The Psyker may move through models and terrain as if they were not there, but cannot end movement within solid objects or within 1\" of Enemy Fighters (unless using a Charge).<br><br>Critical Manifestation: The Psyker also gains +2 DEF until the start of next Turn.",
      wr: {
        effect: "Range: Self<br><br>Effect: The Warlock may move through models and terrain as if they were not there, but cannot end movement within solid objects or within 1\" of Enemy Fighters (unless using a Charge).<br><br>Critical Conjuring: The Warlock also gains +2 DEF until the start of next Turn."
      }
    }
  ];

  var EQUIPMENT = [
    {
      id: "medipackKIT",
      name: "Medipack Kit (+)",
      category: "Utility",
      points: 4,
      effect: "1 AP: Friendly Fighter within 1\" regains 2D3 lost HP.",
      wr: {
        name: "Healing Potions (+)"
      }
    },
    {
      id: "scannerAuspex",
      name: "Scanner/Auspex",
      category: "Offensive",
      points: 4,
      effect: "1 AP: Mark an enemy in LoS. Shooting vs that Fighter gains Reroll (1) until next turn.",
      wr: {
        name: "Spotter Familiar"
      }
    },
    {
      id: "blinkPack",
      name: "Blink Pack/Personal Teleporter (+)",
      category: "Mobility",
      points: "+33% Stat cost",
      dynamicType: "percentStats",
      dynamicFactor: 0.3333333333333333,
      effect: "1 AP: Reposition up to 12\", ignoring terrain/height (Counts as a Move). Then roll D12; on 1–2 suffer D3 MW and may take no further actions this activation.",
      wr: {
        name: "Magical Teleport Artifact (+)"
      }
    },
    {
      id: "flightDevice",
      name: "Jump Pack/Rokkit Pack/Wings",
      category: "Mobility",
      points: "+33% Stat cost",
      dynamicType: "percentStats",
      dynamicFactor: 0.3333333333333333,
      effect: "Gains Jump Move: +3\" Move and may ignore terrain and vertical height when repositioning.",
      wr: {
        name: "Flight/Wings/Aerial Device"
      }
    },
    {
      id: "banner",
      name: "Banner (+)",
      category: "Utility",
      points: 2,
      effect: "Close Combat and Shooting attacks made by friendly Fighters within 3\" gain Boost (1).",
      wr: {
        effect: "Friendly Fighters within 3\" gain Boost (1) on their Close Combat and Shooting attacks."
      }
    },
    {
      id: "demolitions",
      name: "Demolitions (+)",
      category: "Offensive",
      points: 6,
      effect: "Once per game plant an Explosive Device while moving. 1 AP to detonate: ATK 4, Hit 2+, DMG 5/6, Piercing (-2), Blast (2\").",
      wr: {
        name: "Bomb (+)"
      }
    },
    {
      id: "climbingEquipment",
      name: "Climbing Equipment",
      category: "Mobility",
      points: 2,
      effect: "Ignore the first 2\" of vertical repositioning."
    },
    {
      id: "holyRelic",
      name: "Holy Relic (+)",
      category: "Defensive",
      points: 3,
      effect: "User may ignore 1 normal damage attack per game.",
      wr: {
        name: "Ancient Relic (+)"
      }
    },
    {
      id: "camoCloak",
      name: "Camo Cloak",
      category: "Defensive",
      points: 4,
      effect: "While in Cover or Hidden, this Fighter gains Weaken (1). This cannot raise its total Weaken from Cover, Hide and this Cloak above 3.",
      wr: {
        name: "Enchanted Cloak"
      }
    },
    {
      id: "forceField",
      name: "Force Field",
      category: "Defensive",
      points: 5,
      effect: "User gains a 9+ Aegis save.",
      wr: {
        name: "Arcane Shield"
      }
    },
    {
      id: "combatDrugs",
      name: "Combat Drugs",
      category: "Utility",
      points: 6,
      effect: "At start of activation choose: (1) Heal 2D3 HP, (2) gain Reroll (2) on CC attacks this turn, or (3) +2\" Move this turn. One use per Option only.",
      wr: {
        name: "Enhancement Potions"
      }
    },
    {
      id: "mastercraftedForcefield",
      name: "Mastercrafted Force Field (+)",
      category: "Defensive",
      points: 10,
      effect: "User gains a 7+ Aegis save.",
      wr: {
        name: "Rare Arcane Shield (+)"
      }
    },
    {
      id: "suspensorSystem",
      name: "Suspensor System",
      category: "Mobility",
      points: 3,
      effect: "User’s Heavy Weapons gain the “Heavy (Move)” Special Rule.",
      wr: {
        name: "Heavily Muscled"
      }
    },
    {
      id: "reconDrone",
      name: "Recon Drone/Servo Skull",
      category: "Offensive",
      points: 4,
      effect: "1 AP: Mark an enemy Fighter in LoS. Until the end of the Turn, it gains no Weaken from Light Cover or Hide.",
      wr: {
        name: "Arcane Familiar"
      }
    },
    {
      id: "commsEquipment",
      name: "Comms Equipment (+)",
      category: "Utility",
      points: 4,
      effect: "1 AP: Grant a friendly Fighter within 9\" +1 AP this round.",
      wr: {
        name: "War Horn/Instrument (+)"
      }
    },
    {
      id: "shimmerShield",
      name: "Shimmershield (+)",
      category: "Defensive",
      points: 4,
      effect: "User and friendly Fighters within 2\" reduce Piercing of enemy Shooting attacks by 2.",
      wr: {
        name: "Ring of Protection (+)"
      }
    },
    {
      id: "breachingRam",
      name: "Breaching Ram (+)",
      category: "Mobility",
      points: 5,
      effect: "Treat any wall <1\" thick as Accessible Terrain (may move through at cost of 1\" Move)."
    },
    {
      id: "digitalWeapons",
      name: "Digital Weapons (+)",
      category: "Offensive",
      points: 2,
      effect: "At the start of this Fighter’s CC activation, deal 2 MW to the engaged enemy Fighter.",
      wr: {
        name: "Clawed Gloves (+)"
      }
    },
    {
      id: "stormShield",
      name: "Storm Shield (+)",
      category: "Defensive",
      points: 5,
      effect: "User gains a 7+ Aegis save and 4 Defense dice in CC when using this shield. May only have Pistol and/or CC weapons as ranged options.",
      wr: {
        name: "Magical Shield (+)"
      }
    },
    {
      id: "commsJammer",
      name: "Comms Jammer (+)",
      category: "Utility",
      points: 5,
      effect: "1 AP: Select a visible enemy Fighter; that Fighter must be activated last by your opponent this turn.",
      wr: {
        name: "Artifact of Disruption (+)"
      }
    },
    {
      id: "grapplingHookGun",
      name: "Grappling Hook Gun (+)",
      category: "Mobility",
      points: 5,
      effect: "1 AP Move action: Place this Fighter within 1\" of a chosen visible point on terrain, not within 1\" of enemies. This Fighter may not have any Ranged Weapons, and no more than 2 AP and 10 HP."
    },
    {
      id: "macabreMemento",
      name: "Macabre Memento (+)",
      category: "Defensive",
      points: 6,
      effect: "While visible and within 3\" of enemy Fighters, those Fighters reduce the Attack characteristic of their Melee and Ranged weapons by 1."
    },
    {
      id: "commandUplink",
      name: "Command Uplink (+)",
      category: "Utility",
      points: 5,
      effect: "Gain 1 extra FP at the start of the battle.",
      wr: {
        name: "Spotting Telescope (+)"
      }
    },
    {
      id: "blessedAmmunition",
      name: "Blessed / Tainted Ammunition (+)",
      category: "Offensive",
      points: 5,
      effect: "Add +1 to both Damage values of this Fighter’s Ranged weapons. Cannot be used on Heavy Weapons."
    },
    {
      id: "targetingDesignator",
      name: "Targeting Designator (+)",
      category: "Offensive",
      points: 14,
      effect: "Gain an additional Ranged weapon: Cannon Strike – ATK 4, Hit 6+, DMG 3/5, Blast (2\"), Heavy (Dash), may be used while Hidden.",
      wr: {
        name: "Cannons behind the Lines (+)"
      }
    },
    {
      id: "laserSight",
      name: "Laser Sight",
      category: "Offensive",
      points: 3,
      effect: "This Fighter’s Ranged weapons with “Rng X” gain +1\" range (except Flamers and Grenades).",
      wr: {
        name: "Telescopic Sight"
      }
    },
    {
      id: "gravShute",
      name: "Grav Shute/Sliders",
      category: "Mobility",
      points: 3,
      effect: "This Fighter ignores vertical height when dropping down.",
      wr: {
        name: "Rope"
      }
    },
    {
      id: "gorgetProtection",
      name: "Gorget Protection",
      category: "Defensive",
      points: 4,
      effect: "Enemy Fighters can only score Critical Hits on 11+ in CC against this Fighter."
    },
    {
      id: "operationalIntelligence",
      name: "Operational Intelligence",
      category: "Utility",
      points: 4,
      effect: "Once per battle you may reroll the initiative roll. With Random Activation, return the drawn token and pull another.",
      wr: {
        name: "Scouting Intel"
      }
    },
    {
      id: "markerLights",
      name: "Markerlights",
      category: "Offensive",
      points: 5,
      effect: "1 AP action: Place a Markerlight token on an enemy Fighter in this Fighters line of sight. When a Fighter with the Markerlights ability is shooting at a Fighter with Markerlights tokens, its weapons gain Boost (1) Cover (if 1 token) or Boost (2) Cover (if 2 tokens)",
      games: ["mortalis"]
    },
    {
      id: "hyperstaticField",
      name: "Hyperstatic Field",
      category: "Defensive",
      points: 5,
      effect: "Whenever an enemy Fighter moves within 1\", roll 3D12; for each 9+ that enemy suffers 1 MW.",
      wr: {
        name: "Voltaic Suit"
      }
    },
    {
      id: "grenaDier",
      name: "Grenadier",
      category: "Offensive",
      points: 4,
      effect: "This Fighter's attacks with Grenades gain Boost (1).",
      wr: {
        effect: "This Fighter gains Boost (1) when attacking with Grenades."
      }
    },
    {
      id: "mountBike",
      name: "Mount/Bike",
      category: "Mobility",
      points: 12,
      effect: "Fighter gains 12\" move. Cannot move through terrain or scale walls of any kind. Only exception is stairs. The Fighter gains no extra movement from Dash or Charge actions either. Fighter has +1 normal and crit damage when fighting in Close Combat in the same activation as the Fighter charges. The mounted Fighter's Shooting attacks suffer Weaken (1) if it moves more than 8\" in its activation.",
      wr: {
        name: "Mount",
        effect: "Fighter gains 12\" move. Cannot move through terrain or scale walls of any kind. Only exception is stairs. The Fighter gains no extra movement from Dash or Charge actions either. Fighter has +1 normal and crit damage when fighting in Close Combat in the same activation as the Fighter charges. If the mounted Fighter moves more than 8\" in its activation, targets of its Shooting attacks gain Weaken (1)."
      }
    },
    {
      id: "suicideBomber",
      name: "Suicide Bomber",
      category: "Offensive",
      points: 4,
      effect: "The Fighter gains following:  0 AP Action: Roll a D12. On 5+, Every Fighter within 1” of this Fighter suffers D3+2 MW. No matter the result of the dice roll, Remove the Fighter from the Battlefield, although it does not count as Slain for VP purposes or triggering effects and abilities."
    },
    {
      id: "psychicFamiliar",
      name: "Psychic Familiar",
      category: "Utility",
      points: 4,
      effect: "Psyker Only. Increase the Psykers Warp Dice Pool by 1.",
      wr: {
        name: "Sorcerous Familiar",
        effect: "Warlock Only. This Warlock may roll 1 extra Aether Dice when Conjuring or Denying."
      }
    },
    {
      id: "soulboundWeapon",
      name: "Soulbound Weapon",
      category: "Utility",
      points: 3,
      effect: "Psyker Only. Choose one of this Fighters Close Combat Weapons. For each Close Combat action this Psyker makes, if it rolls one or more Crits, add +1 to the Psykers Manifest Rolls for the rest of the game.",
      wr: {
        effect: "Warlock Only. Choose one of this Fighters Close Combat Weapons. For each Close Combat action this Warlock makes, if it rolls one or more Crits, add +1 to the Warlocks Conjuring Results for the rest of the game."
      }
    },
    {
      id: "arcaneScrolls",
      name: "Arcane Scrolls",
      category: "Utility",
      points: 6,
      effect: "Psyker Only. 0 AP: Once per game, if the Psyker fails a Manifestation Action, you can choose to change it into a successful normal Manifestation, counting it as having just met the MV for Deny purposes.",
      wr: {
        effect: "Warlock Only. 0 AP: Once per game, if the Warlock fails a Conjuring Action, you can choose to change it into a successful normal Conjuring, counting it as having just met the CV for Deny purposes."
      }
    }
  ];

  var FEATS = [
    {
      category: "Movement",
      feats: [
        {
          name: "Move like the Wind *",
          plus: true,
          fp: 1,
          text: "<span class=\"orange\">Up to D3 friendly Fighters</span> with the “Fast” ability can immediately <span class=\"orange\">perform a free Dash</span> action in an order of your choice. This Dash, unlike a normal Dash, does not prevent the Fighter from Charging later this Turn. \n  \nYou cannot use this Feat during the first turn.",
          wr: {
            text: "<span class=\"orange\">Up to D3 friendly Fighters</span> with the “Fast” ability can immediately <span class=\"orange\">perform a free Dash</span> action in an order of your choice.\n  \nYou cannot use this Feat during the first turn."
          }
        },
        {
          name: "Adrenaline Rush *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">friendly Fighter is Counteracting.</span>\n  \n  <span class=\"orange\">It can perform an additional 1AP action</span> for free during that counteraction, but both actions must be different.\n  \nCannot be used with “Superhuman Warrior”."
        },
        {
          name: "Like a Blur",
          plus: false,
          fp: 1,
          text: "Whenever an <span class=\"orange\">Enemy Fighter is shooting a friendly Fighter that performed a Reposition action</span> during this turn, you can <span class=\"orange\">re-roll one of your Defence dice.</span>"
        },
        {
          name: "Move! *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">friendly Fighter is activated.</span>\n  \nUntil the end of that Fighter’s activation, <span class=\"orange\">add 1&quot; to its Move stat.</span>"
        },
        {
          name: "Retrieve the Objectives!",
          plus: false,
          fp: 1,
          text: "<span class=\"orange\">Select one Objective Marker.</span>\nWhenever a <span class=\"orange\">friendly Fighter performs a Move or Charge</span> action during its activation, you can use this rule;\n  \nIf you do, <span class=\"orange\">add 1&quot; to its Move stat</span> until the end of that activation, but it must end that Reposition within 2&quot; of the selected Objective Marker."
        }
      ]
    },
    {
      category: "Shooting and Combat",
      feats: [
        {
          name: "Extreme Aggression",
          plus: false,
          fp: 1,
          text: "Whenever a <span class=\"orange\">Friendly Fighter</span> is fighting in Close Combat, <span class=\"orange\">add 1 to the ATK stat</span> of its Close Combat weapons."
        },
        {
          name: "Rampage *",
          plus: true,
          fp: 1,
          text: "Use this Feat after a <span class=\"orange\">friendly Fighter performs the Close Combat action, if it’s no longer within 1&quot; of enemy Fighters.</span>\n  \nThat friendly Fighter can immediately <span class=\"orange\">perform a free Charge</span> action (even if it’s already performed the Charge action during that activation), but <span class=\"orange\">cannot move more than 3&quot;</span> during that action."
        },
        {
          name: "Come at Me...",
          plus: false,
          fp: 1,
          text: "Friendly Fighters in Close Combat gain <span class=\"orange\">Reroll (2)</span> to their <span class=\"orange\">Close Combat weapons.</span>",
          wr: {
            text: "Friendly Fighters in Close Combat gain <span class=\"orange\">Reroll (2)</span> to their <span class=\"orange\">Close Combat weapons.</span>\n  \nIf the weapon already has the Reroll (1) or (2) ability, it gains <span class=\"orange\">Reroll (Any).</span>"
          }
        },
        {
          name: "Sadistic",
          plus: false,
          fp: 1,
          text: "Whenever a Friendly Fighter is shooting against or fighting against a <span class=\"orange\">Wounded Enemy Fighter</span> (eg. A Fighter that has taken 1 or more damage), that friendly Fighter’s weapons have the <span class=\"orange\">Reroll (1)</span> weapon rule."
        },
        {
          name: "Surgical Precision",
          plus: false,
          fp: 1,
          text: "<span class=\"orange\">Friendly Fighters’ Close Combat weapons</span> have the <span class=\"orange\">Reroll (1)</span> weapon rule.",
          wr: {
            name: "Like Clockwork"
          }
        },
        {
          name: "Steady Shot",
          plus: false,
          fp: 1,
          text: "Whenever a Friendly Fighter is shooting during an Activation in which it <span class=\"orange\">hasn’t performed a Reposition</span>, its <span class=\"orange\">Ranged Weapons have the Reroll (1)</span> weapon rule.\n  \nNote that the Fighter is NOT restricted from performing an action that involves a Reposition after performing a Shooting Action."
        },
        {
          name: "Just... Die already! *",
          plus: true,
          fp: 1,
          text: "Use this Feat <span class=\"orange\">after rolling your Attack Dice</span> for a friendly Fighter, if it’s shooting against or fighting in Close Combat against a <span class=\"orange\">Wounded Enemy Fighter.</span>\n(eg. A Fighter that has taken 1 or more damage).\n  \n  <span class=\"orange\">You may reroll ANY of your attack dice</span> for that attack."
        },
        {
          name: "Crossfire *",
          plus: true,
          fp: 1,
          text: "Use this Feat <span class=\"orange\">after rolling your Attack Dice</span> for a friendly Fighter, if it’s shooting an Enemy Fighter that has been the <span class=\"orange\">Target of another Fighters Shooting Action this turn.</span>\n  \nYou may <span class=\"orange\">reroll ANY of your attack dice</span> for that attack."
        },
        {
          name: "Don’t let them have it! *",
          plus: true,
          fp: 1,
          text: "Use this Feat <span class=\"orange\">after rolling your Attack Dice</span> for a Friendly Fighter, if it’s shooting against or fighting in Close Combat against an <span class=\"orange\">Enemy Fighter that controls an objective marker</span> or one of your mission markers.\n  \nYou may <span class=\"orange\">reroll ANY of your Attack Dice</span> for that attack."
        },
        {
          name: "Brute Force *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter attacks in Close Combat, before rolling your Attack Dice.</span>\n  \n<span class=\"orange\">Add 1 to both Dmg stats</span> of that friendly Fighters’ Close Combat weapons and the <span class=\"orange\">MW(2)</span> Special Rule."
        },
        {
          name: "Reactive Shots",
          plus: false,
          fp: 1,
          text: "Whenever a Friendly Fighter is <span class=\"orange\">shooting at a Spent Enemy Fighter</span>, that friendly Fighter’s ranged weapons have the <span class=\"orange\">Reroll (1)</span> weapon rule.",
          wr: {
            text: "Whenever a Friendly Fighter is <span class=\"orange\">shooting at a Spent Enemy Fighter</span>, that friendly Fighter’s ranged weapons have the <span class=\"orange\">Reroll (SR)</span> weapon rule.\n  \nIf the weapon already has that weapon rule, it has the <span class=\"orange\">Reroll (Any)</span> weapon rule."
          }
        },
        {
          name: "Brutal Charge",
          plus: false,
          fp: 1,
          text: "Whenever a Friendly Fighter is activated, <span class=\"orange\">if the first action it performs during that activation is the Charge action</span>, when it ends its Reposition during that action, you may <span class=\"orange\">inflict D3 MW on one enemy Fighter within 1”.</span>"
        },
        {
          name: "No hiding from me...",
          plus: false,
          fp: 1,
          text: "<span class=\"orange\">Enemy Fighters within 8”</span> of your Fighters <span class=\"orange\">does not get -2 to Hit</span> for being in <span class=\"orange\">Cover of Light Terrain.</span>"
        },
        {
          name: "Incredible Aim *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is performing the Shoot action with a Light/Medium/Special ranged</span> weapon, and you are selecting a valid target;\n<span class=\"orange\">Enemy Fighters Locked in Combat are now Valid Targets and are +1 To Hit.</span>"
        },
        {
          name: "Chemical Warfare *",
          plus: true,
          fp: 1,
          text: "Use this Feat during a <span class=\"orange\">Friendly Fighter’s Activation or Counteraction</span>, before or after it performs an action;\n  \nOne <span class=\"orange\">Enemy Fighter within 3&quot;</span> of that Fighter gains a <span class=\"orange\">Poison token.</span>",
          wr: {
            name: "Poisonous Gas *"
          }
        },
        {
          name: "Zealous Charge",
          plus: false,
          fp: 1,
          text: "Whenever a <span class=\"orange\">Friendly Fighter</span> is fighting in Close Combat during an activation in which it <span class=\"orange\">performed the Charge action</span>, its <span class=\"orange\">Close Combat weapons</span> gains the <span class=\"orange\">Crits on 9+</span> weapon rule."
        },
        {
          name: "Target Acquired",
          plus: false,
          fp: 1,
          text: "<span class=\"orange\">Choose an enemy Fighter.</span>\n  \nFor the rest of the turn, <span class=\"orange\">any to hit rolls against it</span>, Close Combat or Shooting attacks, gain <span class=\"orange\">Reroll (1).</span>",
          wr: {
            name: "On it, Boss!",
            text: "<span class=\"orange\">Choose an enemy Fighter.</span>\n  \nFor the rest of the turn, <span class=\"orange\">any to hit rolls against it</span>, Close Combat or Shooting attacks, gain <span class=\"orange\">Reroll (SR).</span>"
          }
        },
        {
          name: "Loud Interference Scrambler",
          plus: false,
          fp: 1,
          text: "Whenever an <span class=\"orange\">Enemy Fighter within 6&quot; of a Friendly Fighter</span> is shooting or fighting in Close Combat, your <span class=\"orange\">opponent cannot re-roll their Attack Dice.</span>",
          wr: {
            name: "Horrible Screech"
          }
        },
        {
          name: "Strike down the coward!",
          plus: false,
          fp: 1,
          text: "Whenever an Enemy Fighter within 1&quot; of a Friendly Fighter makes a <span class=\"orange\">Fall Back action</span>, but before that fighter moves away;\n  \nRoll a d12: <span class=\"orange\">On a 7+, allocate 3+D3 MW</span> to that enemy fighter."
        }
      ]
    },
    {
      category: "Defense",
      feats: [
        {
          name: "Dodge and Weave",
          plus: false,
          fp: 1,
          text: "Whenever a <span class=\"orange\">Friendly Fighter is the Target</span> of a Shooting Action, and <span class=\"orange\">it does not have any benefits from Cover</span>;\n  \nYou may <span class=\"orange\">retain one Defence dice as a normal success</span> without rolling it."
        },
        {
          name: "Protected by Fate *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is the Target</span> of a Shooting or Close Combat action, before the Attack Dice are rolled:\n  \n<span class=\"orange\">Change the Attacker’s Critical Hits to Normal Hits.</span>"
        },
        {
          name: "Protect the Objective!",
          plus: false,
          fp: 1,
          text: "Whenever a <span class=\"orange\">Friendly Fighter within 3&quot; of an objective</span> marker is the Target of a Shooting Action, you can <span class=\"orange\">reroll one of your Defence dice.</span>"
        },
        {
          name: "Take Cover!",
          plus: false,
          fp: 1,
          text: "Whenever a Friendly Fighter that has <span class=\"orange\">Heavy Cover is the Target</span> of a Shooting Action, you can <span class=\"orange\">reroll one of your Defence dice.</span>"
        },
        {
          name: "Combat Medic Stimms*",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is activated and not within 1” of enemy Fighters.</span>\n  \nThat friendly Fighter <span class=\"orange\">regains up to D3+2 lost wounds.</span> You cannot use this Feat for each friendly Fighter more than once pr. battle.",
          wr: {
            name: "Healing Potions*"
          }
        },
        {
          name: "Steadfast",
          plus: false,
          fp: 1,
          text: "Whenever a <span class=\"orange\">Friendly Fighter that has not performed a Reposition Action this Turn</span> is the Target of a Shooting or Close Combat Action;\n  \n<span class=\"orange\">Normal and Critical Dmg of 4 or more inflicts 1 less damage</span> on that friendly Fighter."
        },
        {
          name: "Divine Protection *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is the Target of a Shooting Action</span>, AFTER rolling the Defence Dice;\n  \nYou can <span class=\"orange\">retain one of your Normal successes as a Critical success instead.</span>"
        },
        {
          name: "Tough as Nails *",
          plus: true,
          fp: 1,
          text: "Use this Feat when an <span class=\"orange\">Attack inflicts damage</span> on a Friendly Fighter.\n  \n<span class=\"orange\">Halve the inflicted damage of one Attack dice</span> of your choosing (either Normal or Crit) rounding up, to a minimum of 2."
        }
      ]
    },
    {
      category: "Tactical",
      feats: [
        {
          name: "Neuro Scrambler *",
          plus: true,
          fp: 1,
          text: "Use this Feat during a <span class=\"orange\">Friendly Fighter’s activation</span>, before or after it performs an action.\n  \nSelect one Enemy Fighter visible to and <span class=\"orange\">within 6&quot;</span> of that friendly Fighter.\nUntil the end of turn, <span class=\"orange\">subtract 1 from that Enemy Fighters’ AP stat.</span>",
          wr: {
            name: "Trick of the Mind *"
          }
        },
        {
          name: "Massive Vox Interference * (2 FP)",
          plus: true,
          fp: 2,
          text: "Use this Feat when <span class=\"orange\">your opponent declares which Fighter they Activate.</span>\n  \n<span class=\"orange\">Your opponent cannot activate that Fighter this activation</span>, and must pick another. If there are no other enemy Fighters eligible to be activated, this Feat has no effect.\n  \nThis Feat can only be used <span class=\"orange\">once pr. Game.</span>",
          wr: {
            name: "Decieved and Duped * (2 FP)"
          }
        },
        {
          name: "Tactical Genius *",
          plus: true,
          fp: 1,
          text: "Use this Feat at the start of the Turn, when <span class=\"orange\">rolling off to decide initiative</span> or drawing a token. You can do one of the following:\n  \n  <span class=\"orange\">• Re-roll your dice/Put the token back and redraw.</span>\n  <span class=\"orange\">• Force your opponent to re-roll their dice.</span>"
        }
      ]
    },
    {
      category: "Other",
      feats: [
        {
          name: "Maximum Effort! *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is activated.</span>\nUntil the end of that Fighter’s activation, <span class=\"orange\">add 1 to its AP stat.</span>"
        },
        {
          name: "Final Spite *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Ready Friendly Fighter is Slain.</span>\n  \nBefore it is removed from the Battlefield, it can immediately <span class=\"orange\">perform one Free Action.</span>"
        },
        {
          name: "Terrifying",
          plus: false,
          fp: 1,
          text: "Whenever an Enemy Fighter is <span class=\"orange\">within 1” of Friendly Fighters with HP of 14 or more</span>, any To Hit Rolls of that Enemy Fighter has a -1 modifier."
        },
        {
          name: "Scrapcode Injection *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a Friendly Fighter is the <span class=\"orange\">Target of a Shooting Action</span>, before rolling To Hit.\n  \nThe Shooters <span class=\"orange\">ranged weapons gain the Risky weapon</span> rule until the end of that attack.",
          games: ["mortalis"]
        },
        {
          name: "Expert Teamwork *",
          plus: true,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is activated.</span>\nSelect <span class=\"orange\">one other Ready Friendly Fighter visible to and within 3&quot;</span> of that Fighter. When that first friendly Fighter is Spent, you can <span class=\"orange\">activate that other Friendly Fighter</span> before your Opponent Activates/a new initiative token is drawn.\n  \nWhen that other Friendly Fighter is expended, your opponent then activates as normal."
        },
        {
          name: "Seize the Objectives!",
          plus: false,
          fp: 1,
          text: "If there are <span class=\"orange\">more Friendly Fighters than Enemy Fighters in Proximity to an Objective</span>, the Friendly Fighters count as <span class=\"orange\">Controlling it.</span>\n  \nAlso: Whenever a friendly Fighter is <span class=\"orange\">within 3&quot;</span> of an Objective, <span class=\"orange\">add 1 to the ATK</span> stat of its Close Combat weapons."
        },
        {
          name: "Revenge!",
          plus: false,
          fp: 1,
          text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is Slain</span> by an Enemy Fighter. Until the end of the battle, whenever <span class=\"orange\">that Enemy Fighter is the Target of a Shooting or Close Combat Action</span>, Friendly Fighter's weapons gain the <span class=\"orange\">Reroll (1)</span> weapon rule.\n  \nYou <span class=\"orange\">cannot use this Feat again</span> during the battle until <span class=\"orange\">that Enemy Fighter is Slain.</span>",
          wr: {
            text: "Use this Feat when a <span class=\"orange\">Friendly Fighter is Slain</span> by an Enemy Fighter. Until the end of the battle, whenever <span class=\"orange\">that Enemy Fighter is the Target of a Shooting or Close Combat Action</span>, Friendly Fighter's weapons gain the <span class=\"orange\">Reroll (SR)</span> weapon rule.\n  \nYou <span class=\"orange\">cannot use this Feat again</span> during the battle until <span class=\"orange\">that Enemy Fighter is Slain.</span>"
          }
        }
      ]
    }
  ];

  // ---------- helpers ----------
  function pickGame () {
    var g = null;
    try { g = new URLSearchParams(location.search).get("game"); } catch (e) {}
    if (g === "w&r" || g === "wrath" || g === "wrathandruin") g = "wr";
    if (!GAMES[g]) { try { g = localStorage.getItem("b28_game"); } catch (e) {} }
    if (!GAMES[g]) g = null;
    return g;
  }
  function forGame (rec, game) {
    if (rec.games && rec.games.indexOf(game) === -1) return null;
    var out = {};
    for (var k in rec) if (k !== "games" && k !== "wr" && k !== "mortalis") out[k] = rec[k];
    var ov = rec[game];
    if (ov) for (var k2 in ov) out[k2] = ov[k2];
    return out;
  }
  function list (arr, game) {
    var res = [];
    for (var i = 0; i < arr.length; i++) { var r = forGame(arr[i], game); if (r) res.push(r); }
    return res;
  }
  var chosen = pickGame();
  var B28 = {
    GAMES: GAMES,
    chosen: chosen,              // null until the visitor picks a game
    gameKey: chosen || "mortalis",
    setGame: function (g) {
      if (!GAMES[g]) return;
      try { localStorage.setItem("b28_game", g); } catch (e) {}
      var u = new URL(location.href); u.searchParams.set("game", g); location.href = u.toString();
    },
    lists: function (game) {
      game = game || B28.gameKey;
      var o = { STAT_CONFIG: JSON.parse(JSON.stringify(STAT_CONFIG)) };
      ["CC_WEAPONS","RANGED_WEAPONS","FIGHTER_ABILITIES","LEADER_ABILITIES","SPELLS","EQUIPMENT"].forEach(function (n) { o[n] = list(eval(n), game); });
      o.RANGED_CATEGORIES = JSON.parse(JSON.stringify(GAMES[game].RANGED_CATEGORIES));
      o.FEATS = FEATS.map(function (c) { return { category: c.category, feats: list(c.feats, game) }; });
      return o;
    },
    // Which game does a saved fighter/team belong to? (old files have no "game" field)
    detectGame: function (payload) {
      if (!payload || typeof payload !== "object") return null;
      if (GAMES[payload.game]) return payload.game;
      if (Array.isArray(payload.warband)) return "wr";
      if (Array.isArray(payload.team)) return "mortalis";
      // A whole team/warband export: look at all its fighters
      var fighters = [];
      if (Array.isArray(payload.fighters)) payload.fighters.forEach(function (e) { var d = e && (e.fighterFile || e.data || e); if (d) fighters.push(d.fighter || d); });
      else fighters.push(payload.fighter || payload);
      var score = { mortalis: 0, wr: 0 };
      var LISTS = { ccWeapons: CC_WEAPONS, rangedWeapons: RANGED_WEAPONS, abilities: FIGHTER_ABILITIES,
                    leaderAbilities: LEADER_ABILITIES, spells: SPELLS, equipment: EQUIPMENT };
      fighters.forEach(function (f) {
        if (!f) return;
        Object.keys(LISTS).forEach(function (k) {
          (f[k] || []).forEach(function (it) {
            if (!it) return;
            ["mortalis", "wr"].forEach(function (g) {
              var other = g === "wr" ? "mortalis" : "wr";
              var mine = list(LISTS[k], g).filter(function (x) { return x.id === it.id; })[0];
              var theirs = list(LISTS[k], other).filter(function (x) { return x.id === it.id; })[0];
              if (mine && !theirs) score[g] += 2;                       // item only exists in game g
              else if (mine && theirs && it.name && it.name === mine.name && mine.name !== theirs.name) score[g] += 1; // game-specific name
            });
          });
        });
      });
      if (score.mortalis > score.wr) return "mortalis";
      if (score.wr > score.mortalis) return "wr";
      return null;
    }
  };
  B28.game = GAMES[B28.gameKey];
  B28.T = B28.game.terms;
  B28.asset = function (k) { return B28.game.assets[k]; };
  window.B28 = B28;
  if (document && document.documentElement) {
    document.documentElement.classList.add("game-" + B28.gameKey);
    if (!chosen) document.documentElement.classList.add("game-unchosen");
  }
})();
