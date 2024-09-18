import React, { useState, SyntheticEvent } from "react";

import Wrapper from "common/form/inputs/wrapper";
import Text from "common/form/inputs/text";
import Button from "common/components/buttons/main";

import { UserInfo } from "interface/user/type";

export default ({
  data,
  onSave,
  onCancel,
}: {
  data: Partial<UserInfo>;
  onSave: (data: Partial<UserInfo>) => void;
  onCancel: () => void;
}) => {
  const [form, setForm] = useState<Partial<UserInfo>>(data);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper label="First Name">
        <Text
          value={data.first_name}
          onChange={(v) => setForm({ ...form, first_name: v || "" })}
        />
      </Wrapper>
      <Wrapper label="Last Name">
        <Text
          value={data.last_name}
          onChange={(v) => setForm({ ...form, first_name: v || "" })}
        />
      </Wrapper>
      <Wrapper label="Gender">
        <button
          type="button"
          onClick={() => setForm({ ...form, gender: true })}
          className={`ml-10 rounded-full h-10 w-10 text-center mr-5 ${
            form.gender
              ? "bg-primary-700 text-white"
              : "bg-secondary-100 text-primary-700"
          }`}
        >
          M
        </button>
        <button
          type="button"
          onClick={() => setForm({ ...form, gender: false })}
          className={`rounded-full h-10 w-10 text-center mr-5 ${
            !form.gender
              ? "bg-primary-700 text-white"
              : "bg-secondary-100 text-primary-700"
          }`}
        >
          F
        </button>
      </Wrapper>
      <button
        type="submit"
        className="py-2 px-5 rounded shadow hover:shadow-lg text-white bg-primary-700 hover:bg-primary-600 transition transform ease-in-out duration-100"
      >
        <i className="fa-solid fa-floppy-disk"></i> Save
      </button>
      <Button variant="transparent" onClick={() => onCancel()}>
        Cancel
      </Button>
    </form>
  );
};
