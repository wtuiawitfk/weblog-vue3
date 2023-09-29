import { useCookies } from "@vueuse/integrations";

// 存储在 Cookie 中的 Token 的 key
const TOKEN_KEY = "Authorization";
const cookie = useCookies();

export function getToken() {
  return cookie.get(TOKEN_KEY);
}

export function setToken(token) {
  return cookie.set(TOKEN_KEY, token);
}

export function removeToken() {
  return cookie.remove(TOKEN_KEY);
}
