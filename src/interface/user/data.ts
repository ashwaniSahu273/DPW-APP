import * as GT from "../type";
import * as T from "./type";
import { apiPrefix } from "config";

export const getUserDetail = async (): Promise<
  GT.Data<{ userInfo: T.UserInfo }>
> => {
  return Promise.resolve({ model: {} } as any);
  const r = await fetch(`${apiPrefix}secure/user-info`, { method: "GET" });
  return await r.json();
};
