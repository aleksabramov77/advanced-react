import React, { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.root, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={handleLogout}
                    className={cls.links}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleAuthModalOpen}
                className={cls.links}
            >
                {t('Войти')}
            </Button>

            {isAuthModalOpen && (
                <LoginModal onClose={handleAuthModalClose} isOpen={isAuthModalOpen} />
            )}
        </div>
    );
};
