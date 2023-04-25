import Cookies from "js-cookie";

export const saveTokenStorage = (data: ITokens) => {
    Cookies.set("accessToken", data.accessToken)
    Cookies.set("refreshToken", data.refreshToken)
}

export const removeTokensStorage = () => {
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokenStorage(data);
    localStorage.setItem("user", JSON.stringify(data.user));
}