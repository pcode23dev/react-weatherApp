// import { useState } from 'react'
import { AreaPesquisa } from './components/AreaPesquisa'
import { HomeUp } from './components/HomeUp'
import { EstiloGlobal } from './styles/global'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomeUp />
      <AreaPesquisa />
      <EstiloGlobal />
    </>
  )
}