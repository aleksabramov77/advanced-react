import React, { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
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

            <Modal isOpen={isAuthModalOpen} onClose={handleAuthModalClose}>
                <div style={{ padding: 20, width: 300, height: 200 }}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolor neque non pariatur ratione, sed tempora voluptas voluptate voluptatem!
                </div>
            </Modal>
        </div>
    );
};
