import Chicken from "./firstComponent"

function App() {
  const name = 'rachit';
  return (
    <>
      <h1>Vite react app</h1>
      <p>created npm using create vite@latest command by {name}</p>
      <Chicken />
    </>
  )
}

export default App