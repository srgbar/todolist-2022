import React, {useState} from 'react';
import '../app/App.css';
import {Todolist} from "../features/Todolists/Todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "../components/AddItemForm/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TaskPriorities, TaskStatuses, TaskType} from "../api/todolists-api";
import {FilterValuesType, TodolistDomainType} from "../features/Todolists/todolists-reducer";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistDomainType>>([
        {id: todolistId1, title: "What to learn", filter: "all", addedDate: "", order: 0},
        {id: todolistId2, title: "What to bye", filter: "all", addedDate: "", order: 0},
    ]);

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", status: TaskStatuses.Completed, todoListId: todolistId1, description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "JS", status: TaskStatuses.Completed, todoListId: todolistId1, description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", status: TaskStatuses.Completed, todoListId: todolistId2, description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "React Book", status: TaskStatuses.Completed, todoListId: todolistId2, description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low}
        ],
    });

    function removeTask(id: string, todolistId: string) {
        // достанем нужный массив по todolistId
        let todolistTasks = tasks[todolistId];
        // перезапишем в этом объекте массив для нужного тудулиста отфильтрованным массивом
        tasks[todolistId] = todolistTasks.filter(t => t.id != id);
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, status: TaskStatuses.New, todoListId: todolistId, description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low};
        // достанем нужный массив по todolistId
        let todolistTasks = tasks[todolistId];
        // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску
        tasks[todolistId] = [task, ...todolistTasks]
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks})
    }

    function changeStatus(id: string, status: TaskStatuses, todolistId: string) {
        // достанем нужный массив по todolistId
        let todolistTasks = tasks[todolistId];
        // найдем нужную таску
        let task = todolistTasks.find(t => t.id === id);
        // изменим таску если она нашлась
        if (task) {
            task.status = status;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks});
        }
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        // достанем нужный массив по todolistId
        let todolistTasks = tasks[todolistId];
        // найдем нужную таску
        let task = todolistTasks.find(t => t.id === id);
        // изменим таску если она нашлась
        if (task) {
            task.title = newTitle;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks});
        }
    }

    function removeTodolist(id: string) {
        // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
        setTodolists(todolists.filter(tl => tl.id != id));
        // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
        delete tasks[id]; // удаляем св-во из объекта... значение которого являлся массив тасок
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }

    function changeTodolistTitle(id: string, newTitle: string) {
        let todolist = todolists.find(tl => tl.id === id);
        if (todolist) {
            todolist.title = newTitle;
            setTodolists([...todolists])
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function addTodolist(title: string) {
        let newTodolistId = v1();
        let newTodolist: TodolistDomainType = {id: newTodolistId, title: title, filter: "all", addedDate: "", order: 0}
        setTodolists([newTodolist, ...todolists]);
        setTasks({
            ...tasks,
            [newTodolistId]: []
        })
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatuses.New)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.status === TaskStatuses.Completed)
                            }

                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              title={tl.title}
                                              tasks={tasksForTodolist}
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
            </Container>
        </div>
    );
}

export default App;


