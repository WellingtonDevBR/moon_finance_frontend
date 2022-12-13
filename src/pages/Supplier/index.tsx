import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../../components/Table";
import { Button, LabelContainer, TableHeading, TableRow } from "../../components/Table/styles";

export function Supplier() {
    let title = 'Supplier'
    let columns = ['S.No', 'Name', 'Email', 'Status']
    let data = [{
        id: 1,
        name: 'John Doe',
        email: 'well@gmail.com',
        status: 'Approved'
    }, {
        id: 2,
        name: 'John Doe',
        email: 'we@gma',
        status: 'Declined'
    }]


    return (
        <Table title={title} columns={columns} tableRow={data.map((row, index) => (
            <TableRow key={index}>
                <TableHeading><span>{index + 1}</span></TableHeading>
                <TableHeading><span>{row.name}</span></TableHeading>
                <TableHeading><span>{row.email}</span></TableHeading>
                <TableHeading><LabelContainer type={'primary'}>{row.status}</LabelContainer></TableHeading>
                <TableHeading>
                    <Button backgroundcolor={'primary'}><FontAwesomeIcon icon={faPen} color={'#707070'} /></Button>
                    <Button backgroundcolor={'secondary'}><FontAwesomeIcon icon={faTrash} color={'#FF3D3D'}/></Button>
                </TableHeading>
            </TableRow>
        ))} />
    )
}