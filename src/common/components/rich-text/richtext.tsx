import React, {useState} from "react";
import { Editor } from '@tinymce/tinymce-react';
import { InputProps } from "common/form/inputs/type";

const Richtext = ({
  value,
  onChange,
}: InputProps<string>) => {

const [initText, setInitValue] = useState<string>(value || "");

  const handleEditorContentInny = (editableText, initText) => {
    setInitValue(initText);
    console.log(editableText);
 
    const { value }  = editableText;
    if (value === "") {
      return onChange(undefined);
    } 
    return onChange(editableText);
  };

  return (
    <>
      <Editor
        tinymce-script-src='https://cdn.tiny.cloud/1/no-api-key/tinymce/4/tinymce.min.js'
        value={value}
        onEditorChange={handleEditorContentInny} 
        initialValue={initText}
        init={{
        height: 200,
        menubar: true,
        plugins: [
        //   'advlist autolink lists link image charmap print preview anchor',
        //   'searchreplace visualblocks code fullscreen',
        //   'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'save undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: 100}',
      }}
      />
    </>
  );
}

export default Richtext;