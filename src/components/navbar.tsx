import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  } from "./ui/navigation-menu"
import zeno from "@/assets/Zeno.png"

import { MobileMenu } from "./mobileMenu"

export default function Navbar() {
    return(
        <>

        <div className="flex h-20 md:h-30 w-full items-center justify-around border-2 bg-linear-to-r from-red-300 to-orange-300">
              <img src={zeno} className="h-40 w-40 mt-4 md:h-70 md:w-70"></img>
            <p className="hidden md:block font-extrabold">|</p>

           <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="flex gap-4 lg:gap-12 xl:gap-20">                         
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
        <MobileMenu/>
            </div>
        </>
    )
}