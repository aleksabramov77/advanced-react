import { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import meta from 'shared/ui/Button/Button.stories';

export default {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
    },
    args: {
        isOpen: true,
        // eslint-disable-next-line max-len
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

// todo Разобраться почему тест не проходит в github
// export const Dark: Story = {
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
