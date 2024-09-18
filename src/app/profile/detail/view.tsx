import React from "react";

import { UserInfo } from "interface/user/type";

const classLabel = `font-extralight`;
export default ({ data }: { data: Partial<UserInfo> }) => {
  // const sessionProfile = JSON.parse(window.localStorage.getItem("profile"));
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className={classLabel}>Name</div>
      <div>
        {data?.first_name} {data?.last_name}
      </div>

      <div className={classLabel}>Email</div>
      <div>{data?.email}</div>
      <div className={classLabel}>Gender</div>
      <div>
        {typeof data?.gender === "boolean" && (
          <button
            type="button"
            className={`rounded-full h-8 w-8 text-center mr-5 bg-primary-700 text-white`}
          >
            {data?.gender === true ? "M" : data.gender === false ? "F" : ""}
          </button>
        )}
      </div>
      {/* <div className={classLabel}>Birthday</div> */}
      {/* <div>
        {data?.birthday && new Date(data?.birthday).toLocaleDateString()}
      </div> */}
      <div className={classLabel}>Country</div>
      <div>
        {data?.country &&
          `${data?.country?.countryName} / ${data?.country?.countryTag}`}
      </div>
      <div className={classLabel}>Phone</div>
      <div>
        {data?.country?.phoneTag} {data?.phoneNumber}
      </div>
    </div>
  );
};
