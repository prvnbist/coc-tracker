import Head from 'next/head'
import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { createContext, useContext, useEffect, useReducer } from 'react'

import '@/styles/globals.css'

export type Player = {
   tag: string
   name: string
   townHallLevel: number
   expLevel: number
   trophies: number
   bestTrophies: number
   warStars: number
   attackWins: number
   defenseWins: number
   builderHallLevel: number
   builderBaseTrophies: number
   versusTrophies: number
   bestBuilderBaseTrophies: number
   bestVersusTrophies: number
   versusBattleWins: number
   donations: number
   donationsReceived: number
   clanCapitalContributions: number
   league: League
   builderBaseLeague: BuilderBaseLeague
   achievements: Achievement[]
   labels: any[]
   troops: Troop[]
   heroes: Hero[]
   spells: Spell[]
}

export interface League {
   id: number
   name: string
   iconUrls: IconUrls
}

export interface IconUrls {
   small: string
   tiny: string
   medium: string
}

export interface BuilderBaseLeague {
   id: number
   name: string
}

export interface Achievement {
   name: string
   stars: number
   value: number
   target: number
   info: string
   completionInfo?: string
   village: string
}

export interface Troop {
   name: string
   level: number
   maxLevel: number
   village: string
}

export interface Hero {
   name: string
   level: number
   maxLevel: number
   village: string
}

export interface Spell {
   name: string
   level: number
   maxLevel: number
   village: string
}

const reducers = (
   state: { player: Player | {} },
   {
      type,
      payload,
   }: {
      type: string
      payload: any
   }
) => {
   switch (type) {
      case 'SET_PLAYER':
         return { ...state, player: payload }
   }
}

const Context = createContext<{ player: Player | {} }>({ player: {} })

export const useGlobalState = () => useContext(Context)

export default function App(props: AppProps) {
   const { Component, pageProps } = props

   // @ts-ignore
   const [state, dispatch] = useReducer(reducers, { player: {} })

   useEffect(() => {
      ;(async () => {
         const response = await fetch('/api/player')
         const data = await response.json()

         // @ts-ignore
         dispatch({ type: 'SET_PLAYER', payload: data })
      })()
   }, [])

   return (
      <>
         <Head>
            <title>COC Tracker</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
         </Head>

         <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
               colorScheme: 'dark',
            }}
         >
            <Context.Provider value={{ ...state }}>
               <Component {...pageProps} />
            </Context.Provider>
         </MantineProvider>
      </>
   )
}
