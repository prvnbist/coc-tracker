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

export type Defense = Record<
   string,
   {
      key: string
      title: string
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: Array<{ level: number; buildingLevels: number[] }>
   }
>
export const DEFENSES: Defense = {
   cannon: {
      key: 'cannon',
      title: 'Cannon',
      levels: getLevels(CannonImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [1, 2],
         },
         {
            level: 2,
            buildingLevels: [3],
         },
         {
            level: 3,
            buildingLevels: [4],
         },
         {
            level: 4,
            buildingLevels: [5],
         },
         {
            level: 5,
            buildingLevels: [6],
         },
         {
            level: 6,
            buildingLevels: [7],
         },
         {
            level: 7,
            buildingLevels: [8],
         },
         {
            level: 8,
            buildingLevels: [9, 10],
         },
         {
            level: 9,
            buildingLevels: [11],
         },
         {
            level: 10,
            buildingLevels: [12, 13],
         },
         {
            level: 11,
            buildingLevels: [14, 15],
         },
         {
            level: 12,
            buildingLevels: [16, 17],
         },
         {
            level: 13,
            buildingLevels: [18, 19],
         },
         {
            level: 14,
            buildingLevels: [20],
         },
         {
            level: 15,
            buildingLevels: [21],
         },
      ],
   },
   archer_tower: {
      key: 'archer_tower',
      title: 'Archor Tower',
      levels: getLevels(ArcherTowerImages),
      availabilityAtTownHall: [
         {
            level: 2,
            buildingLevels: [1, 2],
         },
         {
            level: 3,
            buildingLevels: [3],
         },
         {
            level: 4,
            buildingLevels: [4],
         },
         {
            level: 5,
            buildingLevels: [5, 6],
         },
         {
            level: 6,
            buildingLevels: [7],
         },
         {
            level: 7,
            buildingLevels: [8],
         },
         {
            level: 8,
            buildingLevels: [9, 10],
         },
         {
            level: 9,
            buildingLevels: [11],
         },
         {
            level: 10,
            buildingLevels: [12, 13],
         },
         {
            level: 11,
            buildingLevels: [14, 15],
         },
         {
            level: 12,
            buildingLevels: [16, 17],
         },
         {
            level: 13,
            buildingLevels: [18, 19],
         },
         {
            level: 14,
            buildingLevels: [20],
         },
         {
            level: 15,
            buildingLevels: [21],
         },
      ],
   },
   mortar: {
      key: 'mortar',
      title: 'Mortar',
      levels: getLevels(MortarImages),
      availabilityAtTownHall: [
         {
            level: 3,
            buildingLevels: [1],
         },
         {
            level: 4,
            buildingLevels: [2],
         },
         {
            level: 5,
            buildingLevels: [3],
         },
         {
            level: 6,
            buildingLevels: [4],
         },
         {
            level: 7,
            buildingLevels: [5],
         },
         {
            level: 8,
            buildingLevels: [6],
         },
         {
            level: 9,
            buildingLevels: [7],
         },
         {
            level: 10,
            buildingLevels: [8],
         },
         {
            level: 11,
            buildingLevels: [9, 10],
         },
         {
            level: 12,
            buildingLevels: [11, 12],
         },
         {
            level: 13,
            buildingLevels: [13],
         },
         {
            level: 14,
            buildingLevels: [14],
         },
         {
            level: 15,
            buildingLevels: [15],
         },
      ],
   },
   air_defense: {
      key: 'air_defense',
      title: 'Air Defense',
      levels: getLevels(AirDefenseImages),
      availabilityAtTownHall: [
         {
            level: 4,
            buildingLevels: [1, 2],
         },
         {
            level: 5,
            buildingLevels: [3],
         },
         {
            level: 6,
            buildingLevels: [4],
         },
         {
            level: 7,
            buildingLevels: [5],
         },
         {
            level: 8,
            buildingLevels: [6],
         },
         {
            level: 9,
            buildingLevels: [7],
         },
         {
            level: 10,
            buildingLevels: [8],
         },
         {
            level: 11,
            buildingLevels: [9],
         },
         {
            level: 12,
            buildingLevels: [10],
         },
         {
            level: 13,
            buildingLevels: [11],
         },
         {
            level: 14,
            buildingLevels: [12],
         },
         {
            level: 15,
            buildingLevels: [13],
         },
      ],
   },
   wizard_tower: {
      key: 'wizard_tower',
      title: 'Wizard Tower',
      levels: getLevels(WizardTowerImages),
      availabilityAtTownHall: [
         {
            level: 5,
            buildingLevels: [1, 2],
         },
         {
            level: 6,
            buildingLevels: [3],
         },
         {
            level: 7,
            buildingLevels: [4],
         },
         {
            level: 8,
            buildingLevels: [5, 6],
         },
         {
            level: 9,
            buildingLevels: [7],
         },
         {
            level: 10,
            buildingLevels: [8, 9],
         },
         {
            level: 11,
            buildingLevels: [10],
         },
         {
            level: 12,
            buildingLevels: [11],
         },
         {
            level: 13,
            buildingLevels: [12, 13],
         },
         {
            level: 14,
            buildingLevels: [14],
         },
         {
            level: 15,
            buildingLevels: [15],
         },
      ],
   },
   air_sweeper: {
      key: 'air_sweeper',
      title: 'Air Sweeper',
      levels: getLevels(AirSweeperImages),
      availabilityAtTownHall: [
         {
            level: 6,
            buildingLevels: [1, 2],
         },
         {
            level: 7,
            buildingLevels: [3],
         },
         {
            level: 8,
            buildingLevels: [4],
         },
         {
            level: 9,
            buildingLevels: [5],
         },
         {
            level: 10,
            buildingLevels: [6],
         },
         {
            level: 11,
            buildingLevels: [7],
         },
      ],
   },
   hidden_tesla: {
      key: 'hidden_tesla',
      title: 'Hidden Tesla',
      levels: getLevels(HiddenTeslaImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [1, 2, 3],
         },
         {
            level: 8,
            buildingLevels: [4, 5, 6],
         },
         {
            level: 9,
            buildingLevels: [7],
         },
         {
            level: 10,
            buildingLevels: [8],
         },
         {
            level: 11,
            buildingLevels: [9],
         },
         {
            level: 12,
            buildingLevels: [10],
         },
         {
            level: 13,
            buildingLevels: [11, 12],
         },
         {
            level: 14,
            buildingLevels: [13],
         },
         {
            level: 15,
            buildingLevels: [14],
         },
      ],
   },
   bomb_tower: {
      key: 'bomb_tower',
      title: 'Bomb Tower',
      levels: getLevels(BombTowerImages),
      availabilityAtTownHall: [
         {
            level: 8,
            buildingLevels: [1, 2],
         },
         {
            level: 9,
            buildingLevels: [3],
         },
         {
            level: 10,
            buildingLevels: [4],
         },
         {
            level: 11,
            buildingLevels: [5, 6],
         },
         {
            level: 12,
            buildingLevels: [7],
         },
         {
            level: 13,
            buildingLevels: [8],
         },
         {
            level: 14,
            buildingLevels: [9],
         },
         {
            level: 15,
            buildingLevels: [10],
         },
      ],
   },
   x_bow: {
      key: 'x_bow',
      title: 'X-Bow',
      levels: getLevels(XBowImages),
      availabilityAtTownHall: [
         {
            level: 9,
            buildingLevels: [1, 2, 3],
         },
         {
            level: 10,
            buildingLevels: [4],
         },
         {
            level: 11,
            buildingLevels: [5],
         },
         {
            level: 12,
            buildingLevels: [6],
         },
         {
            level: 13,
            buildingLevels: [7, 8],
         },
         {
            level: 14,
            buildingLevels: [9],
         },
         {
            level: 15,
            buildingLevels: [10],
         },
      ],
   },
   inferno_tower: {
      key: 'inferno_tower',
      title: 'Inferno Tower',
      levels: getLevels(InfernoTowerImages),
      availabilityAtTownHall: [
         {
            level: 10,
            buildingLevels: [1, 2, 3],
         },
         {
            level: 11,
            buildingLevels: [4, 5],
         },
         {
            level: 12,
            buildingLevels: [6],
         },
         {
            level: 13,
            buildingLevels: [7],
         },
         {
            level: 14,
            buildingLevels: [8],
         },
         {
            level: 15,
            buildingLevels: [9],
         },
      ],
   },
   eagle_artillery: {
      key: 'eagle_artillery',
      title: 'Eagle Artillery',
      levels: getLevels(EagleArtilleryImages),
      availabilityAtTownHall: [
         {
            level: 11,
            buildingLevels: [1, 2],
         },
         {
            level: 12,
            buildingLevels: [3],
         },
         {
            level: 13,
            buildingLevels: [4],
         },
         {
            level: 14,
            buildingLevels: [5],
         },
         {
            level: 15,
            buildingLevels: [6],
         },
      ],
   },
   scattershot: {
      key: 'scattershot',
      title: 'Scatter Shot',
      levels: getLevels(ScattershotImages),
      availabilityAtTownHall: [
         {
            level: 13,
            buildingLevels: [1, 2],
         },
         {
            level: 14,
            buildingLevels: [3],
         },
         {
            level: 15,
            buildingLevels: [4],
         },
      ],
   },
   monolith: {
      key: 'monolith',
      title: 'Monolith',
      levels: getLevels(MonolithImages),
      availabilityAtTownHall: [
         {
            level: 15,
            buildingLevels: [1, 2],
         },
      ],
   },
   giga_tesla: {
      key: 'giga_tesla',
      title: 'Giga Tesla',
      levels: getLevels(GigaTeslaImages),
      availabilityAtTownHall: [
         {
            level: 15,
            buildingLevels: [1, 2, 3, 4, 5],
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
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: Array<{ level: number; buildingLevels: number[] }>
   }
>
export const RESOURCES: Resource = {
   gold_mine: {
      key: 'gold_mine',
      title: 'Gold Mine',
      levels: getLevels(GoldMineImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [1, 2],
         },
         {
            level: 2,
            buildingLevels: [3, 4],
         },
         {
            level: 3,
            buildingLevels: [5, 6],
         },
         {
            level: 4,
            buildingLevels: [7, 8],
         },
         {
            level: 5,
            buildingLevels: [9, 10],
         },
         {
            level: 7,
            buildingLevels: [11],
         },
         {
            level: 8,
            buildingLevels: [12],
         },
         {
            level: 10,
            buildingLevels: [13],
         },
         {
            level: 11,
            buildingLevels: [14],
         },
         {
            level: 12,
            buildingLevels: [15],
         },
      ],
   },
   elixir_collector: {
      key: 'elixir_collector',
      title: 'Elixir Collector',
      levels: getLevels(ElixirCollectorImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [1, 2],
         },
         {
            level: 2,
            buildingLevels: [3, 4],
         },
         {
            level: 3,
            buildingLevels: [5, 6],
         },
         {
            level: 4,
            buildingLevels: [7, 8],
         },
         {
            level: 5,
            buildingLevels: [9, 10],
         },
         {
            level: 7,
            buildingLevels: [11],
         },
         {
            level: 8,
            buildingLevels: [12],
         },
         {
            level: 10,
            buildingLevels: [13],
         },
         {
            level: 11,
            buildingLevels: [14],
         },
         {
            level: 12,
            buildingLevels: [15],
         },
      ],
   },
   dark_elixir_drill: {
      key: 'dark_elixir_drill',
      title: 'Dark Elixir Collector',
      levels: getLevels(DarkElixirDrillImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [1, 2, 3],
         },
         {
            level: 9,
            buildingLevels: [4, 5, 6],
         },
         {
            level: 10,
            buildingLevels: [7],
         },
         {
            level: 11,
            buildingLevels: [8],
         },
         {
            level: 12,
            buildingLevels: [9],
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
      levels: Record<number, { image: StaticImageData }>
      availabilityAtTownHall: Array<{ level: number; buildingLevels: number[] }>
   }
>
export const STORAGE: Storage = {
   gold_storage: {
      key: 'gold_storage',
      title: 'Gold Storage',
      levels: getLevels(GoldStorageImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [1],
         },
         {
            level: 2,
            buildingLevels: [2, 3],
         },
         {
            level: 3,
            buildingLevels: [4, 5, 6],
         },
         {
            level: 4,
            buildingLevels: [7, 8],
         },
         {
            level: 5,
            buildingLevels: [9],
         },
         {
            level: 6,
            buildingLevels: [10],
         },
         {
            level: 7,
            buildingLevels: [11],
         },
         {
            level: 11,
            buildingLevels: [12],
         },
         {
            level: 12,
            buildingLevels: [13],
         },
         {
            level: 13,
            buildingLevels: [14],
         },
         {
            level: 14,
            buildingLevels: [15],
         },
         {
            level: 15,
            buildingLevels: [16],
         },
      ],
   },
   elixir_storage: {
      key: 'elixir_storage',
      title: 'Elixir Storage',
      levels: getLevels(ElixirStorageImages),
      availabilityAtTownHall: [
         {
            level: 1,
            buildingLevels: [1],
         },
         {
            level: 2,
            buildingLevels: [2, 3],
         },
         {
            level: 3,
            buildingLevels: [4, 5, 6],
         },
         {
            level: 4,
            buildingLevels: [7, 8],
         },
         {
            level: 5,
            buildingLevels: [9],
         },
         {
            level: 6,
            buildingLevels: [10],
         },
         {
            level: 7,
            buildingLevels: [11],
         },
         {
            level: 11,
            buildingLevels: [12],
         },
         {
            level: 12,
            buildingLevels: [13],
         },
         {
            level: 13,
            buildingLevels: [14],
         },
         {
            level: 14,
            buildingLevels: [15],
         },
         {
            level: 15,
            buildingLevels: [16],
         },
      ],
   },
   dark_elixir_storage: {
      key: 'dark_elixir_storage',
      title: 'Dark Elixir Storage',
      levels: getLevels(DarkElixirStorageImages),
      availabilityAtTownHall: [
         {
            level: 7,
            buildingLevels: [1, 2],
         },
         {
            level: 8,
            buildingLevels: [3, 4],
         },
         {
            level: 9,
            buildingLevels: [5, 6],
         },
         {
            level: 12,
            buildingLevels: [7],
         },
         {
            level: 13,
            buildingLevels: [8],
         },
         {
            level: 14,
            buildingLevels: [9],
         },
         {
            level: 15,
            buildingLevels: [10],
         },
      ],
   },
}

export type StorageKeys = keyof typeof STORAGE
