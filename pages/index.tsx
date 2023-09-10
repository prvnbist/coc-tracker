import Image, { StaticImageData } from 'next/image'

import { Container, Flex, Header, SimpleGrid, Space, Stack, Tabs, Text, Title } from '@mantine/core'

import { IconElixir, IconGold } from '@/assets/icons'
import { DEFENSES, RESOURCES, STORAGE } from '@/constants'

import { useGlobalState } from './_app'

export default function Home() {
   const { player = {} } = useGlobalState()
   return (
      <>
         <Header px="md" height={60} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Title order={3}>COC Tracker</Title>
            <Title order={4}>Town Hall {player?.townHallLevel}</Title>
            <Stack spacing={0}>
               <Text fw={500}>{player?.name}</Text>
               <Text fz="xs" c="dimmed">
                  {player?.tag}
               </Text>
            </Stack>
         </Header>
         <Tabs defaultValue="defenses">
            <Tabs.List position="center">
               <Tabs.Tab value="defenses">Defenses</Tabs.Tab>
               <Tabs.Tab value="resources">Resources</Tabs.Tab>
               <Tabs.Tab value="storage">Storage</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="defenses">
               <DefenseContent />
            </Tabs.Panel>
            <Tabs.Panel value="resources">
               <ResourceContent />
            </Tabs.Panel>
            <Tabs.Panel value="storage">
               <StorageContent />
            </Tabs.Panel>
         </Tabs>
      </>
   )
}

const DefenseContent = () => {
   const { player = {} } = useGlobalState()
   return (
      <Tabs defaultValue="cannon">
         <Tabs.List position="center">
            {Object.keys(DEFENSES).map(key => {
               const defense = DEFENSES[key]
               if (player?.townHallLevel <= defense.availableSinceTownHall) return null
               return (
                  <Tabs.Tab key={defense.key} value={defense.key}>
                     {defense.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(DEFENSES).map(key => {
            const defense = DEFENSES[key]
            if (player?.townHallLevel <= defense.availableSinceTownHall) return null

            const townHalls =
               defense?.availabilityAtTownHall
                  ?.map(townHall => {
                     if (townHall.level !== player?.townHallLevel) return null

                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ ...level, ...(defense?.levels?.[level.level] ?? {}) }))
                             .filter(Boolean)
                        : []

                     if (buildingLevelsPopulated.length === 0) return null

                     return { level: townHall.level, buildingLevels: buildingLevelsPopulated }
                  })
                  ?.filter(Boolean) || []

            return (
               <Tabs.Panel key={defense.key} value={defense.key} p="sm">
                  <Space h={24} />
                  <Container maw="720px">
                     <Title size="h2">{defense.title}</Title>
                     <Space h={16} />
                     <Stack spacing="xl">
                        {townHalls.length === 0
                           ? 'No upgrades available in your current townhall'
                           : townHalls?.map(townHall => {
                                return (
                                   <Stack key={townHall?.level}>
                                      <Title size="h4">Townhall {townHall?.level}</Title>
                                      <Cards levels={townHall?.buildingLevels || []} />
                                   </Stack>
                                )
                             })}
                     </Stack>
                  </Container>
               </Tabs.Panel>
            )
         })}
      </Tabs>
   )
}

const ResourceContent = () => {
   const { player = {} } = useGlobalState()
   return (
      <Tabs defaultValue="gold_mine">
         <Tabs.List position="center">
            {Object.keys(RESOURCES).map(key => {
               const resource = RESOURCES[key]
               if (player?.townHallLevel <= resource.availableSinceTownHall) return null
               return (
                  <Tabs.Tab key={resource.key} value={resource.key}>
                     {resource.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(RESOURCES).map(key => {
            const resource = RESOURCES[key]
            if (player?.townHallLevel <= resource.availableSinceTownHall) return null

            const townHalls =
               resource?.availabilityAtTownHall
                  ?.map(townHall => {
                     if (townHall.level !== player?.townHallLevel) return null

                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ ...level, ...(resource?.levels?.[level.level] ?? {}) }))
                             .filter(Boolean)
                        : []

                     if (buildingLevelsPopulated.length === 0) return null

                     return { level: townHall.level, buildingLevels: buildingLevelsPopulated }
                  })
                  ?.filter(Boolean) || []

            return (
               <Tabs.Panel key={resource.key} value={resource.key} p="sm">
                  <Space h={24} />
                  <Container maw="720px">
                     <Title size="h2">{resource.title}</Title>
                     <Space h={16} />
                     <Stack spacing="xl">
                        {townHalls.length === 0
                           ? 'No upgrades available in your current townhall'
                           : townHalls?.map(townHall => {
                                return (
                                   <Stack key={townHall?.level}>
                                      <Title size="h4">Townhall {townHall?.level}</Title>
                                      <Cards levels={townHall?.buildingLevels || []} />
                                   </Stack>
                                )
                             })}
                     </Stack>
                  </Container>
               </Tabs.Panel>
            )
         })}
      </Tabs>
   )
}

const StorageContent = () => {
   const { player = {} } = useGlobalState()

   return (
      <Tabs defaultValue="gold_storage">
         <Tabs.List position="center">
            {Object.keys(STORAGE).map(key => {
               const storage = STORAGE[key]
               if (player?.townHallLevel <= storage.availableSinceTownHall) return null
               return (
                  <Tabs.Tab key={storage.key} value={storage.key}>
                     {storage.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(STORAGE).map(key => {
            const storage = STORAGE[key]
            if (player?.townHallLevel <= storage.availableSinceTownHall) return null

            const townHalls =
               storage?.availabilityAtTownHall
                  ?.map(townHall => {
                     if (townHall.level !== player?.townHallLevel) return null

                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ ...level, ...(storage?.levels?.[level.level] ?? {}) }))
                             .filter(Boolean)
                        : []

                     if (buildingLevelsPopulated.length === 0) return null

                     return { level: townHall.level, buildingLevels: buildingLevelsPopulated }
                  })
                  ?.filter(Boolean) || []

            return (
               <Tabs.Panel key={storage.key} value={storage.key} p="sm">
                  <Space h={24} />
                  <Container maw="720px">
                     <Title size="h2">{storage.title}</Title>
                     <Space h={16} />
                     <Stack spacing="xl">
                        {townHalls.length === 0
                           ? 'No upgrades available in your current townhall'
                           : townHalls?.map(townHall => {
                                return (
                                   <Stack key={townHall?.level}>
                                      <Title size="h4">Townhall {townHall?.level}</Title>
                                      <Cards levels={townHall?.buildingLevels || []} />
                                   </Stack>
                                )
                             })}
                     </Stack>
                  </Container>
               </Tabs.Panel>
            )
         })}
      </Tabs>
   )
}

type BuildingLevel = {
   level: number
   buildCost: number
   currency: 'gold' | 'elixir' | 'dark_elixir'
   image: StaticImageData
}

const Cards = ({ levels = [] }: { levels?: BuildingLevel[] }) => {
   if (levels?.length === 0) return null

   return (
      <SimpleGrid
         cols={4}
         breakpoints={[
            { maxWidth: '62rem', cols: 3, spacing: 'md' },
            { maxWidth: '48rem', cols: 2, spacing: 'sm' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
         ]}
      >
         {levels.map((level, index) => {
            if (!levels) return null

            const label = `Level ${index + 1}`
            return <Card key={index} level={level} label={label} />
         })}
      </SimpleGrid>
   )
}

const Card = ({ level, label }: { level: BuildingLevel; label: string }) => {
   return (
      <Flex
         p={0}
         direction="column"
         sx={theme => ({
            border: `1px solid ${theme.colors.dark[5]}`,
         })}
      >
         <Flex
            h={140}
            align="center"
            justify="center"
            sx={theme => ({
               objectFit: 'cover',
               borderBottom: `1px solid ${theme.colors.dark[5]}`,
            })}
         >
            <Image src={level.image} height={100} alt={label} />
         </Flex>
         <Flex p="xs" direction="column" gap={14}>
            <Text fz="md">Level {level.level}</Text>
            <Flex align="center" gap={8}>
               <Image src={level.currency === 'gold' ? IconGold : IconElixir} height={18} alt="Gold Icon" />
               <Text fz="sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {level.buildCost.toLocaleString('en-US')}
               </Text>
            </Flex>
         </Flex>
      </Flex>
   )
}
