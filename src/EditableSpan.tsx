import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title);
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
};