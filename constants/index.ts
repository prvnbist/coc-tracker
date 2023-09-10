import { StaticImageData } from 'next/image'

import {
   air_defense_images,
   air_sweeper_images,
   archer_tower_images,
   bomb_tower_images,
   cannon_images,
   eagle_artillery_images,
   giga_tesla_images,
   hidden_tesla_images,
   inferno_tower_images,
   monolith_images,
   mortar_images,
   scattershot_images,
   wizard_tower_images,
   x_bow_images,
} from '@/assets/defenses'
import { dark_elixir_drill_images, elixir_collector_images, gold_mine_images } from '@/assets/resources'
import { dark_elixir_storage_images, gold_storage_images, elixir_storage_images } from '@/assets/storage'

const AirDefenseImages = Object.fromEntries(Object.entries(air_defense_images))
const AirSweeperImages = Object.fromEntries(Object.entries(air_sweeper_images))
const ArcherTowerImages = Object.fromEntries(Object.entries(archer_tower_images))
const BombTowerImages = Object.fromEntries(Object.entries(bomb_tower_images))
const CannonImages = Object.fromEntries(Object.entries(cannon_images))
const EagleArtilleryImages = Object.fromEntries(Object.entries(eagle_artillery_images))
const GigaTeslaImages = Object.fromEntries(Object.entries(giga_tesla_images))
const HiddenTeslaImages = Object.fromEntries(Object.entries(hidden_tesla_images))
const InfernoTowerImages = Object.fromEntries(Object.entries(inferno_tower_images))
const MortarImages = Object.fromEntries(Object.entries(mortar_images))
const MonolithImages = Object.fromEntries(Object.entries(monolith_images))
const WizardTowerImages = Object.fromEntries(Object.entries(wizard_tower_images))
const ScattershotImages = Object.fromEntries(Object.entries(scattershot_images))
const XBowImages = Object.fromEntries(Object.entries(x_bow_images))

const DarkElixirDrillImages = Object.fromEntries(Object.entries(dark_elixir_drill_images))
const ElixirCollectorImages = Object.fromEntries(Object.entries(elixir_collector_images))
const GoldMineImages = Object.fromEntries(Object.entries(gold_mine_images))

const DarkElixirStorageImages = Object.fromEntries(Object.entries(dark_elixir_storage_images))
const ElixirStorageImages = Object.fromEntries(Object.entries(elixir_storage_images))
const GoldStorageImages = Object.fromEntries(Object.entries(gold_storage_images))

const getLevels = (list: { [k: string]: StaticImageData }) => {
   return Object.keys(list).reduce((acc: Record<number, { image: StaticImageData }>, curr, index) => {
      acc[index + 1] = { image: list[curr] }
      return acc
   }, {})
}

type BuildingLevel = { level: number; buildCost: number; currency: 'gold' | 'elixir' | 'dark_elixir' }

type AvailabilityAtTownHall = {
   level: number
   buildingLevels: BuildingLevel[]
}

export type Defense = Record<
   string,
   {
      key: string
      title: string
      availableSinceTownHall: number
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: AvailabilityAtTownHall[]
   }
>
export const DEFENSES: Defense = {
   cannon: {
      key: 'cannon',
      title: 'Cannon',
      availableSinceTownHall: 1,
      levels: getLevels(CannonImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [
               { level: 1, buildCost: 250, currency: 'gold' },
               { level: 2, buildCost: 1_000, currency: 'gold' },
            ],
         },
         {
            level: 2,
            buildingLevels: [{ level: 3, buildCost: 4_000, currency: 'gold' }],
         },
         {
            level: 3,
            buildingLevels: [{ level: 4, buildCost: 16_000, currency: 'gold' }],
         },
         {
            level: 4,
            buildingLevels: [{ level: 5, buildCost: 50_000, currency: 'gold' }],
         },
         {
            level: 5,
            buildingLevels: [{ level: 6, buildCost: 100_000, currency: 'gold' }],
         },
         {
            level: 6,
            buildingLevels: [{ level: 7, buildCost: 200_000, currency: 'gold' }],
         },
         {
            level: 7,
            buildingLevels: [{ level: 8, buildCost: 300_000, currency: 'gold' }],
         },
         {
            level: 8,
            buildingLevels: [
               { level: 9, buildCost: 500_000, currency: 'gold' },
               { level: 10, buildCost: 700_000, currency: 'gold' },
            ],
         },
         {
            level: 9,
            buildingLevels: [{ level: 11, buildCost: 1_000_000, currency: 'gold' }],
         },
         {
            level: 10,
            buildingLevels: [
               { level: 12, buildCost: 1_200_000, currency: 'gold' },
               { level: 13, buildCost: 1_700_000, currency: 'gold' },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               { level: 14, buildCost: 2_100_000, currency: 'gold' },
               { level: 15, buildCost: 3_200_000, currency: 'gold' },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               { level: 16, buildCost: 4_400_000, currency: 'gold' },
               { level: 17, buildCost: 5_600_000, currency: 'gold' },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               { level: 18, buildCost: 6_500_000, currency: 'gold' },
               { level: 19, buildCost: 7_00_000, currency: 'gold' },
            ],
         },
         {
            level: 14,
            buildingLevels: [{ level: 20, buildCost: 16_500_000, currency: 'gold' }],
         },
         {
            level: 15,
            buildingLevels: [{ level: 21, buildCost: 18_000_000, currency: 'gold' }],
         },
      ],
   },
   archer_tower: {
      key: 'archer_tower',
      title: 'Archor Tower',
      availableSinceTownHall: 1,
      levels: getLevels(ArcherTowerImages),
      availabilityAtTownHall: [
         {
            level: 2,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 3,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 16,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 17,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 18,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 19,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 20,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 21,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   mortar: {
      key: 'mortar',
      title: 'Mortar',
      availableSinceTownHall: 3,
      levels: getLevels(MortarImages),
      availabilityAtTownHall: [
         {
            level: 3,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   air_defense: {
      key: 'air_defense',
      title: 'Air Defense',
      availableSinceTownHall: 4,
      levels: getLevels(AirDefenseImages),
      availabilityAtTownHall: [
         {
            level: 4,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   wizard_tower: {
      key: 'wizard_tower',
      title: 'Wizard Tower',
      availableSinceTownHall: 5,
      levels: getLevels(WizardTowerImages),
      availabilityAtTownHall: [
         {
            level: 5,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   air_sweeper: {
      key: 'air_sweeper',
      title: 'Air Sweeper',
      availableSinceTownHall: 6,
      levels: getLevels(AirSweeperImages),
      availabilityAtTownHall: [
         {
            level: 6,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   hidden_tesla: {
      key: 'hidden_tesla',
      title: 'Hidden Tesla',
      availableSinceTownHall: 7,
      levels: getLevels(HiddenTeslaImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   bomb_tower: {
      key: 'bomb_tower',
      title: 'Bomb Tower',
      availableSinceTownHall: 8,
      levels: getLevels(BombTowerImages),
      availabilityAtTownHall: [
         {
            level: 8,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   x_bow: {
      key: 'x_bow',
      title: 'X-Bow',
      availableSinceTownHall: 9,
      levels: getLevels(XBowImages),
      availabilityAtTownHall: [
         {
            level: 9,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   inferno_tower: {
      key: 'inferno_tower',
      title: 'Inferno Tower',
      availableSinceTownHall: 10,
      levels: getLevels(InfernoTowerImages),
      availabilityAtTownHall: [
         {
            level: 10,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   eagle_artillery: {
      key: 'eagle_artillery',
      title: 'Eagle Artillery',
      availableSinceTownHall: 11,
      levels: getLevels(EagleArtilleryImages),
      availabilityAtTownHall: [
         {
            level: 11,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   scattershot: {
      key: 'scattershot',
      title: 'Scatter Shot',
      availableSinceTownHall: 13,
      levels: getLevels(ScattershotImages),
      availabilityAtTownHall: [
         {
            level: 13,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   monolith: {
      key: 'monolith',
      title: 'Monolith',
      availableSinceTownHall: 15,
      levels: getLevels(MonolithImages),
      availabilityAtTownHall: [
         {
            level: 15,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   giga_tesla: {
      key: 'giga_tesla',
      title: 'Giga Tesla',
      availableSinceTownHall: 12,
      levels: getLevels(GigaTeslaImages),
      availabilityAtTownHall: [
         {
            level: 15,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
}
export type DefenseKeys = keyof typeof DEFENSES

export type Resource = Record<
   string,
   {
      key: string
      title: string
      availableSinceTownHall: number
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: AvailabilityAtTownHall[]
   }
>
export const RESOURCES: Resource = {
   gold_mine: {
      key: 'gold_mine',
      title: 'Gold Mine',
      availableSinceTownHall: 1,
      levels: getLevels(GoldMineImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 2,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 3,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
      ],
   },
   elixir_collector: {
      key: 'elixir_collector',
      title: 'Elixir Collector',
      availableSinceTownHall: 1,
      levels: getLevels(ElixirCollectorImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 2,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 3,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   dark_elixir_drill: {
      key: 'dark_elixir_drill',
      title: 'Dark Elixir Drill',
      availableSinceTownHall: 7,
      levels: getLevels(DarkElixirDrillImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 10,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
      ],
   },
}
export type ResourcesKeys = keyof typeof RESOURCES

export type Storage = Record<
   string,
   {
      key: string
      title: string
      availableSinceTownHall: number
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: AvailabilityAtTownHall[]
   }
>
export const STORAGE: Storage = {
   gold_storage: {
      key: 'gold_storage',
      title: 'Gold Storage',
      availableSinceTownHall: 1,
      levels: getLevels(GoldStorageImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 2,
            buildingLevels: [
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 3,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'elixir',
               },
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 16,
                  buildCost: 0,
                  currency: 'elixir',
               },
            ],
         },
      ],
   },
   elixir_storage: {
      key: 'elixir_storage',
      title: 'Elixir Storage',
      availableSinceTownHall: 1,
      levels: getLevels(ElixirStorageImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 2,
            buildingLevels: [
               {
                  level: 2,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 3,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 3,
            buildingLevels: [
               {
                  level: 4,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 5,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 6,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 4,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 0,
                  currency: 'gold',
               },
               {
                  level: 8,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 5,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 6,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 7,
            buildingLevels: [
               {
                  level: 11,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 11,
            buildingLevels: [
               {
                  level: 12,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 13,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 14,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 15,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 16,
                  buildCost: 0,
                  currency: 'gold',
               },
            ],
         },
      ],
   },
   dark_elixir_storage: {
      key: 'dark_elixir_storage',
      title: 'Dark Elixir Storage',
      availableSinceTownHall: 7,
      levels: getLevels(DarkElixirStorageImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [
               {
                  level: 1,
                  buildCost: 250_000,
                  currency: 'elixir',
               },
               {
                  level: 2,
                  buildCost: 500_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 8,
            buildingLevels: [
               {
                  level: 3,
                  buildCost: 1_000_000,
                  currency: 'elixir',
               },
               {
                  level: 4,
                  buildCost: 1_500_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 9,
            buildingLevels: [
               {
                  level: 5,
                  buildCost: 2_000_000,
                  currency: 'elixir',
               },
               {
                  level: 6,
                  buildCost: 3_000_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 12,
            buildingLevels: [
               {
                  level: 7,
                  buildCost: 3_800_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 13,
            buildingLevels: [
               {
                  level: 8,
                  buildCost: 5_400_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 14,
            buildingLevels: [
               {
                  level: 9,
                  buildCost: 11_500_000,
                  currency: 'elixir',
               },
            ],
         },
         {
            level: 15,
            buildingLevels: [
               {
                  level: 10,
                  buildCost: 12_500_000,
                  currency: 'elixir',
               },
            ],
         },
      ],
   },
}

export type StorageKeys = keyof typeof STORAGE
