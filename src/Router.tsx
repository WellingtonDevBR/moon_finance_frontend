import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Customer } from "./pages/Customer";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { Order } from "./pages/Order";
import { Platform } from "./pages/Platform";
import { Product } from "./pages/Product";
import { Region } from "./pages/Region";
import { Stock } from "./pages/Stock";
import { Supplier } from "./pages/Supplier";


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<DefaultLayout />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='customer' element={<Customer />} />
                <Route path='supplier' element={<Supplier />} />
                <Route path='product' element={<Product />} />
                <Route path='region' element={<Region />} />
                <Route path='platform' element={<Platform />} />
                <Route path='marketplace' element={<Marketplace />} />
                <Route path='order' element={<Order />} />
                <Route path='stock' element={<Stock />} />
            </Route>
        </Routes>
    )
}