import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
        >
          <Menu/>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-white">
        <nav className="mt-8 flex flex-col gap-4 p-6">
          <a href="/">Ocorrências</a>
          <a href="/dashboard">Rede Neural</a>
          <a href="/relatorios">Rotas</a>
          <a href="/relatorios">Equipe</a>
          <a href="/relatorios">Atendimento</a>
          <a href="/relatorios">Serviços Adicionais</a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}