import styled from "styled-components";

interface ContainerProps {
    open: boolean;
}
export const Container = styled.main<ContainerProps>`
    display: flex;
    padding: ${({ open }) => open ? '100px 300px' : '100px 100px'};
`