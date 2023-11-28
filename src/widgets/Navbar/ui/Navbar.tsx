import React, { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    return (

        <div className={classNames(cls.root, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleAuthModalOpen}
                className={cls.links}
            >
                {t('Войти')}
            </Button>

            <LoginModal onClose={handleAuthModalClose} isOpen={isAuthModalOpen} />
        </div>
    );
};
