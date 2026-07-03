import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/auth/authSlice";

import { authService } from "@/services/authService";
import { refreshTokenService } from "@/services/refreshTokenService";
import { mapLoginResponse } from "@/mapper/auth.mapper";
import { accessTokenService } from "@/services/accessTokenService";

export const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      const refreshToken = refreshTokenService.get();

      if (!refreshToken) return;

      try {
        const data = await authService.refresh(refreshToken);
        const normalize = mapLoginResponse(data)

        dispatch(
          setCredentials({
            user: normalize.user,
            accessToken: normalize.accessToken,
            
          })
        );

        accessTokenService.save(normalize.accessToken);
      } catch (e) {
        console.log("not logged in");
      }
    };

    initAuth();
  }, []);

  return children;
};