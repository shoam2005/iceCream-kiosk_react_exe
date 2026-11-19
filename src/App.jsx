import { useState } from 'react'

import Header from './compponents/Header'
import FlavorCard from './compponents/FlavorCard'
import Massage from './compponents/Message'
import SummaryOrder from './compponents/SummaryOrder'

function App() {
  const [flavors, setflavors] = useState([{ id: 1, name: "banana", isSoldOut: false, scoopsSelected: 0 },
  { id: 2, name: "chocolate", isSoldOut: false, scoopsSelected: 0 },
  { id: 3, name: "bagle", isSoldOut: false, scoopsSelected: 0 },
  { id: 4, name: "karamel", isSoldOut: true, scoopsSelected: 0 },
  { id: 5, name: "vanile", isSoldOut: false, scoopsSelected: 0 }
  ])
  const [scoopLimit, setScoopLimit] = useState(5)
  const [showOnlyAviable, setShowOnlyAviable] = useState(false)
  const [totalScoop, setTotalscoop] = useState(0)


  return (
    <>
      <Header></Header>
      {showOnlyAviable&&<Massage text={"No flavors to show"} type={"red"}></Massage>}
      {totalScoop>=scoopLimit&&<Massage text={"Scoop limit reached"} type={'yellow'}></Massage>}
      {flavors.map((flavor, key) => (<FlavorCard name={flavor.name} scoopsSelected={flavor.scoopsSelected} isSoldOut={flavor.isSoldOut} ></FlavorCard>))}
      <SummaryOrder totalScoops={totalScoop} ></SummaryOrder>
    </>
  )
}

export default App
