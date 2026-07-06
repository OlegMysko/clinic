import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { refreshThunk } from "@/features/auth/refreshThunk";
import { useEffect } from "react";

export const AuthLoader = ({ children }) => {
  const dispatch = useAppDispatch();
  const isInicialized = useAppSelector(state=>state.auth.isInitialized)

    useEffect(() => {
        dispatch(refreshThunk());
    }, []);

    return isInicialized? children: 'not now'
};
