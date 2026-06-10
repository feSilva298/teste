import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  } from "./ui/navigation-menu"

export default function Navbar() {
    return(
        <>
        <div className="flex h-25 w-screen items-center justify-around border-2 bg-white">
            <h1>ZENO</h1>
            <p className=" font-extrabold">|</p>
           <NavigationMenu>
          <NavigationMenuList className="flex gap-30">
            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Ocorrências</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Rede Neural</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Rotas</p> 
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Equipe</p> 
              </NavigationMenuLink>
                </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Atendimento</p>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <p className="text-2xl font-semibold hover:scale-105 duration-200">Serviços Adicionais</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
            </div>
        </>
    )
}