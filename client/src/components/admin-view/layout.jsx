import { Outlet } from "react-router-dom";
import { useState } from "react"; // Importe useState
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
    const [openSidebar, setOpenSidebar] = useState(false); // Defina o estado

    return (
        <div className="flex min-h-screen w-full">
            {/* Admin sidebar */}
            <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} /> {/* Passando open e setOpen para o sidebar */}
            <div className="flex flex-1 flex-col">
                {/* Admin header */}
                <AdminHeader setOpen={setOpenSidebar} />
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
