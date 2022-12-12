import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CircleContainerBottomLeft, CircleContainerRightTop } from "../../pages/Home/styles";
import { Container } from "./styles";

export function DefaultLayout() {

    return (
        <Container>
            <CircleContainerBottomLeft />
            <CircleContainerRightTop />
            <Header />
            <Sidebar />
            <Outlet />
        </Container>
    )
}