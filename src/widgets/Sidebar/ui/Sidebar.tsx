import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';

import { SidebarItem } from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../model/items';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props:SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = useCallback(() => setCollapsed((p) => !p), []);

    const itemsList = useMemo(() => SidebarItemsList.map((i) => (
        <SidebarItem
            key={i.path}
            item={i}
            collapsed={false}
        />
    )), []);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.root, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                isSquare
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} isShort={collapsed} />
            </div>
        </div>
    );
});
