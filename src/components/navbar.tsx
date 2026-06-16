import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  } from "./ui/navigation-menu"
import zeno from "@/assets/Zeno.png"

import { MobileMenu } from "./mobileMenu"

import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>

        <div className="flex h-20 md:h-30 w-full items-center justify-around border-2 bg-linear-to-r from-red-300 to-orange-300">
              <Link to="/"><img src={zeno} className="h-40 w-40 mt-4 md:h-70 md:w-70"></img></Link>
            <p className="hidden md:block font-extrabold">|</p>

           <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="flex gap-4 lg:gap-12 xl:gap-20">                         
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Ocorrencias" className="text-2xl font-semibold hover:scale-105 duration-200">Ocorrências</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Rede Neural" className="text-2xl font-semibold hover:scale-105 duration-200">Rede Neural</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Rotas" className="text-2xl font-semibold hover:scale-105 duration-200">Rotas</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Equipe" className="text-2xl font-semibold hover:scale-105 duration-200">Equipe</Link> 
              </NavigationMenuLink>
                </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Atendimento" className="text-2xl font-semibold hover:scale-105 duration-200">Atendimento</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/Servicos adicionais" className="text-2xl font-semibold hover:scale-105 duration-200">Serviços Adicionais</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <MobileMenu/>
            </div>
        </>
    )
}