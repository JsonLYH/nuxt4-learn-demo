export function resetStorage() {
    localStorage.clear();
}

export function setToken(token: string) {
    localStorage.setItem(`token`, token);
}

export function getToken() {
    return localStorage.getItem(`token`);
}

export function removeToken() {
    return localStorage.removeItem(`token`);
}

export function isLoggedIn() {
    return !!getToken();
}

//刷新token
// export async function handleRefreshToken() {
//     const token = getToken();
//     if (!token) return false;
//     const res = await postRefreshToken({
//         accessToken: token!,
//     });
//
//     if (res.data && res.data.access_token) {
//         setToken(res.data.access_token);
//         return true;
//     }
//
//     return false;
// }