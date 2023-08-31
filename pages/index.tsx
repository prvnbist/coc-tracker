import Image from 'next/image'

import { Container, Flex, SimpleGrid, Space, Tabs, Text, Title } from '@mantine/core'

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
            return (
               <Tabs.Panel key={defense.key} value={defense.key} p="sm">
                  <Space h={24} />
                  <Container maw="720px">
                     <Title size="h2">{defense.title}</Title>
                     <Space h={16} />
                     <Cards levels={defense?.levels} title={defense.title} />
                  </Container>
               </Tabs.Panel>
            )
         })}
      </Tabs>
   )
}

const Cards = ({ levels, title }: { levels?: Record<number, { image: any }>; title: string }) => {
   if (!levels) return null
   return (
      <SimpleGrid
         cols={4}
         breakpoints={[
            { maxWidth: '62rem', cols: 3, spacing: 'md' },
            { maxWidth: '48rem', cols: 2, spacing: 'sm' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
         ]}
      >
         {Object.keys(levels).map((_key: any) => {
            if (!levels) return null

            const level = levels[_key]
            const label = `${title} ${_key}`
            return <Card key={_key} level={level} label={label} />
         })}
      </SimpleGrid>
   )
}

const Card = ({ level, label }: { level: Record<string, any>; label: string }) => {
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
            <Image src={level.image} alt={label} />
         </Flex>
         <Flex p="xs">
            <Text fz="md" w="100%" align="center">
               {label}
            </Text>
         </Flex>
      </Flex>
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
            return (
               <Tabs.Panel key={resource.key} value={resource.key} pt="xs">
                  {resource.title}
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
            return (
               <Tabs.Panel key={storage.key} value={storage.key} pt="xs">
                  {storage.title}
               </Tabs.Panel>
            )
         })}
      </Tabs>
   )
}
