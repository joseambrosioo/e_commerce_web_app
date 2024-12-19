import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEffect, useRef } from "react";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

// Component for handling product image upload functionality.
// It includes file selection, drag-and-drop upload, and integration with a cloud storage service.
function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
}) {
  const inputRef = useRef(null);

  // console.log(isEditMode, '')

  // Handles the selection of an image file via the file input field.
  function handleImageFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  // Prevents the default behavior when dragging a file over the component.
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Handles the dropping of a file into the drag-and-drop area.
  // Updates the state with the dropped file.
  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  // Clears the selected image file and resets the file input field.
  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value;
    }
  }

  console.log(imageFile);

  // Uploads the selected image file to a cloud storage service.
  // Updates the URL and loading state based on the response.
  async function uploadedImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "https://e-commerce-web-app-q0k6.onrender.com/api/admin/products/upload-image",
      data
    );
    // console.log(response, "response");
    if (response.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  // Effect to automatically upload the image whenever a new file is selected.
  useEffect(() => {
    if (imageFile !== null) uploadedImageToCloudinary();
  }, [imageFile]);

  // Returns the UI for the image upload component.
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
        // className={`${isEditedMode ? 'opacitiy-60' : ""
        // } border-2 border-dashed rounded-lg p-4`} // if I want to disable image upload when editing a product details
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          // disabled={isEditeMode} // if I want to disable image upload when editing a product details
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={
              "flex flex-col items-center justify-center h-32 cursor-pointer"
            }
            // className={`${isEditMode ? 'cursor-not-allowed' : ""
            //     }flex flex-col items-center justify-center h-32 cursor-pointer`} // if I want to deactivate the image upload when editing a product details
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drog or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Exports the ProductImageUpload component for use in other parts of the application.
export default ProductImageUpload;
