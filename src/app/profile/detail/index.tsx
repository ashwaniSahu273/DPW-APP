import React, { useState, useEffect } from "react";

import { UserInfo } from "interface/user/type";
import * as D from "interface/user/data";
import Loader from "common/components/spinner";
import Form from "./form";
import View from "./view";

import Card from "common/components/card";

export default () => {
  const [data, setData] = useState<Partial<UserInfo> | null>(null);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    if (!data) {
      D.getUserDetail().then((d) => {
        setData(d.model.userInfo || {});
      });
    }
  }, [data]);

  if (!data) {
    return <Loader />;
  }

  return (
    <Card title="Profile">
      {edit ? (
        <Form
          data={data}
          onCancel={() => setEdit(false)}
          onSave={() => setEdit(false)}
        />
      ) : (
        <View data={data} />
      )}
    </Card>
    // <div className="bg-white shadow p-5 rounded">
    //   <div className="grid grid-cols-2 mb-2">
    //     <div className="text-primary-700 uppercase">Profile</div>
    //     <div className="text-right">
    //       <span
    //         className="cursor-pointer text-primary-700"
    //         onClick={() => setEdit(!edit)}
    //       >
    //         {edit ? (
    //           <i className="fa-solid fa-xmark"></i>
    //         ) : (
    //           <i className="fa-solid fa-pen-to-square"></i>
    //         )}
    //       </span>
    //     </div>
    //   </div>
    // {edit ? (
    //   <Form
    //     data={data}
    //     onCancel={() => setEdit(false)}
    //     onSave={() => setEdit(false)}
    //   />
    // ) : (
    //   <View data={data} />
    // )}
    // </div>
  );
};
