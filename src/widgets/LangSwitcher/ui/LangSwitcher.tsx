import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {className, children} = props

    const {t, i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.root, {}, [className])}
                onClick={toggle}>{t('Язык')}
        </Button>
    )
};

