import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";
import {TaskPriorities, TaskStatuses} from "../../../../api/todolists-api";

const changeTaskStatusCallback = action("Change Task Status")
const changeTaskTitleCallback = action("Change Task Title")
const removeTaskCallback = action("Remove Task")

export default {
    title: 'TODOLIST/Task Component',
    component: Task,
    args: {
        changeTaskStatus: changeTaskStatusCallback,
        changeTaskTitle: changeTaskTitleCallback,
        removeTask: removeTaskCallback,
    }
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});
TaskIsDone.args = {
    task: {
        id: "1",
        status: TaskStatuses.Completed,
        title: "REDUX",
        todoListId: "todolistId1",
        description: "",
        startDate: "",
        deadline: "",
        addedDate: "",
        order: 0,
        priority: TaskPriorities.Low
    },
    todolistId: "todo1",
};

export const TaskIsNotDone = Template.bind({});
TaskIsNotDone.args = {
    task: {
        id: "2",
        status: TaskStatuses.New,
        title: "JS",
        todoListId: "todolistId1",
        description: "",
        startDate: "",
        deadline: "",
        addedDate: "",
        order: 0,
        priority: TaskPriorities.Low
    },
    todolistId: "todo1",
};

