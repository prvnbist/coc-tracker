import { StaticImageData } from 'next/image'

import { cannons_images, archer_towers_images, mortar_images, air_defense_images } from '@/assets/defenses'

const CannonImages = Object.fromEntries(Object.entries(cannons_images))
const ArcherTowerImages = Object.fromEntries(Object.entries(archer_towers_images))
const MortarImages = Object.fromEntries(Object.entries(mortar_images))
const AirDefenseImages = Object.fromEntries(Object.entries(air_defense_images))

const getLevels = (list: { [k: string]: StaticImageData }) => {
   return Object.keys(list).reduce((acc: Record<number, { image: any }>, curr, index) => {
      acc[index + 1] = { image: list[curr] }
      return acc
   }, {})
}

export type Defense = Record<
   string,
   { key: string; title: string; levels?: Record<number, { image: StaticImageData }> }
>
export const DEFENSES: Defense = {
   cannon: {
      key: 'cannon',
      title: 'Cannon',
      levels: getLevels(CannonImages),
   },
   archer_tower: {
      key: 'archer_tower',
      title: 'Archor Tower',
      levels: getLevels(ArcherTowerImages),
   },
   mortar: {
      key: 'mortar',
      title: 'Mortar',
      levels: getLevels(MortarImages),
   },
   air_defense: {
      key: 'air_defense',
      title: 'Air Defense',
      levels: getLevels(AirDefenseImages),
   },
   wizard_tower: {
      key: 'wizard_tower',
      title: 'Wizard Tower',
   },
   air_sweeper: {
      key: 'air_sweeper',
      title: 'Air Sweeper',
   },
   hidden_tesla: {
      key: 'hidden_tesla',
      title: 'Hidden Tesla',
   },
   bomb_tower: {
      key: 'bomb_tower',
      title: 'Bomb Tower',
   },
   x_bow: {
      key: 'x_bow',
      title: 'X-Bow',
   },
   inferno_tower: {
      key: 'inferno_tower',
      title: 'Inferno Tower',
   },
   eagle_artillery: {
      key: 'eagle_artillery',
      title: 'Eagle Artillery',
   },
   scattershot: {
      key: 'scattershot',
      title: 'Scatter Shot',
   },
   spell_tower: {
      key: 'spell_tower',
      title: 'Spell Tower',
   },
   monolith: {
      key: 'monolith',
      title: 'Monolith',
   },
   giga_tesla: {
      key: 'giga_tesla',
      title: 'Giga Tesla',
   },
   giga_inferno: {
      key: 'giga_inferno',
      title: 'Giga Inferno',
   },
}
export type DefenseKeys = keyof typeof DEFENSES

export type Resource = Record<string, { key: string; title: string }>
export const RESOURCES: Resource = {
   gold_mine: {
      key: 'gold_mine',
      title: 'Gold Mine',
   },
   elixir_collector: {
      key: 'elixir_collector',
      title: 'Elixir Collector',
   },
   dark_elixir_drill: {
      key: 'dark_elixir_drill',
      title: 'Dark Elixir Collector',
   },
}
export type ResourcesKeys = keyof typeof RESOURCES

export type Storage = Record<string, { key: string; title: string }>
export const STORAGE: Storage = {
   gold_storage: {
      key: 'gold_storage',
      title: 'Gold Storage',
   },
   elixir_storage: {
      key: 'elixir_storage',
      title: 'Elixir Storage',
   },
   dark_elixir_storage: {
      key: 'dark_elixir_storage',
      title: 'Dark Elixir Storage',
   },
}

export type StorageKeys = keyof typeof STORAGE
