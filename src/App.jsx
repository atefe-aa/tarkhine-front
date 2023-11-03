import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Policies from "./pages/Policies";
import Branch from "./pages/Branch";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PaymentStatus from "./pages/PaymentStatus";
import Profile from "./pages/Profile";
import BranchApply from "./pages/BranchApply";
import FAQ from "./pages/FAQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="branch/:branchId" element={<Branch />} />
            <Route path="branchApply" element={<BranchApply />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="menu" element={<Menu />} />
            <Route path="paymentStatus" element={<PaymentStatus />} />
            <Route path="policies" element={<Policies />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
