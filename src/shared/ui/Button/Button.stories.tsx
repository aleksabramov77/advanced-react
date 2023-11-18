import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
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

export const OutlineSizeM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareM: Story = {
    args: {
        children: '>',
        isSquare: true,
        size: ButtonSize.M,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        isSquare: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        isSquare: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
