import { useState } from 'react'

import Header from './compponents/Header'
import FlavorCard from './compponents/FlavorCard'
import Massage from './compponents/Message'
import SummaryOrder from './compponents/SummaryOrder'

function App() {
  const [flavors, setFlavors] = useState([
    { id: 1, name: "banana", isSoldOut: false, scoopsSelected: 0 },
    { id: 2, name: "chocolate", isSoldOut: false, scoopsSelected: 0 },
    { id: 3, name: "bagle", isSoldOut: false, scoopsSelected: 0 },
    { id: 4, name: "karamel", isSoldOut: true, scoopsSelected: 0 },
    { id: 5, name: "vanile", isSoldOut: false, scoopsSelected: 0 }
  ])
  const [scoopLimit, setScoopLimit] = useState(5)
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)

  const totalScoop = flavors.reduce((sum, flavor) => sum + flavor.scoopsSelected, 0)
  const isLimitReached = totalScoop >= scoopLimit

  const visibleFlavors = showOnlyAvailable
    ? flavors.filter((flavor) => !flavor.isSoldOut)
    : flavors

  const handleAddScoop = (id) => {
    if (isLimitReached) return

    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor) => {
        if (flavor.id === id && !flavor.isSoldOut) {
          return { ...flavor, scoopsSelected: flavor.scoopsSelected + 1 }
        }
        return flavor
      })
    )
  }

  const handleRemoveScoop = (id) => {
    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor) => {
        if (flavor.id === id && flavor.scoopsSelected > 0) {
          return { ...flavor, scoopsSelected: flavor.scoopsSelected - 1 }
        }
        return flavor
      })
    )
  }

  return (
    <>
      <Header />

      <label>
        <input
          type="checkbox"
          checked={showOnlyAvailable}
          onChange={(e) => setShowOnlyAvailable(e.target.checked)}
        />
        Show only available
      </label>

      {showOnlyAvailable && visibleFlavors.length === 0 && (
        <Massage text="No flavors to show" type="red" />
      )}

      {isLimitReached && (
        <Massage text="Scoop limit reached" type="yellow" />
      )}
      {visibleFlavors.map((flavor) => (
        <FlavorCard
          key={flavor.id}
          name={flavor.name}
          scoopsSelected={flavor.scoopsSelected}
          isSoldOut={flavor.isSoldOut}
          isLimitReached={isLimitReached}
          onAdd={() => handleAddScoop(flavor.id)}
          onRemove={() => handleRemoveScoop(flavor.id)}
        />
      ))}

      <SummaryOrder totalScoops={totalScoop} priceScoop={7} />
    </>
  )
}

export default App