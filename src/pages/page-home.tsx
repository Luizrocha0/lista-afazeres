import Container from "../componentes/container";
import TaskList from "../core-components/task-list";
import TasksSummary from "../core-components/tasks-summary";


export default function PageHome(){
    // Removido ml-96 e mr-96
    return <Container className="flex-col gap-3" as="article">
        <header className=" flex items-center justify-between">
            <TasksSummary/>
        </header>

            <TaskList/>
    </Container>
}