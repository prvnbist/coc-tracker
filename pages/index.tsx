import Image, { StaticImageData } from 'next/image'

import { Container, Flex, SimpleGrid, Space, Stack, Tabs, Text, Title } from '@mantine/core'

import { DEFENSES, RESOURCES, STORAGE } from '@/constants'

export default function Home() {
   return (
      <Tabs defaultValue="defenses">
         <Tabs.List>
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
   )
}

const DefenseContent = () => {
   return (
      <Tabs defaultValue="cannon" orientation="vertical">
         <Tabs.List>
            {Object.keys(DEFENSES).map(key => {
               const defense = DEFENSES[key]
               return (
                  <Tabs.Tab key={defense.key} value={defense.key}>
                     {defense.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(DEFENSES).map(key => {
            const defense = DEFENSES[key]

            const townHalls =
               defense?.availabilityAtTownHall
                  ?.map(townHall => {
                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ level, ...(defense?.levels?.[level] ?? {}) }))
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
                        {townHalls.length > 0 &&
                           townHalls?.map(townHall => {
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
   return (
      <Tabs defaultValue="gold_mine" orientation="vertical">
         <Tabs.List>
            {Object.keys(RESOURCES).map(key => {
               const resource = RESOURCES[key]
               return (
                  <Tabs.Tab key={resource.key} value={resource.key}>
                     {resource.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(RESOURCES).map(key => {
            const resource = RESOURCES[key]

            const townHalls =
               resource?.availabilityAtTownHall
                  ?.map(townHall => {
                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ level, ...(resource?.levels?.[level] ?? {}) }))
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
                        {townHalls.length > 0 &&
                           townHalls?.map(townHall => {
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
   return (
      <Tabs defaultValue="gold_storage" orientation="vertical">
         <Tabs.List>
            {Object.keys(STORAGE).map(key => {
               const storage = STORAGE[key]
               return (
                  <Tabs.Tab key={storage.key} value={storage.key}>
                     {storage.title}
                  </Tabs.Tab>
               )
            })}
         </Tabs.List>
         {Object.keys(STORAGE).map(key => {
            const storage = STORAGE[key]

            const townHalls =
               storage?.availabilityAtTownHall
                  ?.map(townHall => {
                     const buildingLevelsPopulated = Array.isArray(townHall.buildingLevels)
                        ? townHall.buildingLevels
                             ?.map(level => ({ level, ...(storage?.levels?.[level] ?? {}) }))
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
                        {townHalls.length > 0 &&
                           townHalls?.map(townHall => {
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

type BuildingLevel = { level: number; image: StaticImageData }

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
         <Flex p="xs">
            <Text fz="md" w="100%" align="center">
               Level {level.level}
            </Text>
         </Flex>
      </Flex>
   )
}
