import React, { useState } from "react";
import { Controller } from "react-hook-form";
import "./dropzone.css";

interface MediaProps {
  onContinue: () => void;

  onBack: () => void;
  control: any; // Coming from React Hook Form for controlling the input
  errors: any;
  watch: any;
}

function Media({ onContinue, onBack, control, errors, watch }: MediaProps) {

  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to store selected image
  
  const [files, setFiles] = useState([]);

  // Handle files dropped into the drop zone
  const handleDrop = (e: any) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files?.[0];
    console.log(droppedFiles)
    if (droppedFiles) {
      setFiles([...files, URL.createObjectURL(droppedFiles)]);
    }
  };

  // Handle drag-over event (necessary for the drop event to work)
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  // Handle file selection via the input
  const handleFileChange = (e: any) => {
    const selectedFiles = e.target.files?.[0];
    console.log(e.target.files)
    if (selectedFiles) {
      setFiles([...files, URL.createObjectURL(selectedFiles)]);
    }
  };

  // File input click trigger when drop zone is clicked
  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };

  const handleBack = () => {
    onBack();
  };

  const handleOnContinue = () => {
    onContinue();
  };


  // Disable the next button if no image is selected
  const isButtonDisabled = !files || files.length === 0;

  return (
    <div className="absolute top-0 left-0 flex flex-col w-full h-auto min-w-0 p-4 break-words bg-white border-0  dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
      <h5 className="font-bold dark:text-white">Media</h5>
      <div>
        <div className="flex flex-wrap mt-4 -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            <label
              className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              htmlFor="ProductImage"
            >
              Product Image
            </label>
            <div
              id="drop-zone"
              className="flex justify-center items-center px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 cursor-pointer hover:border-blue-400 hover:text-blue-500"
              onClick={triggerFileInput}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              Drop files here to upload
            </div>

            {/* Hidden file input */}
            <Controller
              name="ProductImage"
              control={control}
              rules={{ required: "Product image is required" }}
              render={({ field: { onChange } }) => (
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  multiple
                    accept="image/*"
                  onChange={handleFileChange}
                />
              )}
            />

            {errors.ProductImage && (
              <p className="text-red-500">{errors.ProductImage.message}</p>
            )}
          </div>
        </div>

        {/* <Controller
          name="ProductImage"
          control={control}
          rules={{ required: "Product image is required" }}
          render={({ field: { onChange } }) => (
            <input
              id="file-input"
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedImage(URL.createObjectURL(file)); // Display the selected image
                }
                onChange(e.target.files); // Use React Hook Form's onChange
              }}
            />
          )}
        /> */}

        {/* Display selected files */}
        {/* {files.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-gray-700">Selected Files:</h4>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )} */}


        {/* Image Preview */}
        {
          <div className="flex flex-wrap mt-4 -mx-3 h-40">
            <div className="w-full max-w-full px-3 flex-0 h-40  flex flex-wrap gap-5">
              {files.map((url) => {
                return (
                  <img
                    src={url}
                    alt="Selected Preview"
                    className="max-w-full h-28 w-28 object-fit object-cover rounded-lg shadow-md"
                  />
                );
              })}
            </div>
          </div>
        }

        <div className="flex mt-6">
          <button
            type="button"
            aria-controls="info"
            prev-form-btn
            className="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800"
            onClick={handleBack}
          >
            Prev
          </button>
          <button
            type="button"
            aria-controls="socials"
            next-form-btn
            className={`inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed opacity-70"
                : "dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800"
            } leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25`}
            onClick={handleOnContinue}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Media;
