import React, {useEffect, useState} from 'react'
import {todolistsApi} from "../api/todolists-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "88133967-bfe7-4c18-8b37-a3c163827473"
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.createTodolist("AXAM")
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "76eb97a6-a5fb-4955-aa32-5026eaff595c";
        todolistsApi.deleteTodolist(todolistId)
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "068760fe-7143-4110-82e1-d93261aad570";
        todolistsApi.updateTodolist(todolistId, "ROGER")
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e1fa5e26-2d88-4815-bfe1-3d6cc6252715';
        todolistsApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsApi.deleteTasks(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}
