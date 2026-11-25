import { jwtDecode } from "jwt-decode";

export function decodeID(token: string) {
  return jwtDecode(token);
}
