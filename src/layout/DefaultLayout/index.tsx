import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CircleContainerBottomLeft, CircleContainerRightTop } from "../../pages/Home/styles";
import { Container } from "./styles";

export function DefaultLayout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function handleOpenSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <Container open={isSidebarOpen}>
            <CircleContainerBottomLeft />
            <CircleContainerRightTop />
            <Header isSiderBarOpen={isSidebarOpen} onHandleSideBar={handleOpenSidebar} />
            <Sidebar isSiderBarOpen={isSidebarOpen} onHandleSideBar={handleOpenSidebar} />            
            <Outlet />
        </Container>
    )
}