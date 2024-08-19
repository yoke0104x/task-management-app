

import { user } from '@/api';
import enums from '@/enums';
import { create } from 'zustand'


interface UserInfoState {
    id: string;
    username: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    superAdmin: boolean;
}

type UserSate = {
    data: UserInfoState | null;
    setUserInfo: () => void;
}

export const useUserStore = create<UserSate>((set) => ({
    data: null,
    setUserInfo: () => {
        user.getUserInfo().then(res => {
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                set({ data: res?.data })
            }
        })

    }
}))