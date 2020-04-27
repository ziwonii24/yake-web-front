import jwt_decode from 'jwt-decode';

interface TokenInfo {
    user_id: string
    user_birth_year: string
    user_gender: string
}

export const decode = (token: string) => {
    const tokenDecoded: TokenInfo = jwt_decode(token);
    return tokenDecoded
}

export const login = (token: string) => {
    localStorage.setItem('token', token)
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const getToken = () => {
    return localStorage.getItem('token')
}