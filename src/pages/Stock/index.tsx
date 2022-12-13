import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../../components/Table";
import { Button, LabelContainer, TableHeading, TableRow } from "../../components/Table/styles";

export function Stock() {
    let title = 'Stock'
    let columns = ['S.No', 'Name', 'Token ID', 'Token Number', 'Platform', 'Status']
    let data = [{
        id: 1,
        name: 'Xbox Live 12 Meses',
        token_id: '12',
        token_number: 'XXXX-XXXX-XXXX-XXXX',
        platform: 'XBOX',
        status: 'Active'
    }, {
        id: 2,
        name: 'Xbox Live 12 Meses',
        token_id: '12',
        token_number: 'XXXX-XXXX-XXXX-XXXX',
        platform: 'XBOX',
        status: 'Active'
    }]


    return (
        <Table title={title} columns={columns} tableRow={data.map((row, index) => (
            <TableRow key={index}>
                <TableHeading><span>{index + 1}</span></TableHeading>
                <TableHeading><span>{row.name}</span></TableHeading>
                <TableHeading><span>{row.token_id}</span></TableHeading>
                <TableHeading><span>{row.token_number}</span></TableHeading>
                <TableHeading><span>{row.platform}</span></TableHeading>
                <TableHeading><LabelContainer type={'primary'}>{row.status}</LabelContainer></TableHeading>
                <TableHeading>
                    <Button backgroundcolor={'primary'}><FontAwesomeIcon icon={faPen} color={'#707070'} /></Button>
                    <Button backgroundcolor={'secondary'}><FontAwesomeIcon icon={faTrash} color={'#FF3D3D'}/></Button>
                </TableHeading>
            </TableRow>
        ))} />
    )
}