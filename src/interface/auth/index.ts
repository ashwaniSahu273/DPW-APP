import * as U from "../utils";
import { apiPrefix } from "config";

export const login = async (form: { login: string; pw: string }) => {
  const data = {
    identityKey: form.login,
    type: "email",
    password: form.pw,
  };

  const r = await fetch(`${apiPrefix}pw-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: U.getFormBody(data),
  });
  const res = await r.json();
  if (res.success) {
    const { id, identityKey, role } = res.model.authorized;
    const email = res.model.authorized.user_info.email;
    const profile = { id, identityKey, email };

    window.localStorage.setItem("profile", JSON.stringify(profile));
    window.localStorage.setItem("role", role);

    return Promise.resolve(true);
  }

  return Promise.reject({ email: ["Login or password is wrong"] });
};

export const sendOneTimeLogin = async (email: string) => {
  const request = await fetch(`${apiPrefix}one-time-pin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: U.getFormBody({ identityKey: email }),
  });

  const response = await request.json();

  if (response.success) {
  }
};
