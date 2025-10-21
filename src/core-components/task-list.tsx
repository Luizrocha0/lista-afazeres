import Button from "../componentes/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import TaskItem from "./task-item";
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks"
import { type Task } from "../models/task";

export default function TaskList(){
    const {tasks, isLoadingTasks}= useTasks()
    const {prepareTask}= useTask()

    function handleNewTask(){
        prepareTask()
    }

    return <>
        <section>
            <Button 
            onClick={handleNewTask} 
            icon={PlusIcon} 
            className="w-full"
            disabled={tasks.some((task) => task.state=== "creating")||
                isLoadingTasks
            }
            >
                nova tarefa
            </Button>
        </section>
        <section className="space-y-2">
            {! isLoadingTasks && tasks.map((task)=> (<TaskItem key={task.id} task={task} /> ))}
            {isLoadingTasks &&
                <>
                    <TaskItem  task={{} as Task} loading />
                    <TaskItem  task={{} as Task} loading />
                    <TaskItem  task={{} as Task} loading />
                </>
            }

        </section>
    </>
}