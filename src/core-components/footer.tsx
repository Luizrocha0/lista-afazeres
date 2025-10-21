import  { NavLink } from "react-router";
import Text from "../componentes/text";

export default function Footer(){
    return <footer className="my-5 md:my-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/">
                    <Text variant="body-sm-bold" className="text-gray-300">
                        tarefas
                    </Text>
                </NavLink>
                <NavLink to="/componentes">
                    <Text variant="body-sm-bold" className="text-gray-300">
                        componentes
                    </Text>
                </NavLink>

            </nav>
        </footer>
}