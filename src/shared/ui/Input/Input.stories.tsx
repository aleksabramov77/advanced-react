import {
    Meta, StoryObj,
} from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
    },
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary:Story = {
};
