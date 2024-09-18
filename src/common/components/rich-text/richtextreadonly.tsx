import React from "react";
import { Editor } from '@tinymce/tinymce-react';

const Richtextreadonly = (props:any) => {

  return (
    <>
      <Editor
        value = {props.children}
          disabled = {true}
          init={{
            height: 200,
            width: '100%',
            menubar: false,
            toolbar: false,
            content_style: 'body { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-weight: 100}',
          }}
        />
      </>
    );}

export default Richtextreadonly;