import type { NextApiRequest, NextApiResponse } from 'next'

const data = {
   tag: '#G0UJLYL0J',
   name: 'Kor Vacc',
   townHallLevel: 8,
   expLevel: 51,
   labels: [],
   troops: [
      {
         name: 'Barbarian',
         level: 5,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Archer',
         level: 4,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Goblin',
         level: 4,
         maxLevel: 9,
         village: 'home',
      },
      {
         name: 'Giant',
         level: 4,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Wall Breaker',
         level: 4,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Balloon',
         level: 4,
         maxLevel: 10,
         village: 'home',
      },
      {
         name: 'Wizard',
         level: 4,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Healer',
         level: 2,
         maxLevel: 8,
         village: 'home',
      },
      {
         name: 'Dragon',
         level: 3,
         maxLevel: 10,
         village: 'home',
      },
      {
         name: 'P.E.K.K.A',
         level: 1,
         maxLevel: 10,
         village: 'home',
      },
      {
         name: 'Minion',
         level: 2,
         maxLevel: 11,
         village: 'home',
      },
      {
         name: 'Hog Rider',
         level: 2,
         maxLevel: 12,
         village: 'home',
      },
      {
         name: 'Valkyrie',
         level: 1,
         maxLevel: 10,
         village: 'home',
      },
      {
         name: 'Super Barbarian',
         level: 1,
         maxLevel: 4,
         village: 'home',
      },
      {
         name: 'Super Archer',
         level: 1,
         maxLevel: 4,
         village: 'home',
      },
      {
         name: 'Super Wall Breaker',
         level: 1,
         maxLevel: 5,
         village: 'home',
      },
      {
         name: 'Super Giant',
         level: 1,
         maxLevel: 3,
         village: 'home',
      },
      {
         name: 'Raged Barbarian',
         level: 6,
         maxLevel: 20,
         village: 'builderBase',
      },
      {
         name: 'Sneaky Archer',
         level: 6,
         maxLevel: 20,
         village: 'builderBase',
      },
      {
         name: 'Beta Minion',
         level: 4,
         maxLevel: 18,
         village: 'builderBase',
      },
      {
         name: 'Boxer Giant',
         level: 6,
         maxLevel: 18,
         village: 'builderBase',
      },
      {
         name: 'Bomber',
         level: 1,
         maxLevel: 16,
         village: 'builderBase',
      },
      {
         name: 'Baby Dragon',
         level: 1,
         maxLevel: 16,
         village: 'builderBase',
      },
      {
         name: 'Sneaky Goblin',
         level: 1,
         maxLevel: 3,
         village: 'home',
      },
      {
         name: 'Rocket Balloon',
         level: 1,
         maxLevel: 3,
         village: 'home',
      },
      {
         name: 'Super Valkyrie',
         level: 1,
         maxLevel: 4,
         village: 'home',
      },
      {
         name: 'Super Dragon',
         level: 1,
         maxLevel: 4,
         village: 'home',
      },
      {
         name: 'Super Wizard',
         level: 1,
         maxLevel: 3,
         village: 'home',
      },
      {
         name: 'Super Minion',
         level: 1,
         maxLevel: 4,
         village: 'home',
      },
      {
         name: 'Super Hog Rider',
         level: 1,
         maxLevel: 3,
         village: 'home',
      },
   ],
   heroes: [
      {
         name: 'Barbarian King',
         level: 6,
         maxLevel: 90,
         village: 'home',
      },
   ],
   spells: [
      {
         name: 'Lightning Spell',
         level: 4,
         maxLevel: 10,
         village: 'home',
      },
      {
         name: 'Healing Spell',
         level: 4,
         maxLevel: 9,
         village: 'home',
      },
      {
         name: 'Rage Spell',
         level: 4,
         maxLevel: 6,
         village: 'home',
      },
      {
         name: 'Poison Spell',
         level: 1,
         maxLevel: 9,
         village: 'home',
      },
   ],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(data)
}
