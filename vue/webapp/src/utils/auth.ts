import Cookies from 'js-cookie'

const TokenKey = (process && process.env && process.env.TOKEN_KEY) ? process.env.TOKEN_KEY : 'token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token:string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
