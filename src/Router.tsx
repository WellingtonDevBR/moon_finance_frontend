import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<DefaultLayout />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='customer' element={<h1>customer</h1>} />
                <Route path='supplier' element={<Dashboard />} />
                <Route path='product' element={<Dashboard />} />
                <Route path='region' element={<Dashboard />} />
                <Route path='platform' element={<Dashboard />} />
                <Route path='marketplace' element={<Dashboard />} />
                <Route path='order' element={<Dashboard />} />
                <Route path='stock' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}