import React, {ChangeEvent} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {TaskStatuses, TaskType} from "./api/todolists-api";

export type TaskPropsType = {
    todolistId: string
    task: TaskType
}

export const TaskWithDispatch = React.memo(((props: TaskPropsType) => {
        console.log("TaskWithDispatch called")

        const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[props.todolistId]
            .filter(task => task.id === props.task.id)[0]
        )
        const dispatch = useDispatch()

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            const action = changeTaskStatusAC(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
            dispatch(action)
        }

        const changeTaskTitle = (newValue: string) => {
            const action = changeTaskTitleAC(props.task.id, newValue, props.todolistId)
            dispatch(action)
        }

        const onClickHandler = () => {
            const action = removeTaskAC(props.task.id, props.todolistId)
            dispatch(action)
        }

        return <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? "is-done" : ""}>
            <Checkbox color="primary" onChange={onChangeHandler} checked={props.task.status === TaskStatuses.Completed}/>
            <EditableSpan title={props.task.title} onChange={changeTaskTitle}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    })
)