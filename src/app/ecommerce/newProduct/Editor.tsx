import React, { useState } from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic"],

    [{ color: [] }, { background: [] }],
    ["clean"] // remove formatting button
  ]
};

const formats = [
  "header",
  "list",
  "bullet",
  "bold",
  "italic",
 
  "color",
  "background",
  "align"
];

interface EditorProps {
  control: any;
}

const Editor = ({ control }: EditorProps) => {
  return (
    <div className="App">
      <Controller
        name="Description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ReactQuill
            theme="snow"
            value={field.value}
            onChange={field.onChange}
            modules={modules}
            formats={formats}
            placeholder="Start writing here..."
            style={{ height: "80px" }}
          />
        )}
      />
    </div>
  );
};

export default Editor;
