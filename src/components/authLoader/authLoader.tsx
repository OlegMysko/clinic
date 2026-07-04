import { useAppDispatch } from "@/app/store/hook";
import { refreshThunk } from "@/features/auth/refreshThunk";
import { useEffect } from "react";

export const AuthLoader = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(refreshThunk());
    }, []);

    return children;
};
