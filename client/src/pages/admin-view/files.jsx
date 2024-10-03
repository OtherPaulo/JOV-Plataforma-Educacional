import { Fragment } from "react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ProductFolterUpload from "@/components/admin-view/folter.upload";

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
  const [folterFile, setFolterFile] = useState(null);
  const [uploadedFolterUrl, setUploadedFolterUrl] = useState("");

  function onSubmit() {}

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Novo Arquivo
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg: grid-cols-4"></div>

      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Adicionar Novo Arquivo</SheetTitle>
          </SheetHeader>
          <ProductFolterUpload
            file={folterFile}
            setFile={setFolterFile}
            uploadedFolterUrl={uploadedFolterUrl}
            setUploadedFolterUrl={setUploadedFolterUrl}
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
