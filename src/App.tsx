import { AppContent } from "./app/components/AppContent"
import { ThemeProvider } from "./features/theme/context/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App