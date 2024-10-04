import { useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ProductFolderUpload from "@/components/admin-view/folder.upload";

const InitialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  materials: "",
  // price: "",
  // salePrice: "",
  // totalStock: "  ",
};

function AdminFiles() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(InitialFormData);
  const [folderFile, setFolderFile] = useState(null);
  const [uploadedFolderUrl, setUploadedFolderUrl] = useState("");

  function onSubmit() {}

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button aria-label="Adicionar novo arquivo" onClick={() => setOpenCreateProductsDialog(true)}>
          Novo Arquivo
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={(open) => setOpenCreateProductsDialog(open)}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Adicionar Novo Arquivo</SheetTitle>
          </SheetHeader>
          <ProductFolderUpload
            folderFile={folderFile} 
            setFolderFile={setFolderFile}
            uploadedFolderUrl={uploadedFolderUrl}
            setUploadedFolderUrl={setUploadedFolderUrl}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={"Add"}
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminFiles;
