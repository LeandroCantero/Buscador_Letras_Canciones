import AppLetras from "./components/AppLetras.jsx"
import { LetrasProvider } from "./context/LetrasProvider.jsx"

function App() {

  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>

  )
}

export default App
