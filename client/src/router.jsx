import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminPlaylist from "./pages/admin-view/playlist";
import AdminFiles from "./pages/admin-view/files";
import AdminFeatures from "./pages/admin-view/features";
import CurseLayout from "./components/shopping-view/layout";
import CurseHome from "./pages/curse-view/home";
import CurseListing from "./pages/curse-view/listing";
import CurseCheckout from "./pages/curse-view/checkout";
import CurseAcoount from "./pages/curse-view/account";
import CheckAuth from "./components/common/check-auth";
import NotFound from "./pages/not-found";
import { useSelector } from "react-redux";
import JovHome from "./pages/home-view/home";

function App() {
  const {user, isAuthenticated} = useSelector(state=> state.auth)

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route>
          <Route 
          path="/" element={<JovHome />}
          />
        </Route>
        
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="playlist" element={<AdminPlaylist />} />
          <Route path="files" element={<AdminFiles />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <CurseLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<CurseHome />} />
          <Route path="listing" element={<CurseListing />} />
          <Route path="checkout" element={<CurseCheckout />} />
          <Route path="account" element={<CurseAcoount />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
