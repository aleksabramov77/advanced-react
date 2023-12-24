import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [
        StoreDecorator({
            loginForm: { username: 'test', password: 'test' },
        }),
    ],
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'test', password: 'test' },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'test', password: 'test', error: 'Error' },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
