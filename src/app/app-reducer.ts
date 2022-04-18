const initialState = {
    status: 'loading' as RequestStatusType,
    // error: "Error message 😠_😠_😠" as string | null
    error: null as string | null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = typeof initialState

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetStatusActionType = ReturnType<typeof setAppStatusAC>;

type ActionsType =
    | SetErrorActionType
    | SetStatusActionType

// actions
export const setAppErrorAC = (error: string | null) => ({type: "APP/SET-ERROR", error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)