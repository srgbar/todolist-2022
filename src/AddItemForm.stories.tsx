import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODOLIST/AddItemForm Component',
    component: AddItemForm,
} as ComponentMeta<typeof AddItemForm>;

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormsStories = Template.bind({});
AddItemFormsStories.args = {
    addItem: action("AddItemForm clicked")
};

// const callback = action("Button add was pressed inside the form");
//
// export const AddItemFormBaseExample = (props: any) => {
//     return <AddItemForm addItem={callback}/>
// }

