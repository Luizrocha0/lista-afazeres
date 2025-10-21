import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type  Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTask(){
    const [tasksData]= useLocalStorage<Task[]>(TASKS_KEY, [])
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsloadingTasks]= React.useState(true)

    async function fetchTasks(){
        if (isLoadingTasks){
            await delay(2000)
            setIsloadingTasks(false)
        }
        setTasks(tasksData)
    }

    React.useEffect(()=> {
        fetchTasks();
    }, [tasksData])

    return{
        tasks,
        tasksCount: tasks.filter((task)=> task.state === "created" ).length,
        concludedTasksCount: tasks.filter((task)=> task.concluded).length,
        isLoadingTasks
    }
}