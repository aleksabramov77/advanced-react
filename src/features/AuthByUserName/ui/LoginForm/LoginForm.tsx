import { memo, MouseEventHandler, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginUserName } from '../../model/selectors/getLoginUserName';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;

    onSuccess(): void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLoginClick = useCallback<MouseEventHandler<HTMLButtonElement>>(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.root, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин или пароль')} />}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={handleChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={handleChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={handleLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
