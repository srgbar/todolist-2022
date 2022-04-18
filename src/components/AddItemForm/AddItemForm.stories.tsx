import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODOLIST/AddItemForm Component',
    component: AddItemForm,
} as ComponentMeta<typeof AddItemForm>;

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;
const TemplateDisabled: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormsStories = Template.bind({});
AddItemFormsStories.args = {
    addItem: action("AddItemForm clicked"),
};

export const AddItemFormsDisabledStories = TemplateDisabled.bind({});
AddItemFormsDisabledStories.args = {
    addItem: action("AddItemForm clicked"),
    disabled: true
};

