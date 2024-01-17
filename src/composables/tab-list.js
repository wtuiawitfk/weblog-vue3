import { useCookies } from "@vueuse/integrations/useCookies";

const TAB_LSIT_KEY = "tab-list";
const cookie = useCookies();
export function getTabList() {
  return cookie.get(TAB_LSIT_KEY);
}

export function setTabList(tableList) {
  return cookie.set(TAB_LSIT_KEY, tableList);
}
