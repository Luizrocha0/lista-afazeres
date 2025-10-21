import Container from "../componentes/container";
import TaskList from "../core-components/task-list";
import TasksSummary from "../core-components/tasks-summary";


export default function PageHome(){
    return <Container className="flex-col ml-96 mr-96 gap-3" as="article">
        <header className=" flex items-center justify-between">
            <TasksSummary/>
        </header>
        
            <TaskList/>
    </Container>
}