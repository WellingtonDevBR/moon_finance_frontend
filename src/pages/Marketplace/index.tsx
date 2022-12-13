import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../../components/Table";
import { Button, LabelContainer, TableHeading, TableRow } from "../../components/Table/styles";

export function Marketplace() {
    let title = 'Marketplace'
    let columns = ['S.No', 'Name', 'Status']
    let data = [{
        id: 1,
        name: 'John Doe',
        status: 'Approved'
    }, {
        id: 2,
        name: 'John Doe',
        status: 'Declined'
    }]


    return (
        <Table title={title} columns={columns} tableRow={data.map((row, index) => (
            <TableRow key={index}>
                <TableHeading><span>{index + 1}</span></TableHeading>
                <TableHeading><span>{row.name}</span></TableHeading>
                <TableHeading><LabelContainer type={'primary'}>{row.status}</LabelContainer></TableHeading>
                <TableHeading>
                    <Button backgroundcolor={'primary'}><FontAwesomeIcon icon={faPen} color={'#707070'} /></Button>
                    <Button backgroundcolor={'secondary'}><FontAwesomeIcon icon={faTrash} color={'#FF3D3D'}/></Button>
                </TableHeading>
            </TableRow>
        ))} />
    )
}