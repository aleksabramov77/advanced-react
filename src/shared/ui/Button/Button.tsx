import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE_RED = 'outlineRed',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    isSquare?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        children, isSquare,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: isSquare,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.root, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
