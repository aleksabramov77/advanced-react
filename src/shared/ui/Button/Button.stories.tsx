import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    // layout: 'centered',
    },
    args: {
        children: 'Button',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: { control: 'inline-radio', options: ButtonTheme },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '1rem' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
