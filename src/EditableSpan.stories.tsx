import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODOLIST/EditableSpan Component',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: "Value EditableSpan changed"
        },
        title: {
            defaultValue: "HTML",
            description: "Start value EditableSpan"
        }
    }
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    onChange: action("Value EditableSpan changed")
};

