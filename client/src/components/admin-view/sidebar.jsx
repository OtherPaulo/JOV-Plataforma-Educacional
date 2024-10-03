import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Play,
  Folder,
  FolderOpen,
} from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export const AdminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "playlist",
    label: "Playlist",
    path: "/admin/playlist",
    icon: <Play />,
  },
  {
    id: "arquivos",
    label: "Arquivos",
    path: "/admin/files",
    icon: <Folder />, // ícone padrão
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const [openFile, setOpenFile] = useState(false); // Estado para controlar a abertura do arquivo

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {AdminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            if (menuItem.id === "arquivos") {
              setOpenFile(!openFile); // Alterna o estado ao clicar em "Arquivos"
            }
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.id === "arquivos" ? ( // Verifica se é "arquivos" para mudar o ícone
            openFile ? <FolderOpen /> : <Folder />
          ) : (
            menuItem.icon
          )}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold text-orange-600">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
      
    </Fragment>
  );
}

export default AdminSidebar;
