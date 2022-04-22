import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {tasksReducer} from '../../features/Todolists/tasks-reducer'
import {todolistsReducer} from '../../features/Todolists/todolists-reducer'
import {v1} from 'uuid'
import {AppRootStateType} from '../../app/store'
import {TaskPriorities, TaskStatuses} from "../../api/todolists-api";
import {appReducer} from "../../app/app-reducer";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "../../features/Login/auth-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    login: authReducer
})

const initialGlobalState: AppRootStateType = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all", addedDate: "", order: 0, entityStatus: "idle"},
        {id: "todolistId2", title: "What to buy", filter: "all", addedDate: "", order: 0, entityStatus: "loading"}
    ],
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk",status: TaskStatuses.Completed, todoListId: "todolistId2", description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low},
            {id: v1(), title: "React Book", status: TaskStatuses.Completed, todoListId: "todolistId2", description: "", startDate: "", deadline: "", addedDate: "", order: 0, priority: TaskPriorities.Low}
        ]
    },
    app: {
        error: null,
        status: "idle",
        isInitialized: false
    },
    login: {
        isLoggedIn: false
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState, applyMiddleware(thunkMiddleware));

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
)

