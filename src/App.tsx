import { Header } from "@/components/header"
import { PoepleList } from "./features/people/people-list"

export function App() {
  return (
    <main className="flex flex-col min-h-svh max-w-screen-2xl mx-auto">
      <Header />
      <PoepleList />
    </main>
  )
}

export default App