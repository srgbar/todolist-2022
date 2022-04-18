import React, {ChangeEvent, useCallback} from "react";
import {EditableSpan} from "../../../../components/EditableSpan/EditableSpan";
import {TaskStatuses, TaskType} from "../../../../api/todolists-api";
import {Delete} from "@mui/icons-material";
import {Checkbox, IconButton} from "@mui/material";

export type TaskPropsType = {
    todolistId: string
    task: TaskType
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo(((props: TaskPropsType) => {

        const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
        }, [props.changeTaskStatus, props.task.id, props.todolistId])

        const changeTaskTitle = useCallback((newValue: string) => {
            props.changeTaskTitle(props.task.id, newValue, props.todolistId)
        }, [props.changeTaskTitle, props.task.id, props.todolistId])

        const onClickHandler = useCallback(() => {
            props.removeTask(props.task.id, props.todolistId)
        }, [props.removeTask, props.task.id, props.todolistId])

        return <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? "is-done" : ""}>
            <Checkbox color="primary" onChange={onChangeHandler} checked={props.task.status === TaskStatuses.Completed}/>
            <EditableSpan title={props.task.title} onChange={changeTaskTitle}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    })
)