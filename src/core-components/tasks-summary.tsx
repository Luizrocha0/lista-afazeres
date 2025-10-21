import Badge from "../componentes/badge"
import Text from "../componentes/text"
import useTasks from "../hooks/use-tasks"

export default function TasksSummary(){
    const {tasksCount, concludedTasksCount, isLoadingTasks} = useTasks()
    return <>

    <div className="flex items-center gap-2">
        <Text className="text-gray-300" variant="body-sm-bold"> Tarefas criadas</Text>
        <Badge loading={isLoadingTasks} variant="secondary">{tasksCount}</Badge>
    </div>

    <div className="flex items-center gap-2">
        <Text className="text-gray-300" variant="body-sm-bold">Concluidas</Text>
        <Badge loading={isLoadingTasks} variant="secondary">{concludedTasksCount} de {tasksCount}</Badge>
    </div>
    </>
}