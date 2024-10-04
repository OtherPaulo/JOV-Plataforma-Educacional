import { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductFolderUpload({
  folderFile,
  setFolderFile,
  uploadedFolderUrl,
  setUploadedFolderUrl,
}) {
  const inputRef = useRef(null);

  function handleFolderFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFolderFile(selectedFile);
    }
  }

  // Movido para fora de handleFolderFileChange
  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setFolderFile(droppedFile);
  }

  function handleRemoveFolder() {
    setFolderFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadFiletoCloud(){
    const data = new FormData();
    data.append('my_file', folderFile);
    const response = await axios.post('http://localhost:5175/api/admin/files/upload-folder', data)
    console.log(response, "response")

      if(response) setUploadedFolderUrl(response.data) 
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* <Label className="text-lg font-semibold mb-2 block">Carregar Arquivo</Label> */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <Input
          id="folder-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFolderFileChange}
        />
        {!folderFile ? (
          <Label
            htmlFor="folder-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon
              // onDragOver={handleDragOver}
              // onDrop={handleDrop}
              className="w-10 h-10 text-muted-foreground mb-2"
            />
            <span>Arraste ou clique para enviar a imagem.</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{folderFile.name}</p>
            <Button
              variante="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveFolder}
            >
              <XIcon className=" w-4 h-4" />
              <span className="sr-only">Remover Arquivo</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductFolderUpload;
