import { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon } from "lucide-react";

function ProductFolterUpload({
  folterFile,
  setFolterFile,
  uploadedFolterUrl,
  setUploadedFolterUrl,
}) {
  const inputRef = useRef(null);

  function handleFolterFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFolterFile(selectedFile);
    }

    function handleDragOver(event) {
      event.preventDefault();
    }

    function handleDrop(event) {
      event.preventDefault();
      const droppedFile = event.dataTranfer.files?.[0];
      if (droppedFile) setFolterFile(droppedFile);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block"> </Label>
      <div className="border-2 border-dashed rounded-lg p-4">
        <Input
          id="folter-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFolterFileChange}
        />
        {!folterFile ? (
          <Label
            htmlFor="folter-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="w-10 h-10 text-muted-foreground mb-2"
            />
            <span>Arraste ou clique para enviar a imagem.</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductFolterUpload;
