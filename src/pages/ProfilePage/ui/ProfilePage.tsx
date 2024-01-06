import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const handleChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ first: value }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ lastname: value }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ age: Number(value) }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ city: value }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ username: value }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileData({ avatar: value }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfileData({ currency: value }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfileData({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={handleChangeFirstname}
                    onChangeLastname={handleChangeLastname}
                    onChangeAge={handleChangeAge}
                    onChangeCity={handleChangeCity}
                    onChangeUsername={handleChangeUsername}
                    onChangeAvatar={handleChangeAvatar}
                    onChangeCurrency={handleChangeCurrency}
                    onChangeCountry={handleChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
