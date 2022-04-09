import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    addTodolistThunkTC,
    changeTodolistFilterAC,
    changeTodolistTitleThunkTC,
    fetchTodolistsThunkTC,
    FilterValuesType,
    removeTodolistThunkTC,
    TodolistDomainType
} from "./todolists-reducer";
import {addTaskThunkTC, removeTaskThunkTC, TasksStateType, updateTaskThunkTC} from "./tasks-reducer";
import {TaskStatuses} from "../../api/todolists-api";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";

export const TodolistsList: React.FC = () => {

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodolistsThunkTC())
    }, [])

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(addTaskThunkTC(title, todolistId))
    }, [dispatch])

    const removeTask = useCallback((id: string, todolistId: string) => {
        dispatch(removeTaskThunkTC(todolistId, id))
    }, [dispatch])

    const changeStatus = useCallback((id: string, status: TaskStatuses, todolistId: string) => {
        dispatch(updateTaskThunkTC(id, {status}, todolistId))
    }, [dispatch])

    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        dispatch(updateTaskThunkTC(id, {title: newTitle}, todolistId))
    }, [dispatch])

    const removeTodolist = useCallback((id: string) => {
        dispatch(removeTodolistThunkTC(id))
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistThunkTC(title))
    }, [dispatch])

    const changeTodolistTitle = useCallback((id: string, title: string) => {
        dispatch(changeTodolistTitleThunkTC(id, title))
    }, [dispatch])

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }, [dispatch])

    return <>
        <Grid container style={{padding: "20px"}}>
            <AddItemForm addItem={addTodolist}/>
        </Grid>
        <Grid container spacing={3}>
            {
                todolists.map(tl => {

                    return <Grid item key={tl.id}>
                        <Paper style={{padding: "10px"}}>
                            <Todolist key={tl.id}
                                      id={tl.id}
                                      title={tl.title}
                                      tasks={tasks[tl.id]}
                                      removeTask={removeTask}
                                      changeFilter={changeFilter}
                                      addTask={addTask}
                                      changeTaskStatus={changeStatus}
                                      filter={tl.filter}
                                      removeTodolist={removeTodolist}
                                      changeTodolistTitle={changeTodolistTitle}
                                      changeTaskTitle={changeTaskTitle}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}