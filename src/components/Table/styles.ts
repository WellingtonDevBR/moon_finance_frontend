import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const Container = styled.div`
    min-width: 1280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(66, 66, 66, 0.3);
    border: 1px solid #615C65;
    border-radius: 0px 0px 10px 10px;
`;


export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.thead``

export const TableRow = styled.tr`
    color: #FFF;
    font-size: 14px;
    line-height: 16px;
    &:nth-child(even) {
        background: rgba(96, 96, 96, 0.1);
    }
`

export const TableHeadRow = styled(FontAwesomeIcon).attrs({
    fontSize: '12px',
})`
    position: absolute;
    margin-left: 2px;
    padding: 2px;
    cursor: pointer;
`;

export const TableBody = styled.tbody``;




export const TableHeading = styled.th`
  padding: 8px;
  text-align: left;
  padding: 10px 30px 10px 30px;
  p {
    color: #fff;
    font-weight: bold;
    font-family: 'Product sans bold';
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }

  span {
    font-size: 1.125rem;
    color: #fff;
    font-family: 'Product sans italic';
    font-weight: 400;
  }
`;

const ButtonDefault = styled.button`
    cursor: pointer;
    background-color: rgba(255, 61, 61, 0.1);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    & + button {
        margin-left: 20px;
    }
`;

interface LabelProps {
    type : 'primary' | 'secondary';
}

export const LabelContainer = styled.div<LabelProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: #fff;
    font-family: 'Product sans';
    font-weight: 400;
    width: 90px;
    height: 31px;
    color: ${(props) => props.type === 'primary' ? '#61AE24' : '#FF3D3D'};
    background: ${(props) => props.type === 'primary' ? 'rgba(61, 255, 80, 0.1)' : 'rgba(255, 61, 61, 0.1)'};
    border-radius: 5px;
`;


type ButtonColor = 'primary' | 'secondary';

interface ButtonProps {
    backgroundcolor: ButtonColor;
}

export const Button = styled(ButtonDefault) <ButtonProps>`
    background-color: ${props => props.backgroundcolor === 'primary' ? 'rgb(112, 112, 112, 0.1)' : 'rgba(255, 61, 61, 0.1);'};
`
