import ProductList from '../../components/ProductsLis'
import Game from '../../models/Game'

import resident from '../../assests/images/resident.png'
import diablo from '../../assests/images/diablo.png'
import zelda from '../../assests/images/zelda.png'
import starwars from '../../assests/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de ação e terror em que o protagonista, Leon S. Kennedy, deve resgatar a filha do presidente dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de ação e terror em que o protagonista, Leon S. Kennedy, deve resgatar a filha do presidente dos EUA.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de ação e terror em que o protagonista, Leon S. Kennedy, deve resgatar a filha do presidente dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de ação e terror em que o protagonista, Leon S. Kennedy, deve resgatar a filha do presidente dos EUA.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo é um jogo de ação e RPG onde os jogadores exploram masmorras e enfrentam demônios, ',
    title: 'Diablo',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo é um jogo de ação e RPG onde os jogadores exploram masmorras e enfrentam demônios, ',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo é um jogo de ação e RPG onde os jogadores exploram masmorras e enfrentam demônios, ',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starwars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo é um jogo de ação e RPG onde os jogadores exploram masmorras e enfrentam demônios, ',
    title: 'Resident Evil 4',
    system: 'Nintendo',
    infos: ['17/05'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
