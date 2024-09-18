import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import Input from "common/form/inputs/text";
import Password from "common/form/inputs/password";
import Wrapper from "common/form/inputs/wrapper";
import { Link } from "react-router-dom";
import * as T from "interface/user/type";

import * as D from "interface/auth";

interface Form {
  login: string | undefined;
  pw: string | undefined;
}
export default () => {
  const [form, setForm] = useState<Form>({ login: undefined, pw: undefined });
  const [errors, setErrors] = useState<{ [k: string]: string[] } | undefined>(
    undefined
  );

  const [isVisiblePIN, setVisible] = useState<"invisible" | undefined>(
    "invisible"
  );
  const [pinStatusMsg, setVisibleStatusMsg] = useState<"invisible" | undefined>(
    "invisible"
  );

  const nav = useNavigate();
  const handleSubmit = (e: SyntheticEvent) => {
    console.log("loging");
    
    e.preventDefault();

    D.login(form)
      .then(() => {
        const role = window.localStorage.getItem("role");
        switch (role) {
          case T.Role.CUSTOMER:
            nav("/app/profile");
            return;
          // case T.Role.MANAGER:
          //   nav("/manager");
          //   return;
          default:
            nav("/app"); // @todo: where to navigate guest and admin?
        }
      })

      .catch((err) => setErrors(err as any));
    // nav("/app");
  };

  const handlePin = (v: string) => {
    setForm({ ...form, login: v });
    if (validateEmail(v)) {
      setVisible(undefined);
      return;
    }

    setVisible("invisible");
  };

  const sendPinToEmail = (idKey: string) => {
    D.sendOneTimeLogin(idKey)
      .then(() => {})
      .catch((err) => setErrors(err as any));

    setVisible("invisible");
    setVisibleStatusMsg(undefined);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="md:w-1/3 pt-5 md:pt-20 h-full">
        <h2 className="text-xl font-semibold text-primary-700 mb-2 uppercase text-center">
          Welcome DOGE-J
        </h2>
        <div className="bg-white shadow p-5">
          <form onSubmit={handleSubmit}>
            <Wrapper label="Login" errors={errors && errors["email"]}>
              <Input value={form.login} onChange={handlePin} />
            </Wrapper>
            <Wrapper label="PIN">
              <Password
                value={form.pw}
                onChange={(v) => setForm({ ...form, pw: v })}
              />
            </Wrapper>

            <div>
              <button
                type="submit"
                className="rounded  py-2 w-full text-black  bg-primary-700 hover:bg-primsry-500 transition transform ease-in-out duration-100"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="grid grid-cols-2 mt-2">
            <Link
              to="https://t.me/dogecoin_chain_bot"
              className=" hover:text-primsry-500 transition transform ease-in-out duration-300 tooltip"
            >
              <small>Register</small>
              <span className="tooltiptext">Registration by Telegram</span>
            </Link>
            <button
              onClick={() => sendPinToEmail(form.login)}
              className={`${isVisiblePIN} text-right hover:text-primary-500 transition transform ease-in-out duration-100 animated infinite bounce delay-2s`}
            >
              <small className="">Send one-time PIN</small>
            </button>
          </div>

          <div className={`${pinStatusMsg} grid grid-cols-1 mt-1`}>
            <small className="text-center">
              PIN-code sent, please check email
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
