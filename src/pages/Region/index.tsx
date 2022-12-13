import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../../components/Table";
import { Button, TableHeading, TableRow } from "../../components/Table/styles";

export function Region() {
    let title = 'Region'
    let columns = ['S.No', 'Name']
    let data = [{
        id: 1,
        name: 'US',
    }, {
        id: 2,
        name: 'BR',
    }]

    return (
        <Table title={title} columns={columns} tableRow={data.map((row, index) => (
            <TableRow key={index}>
                <TableHeading><span>{index + 1}</span></TableHeading>
                <TableHeading><span>{row.name}</span></TableHeading>
                <TableHeading>
                    <Button backgroundcolor={'primary'}><FontAwesomeIcon icon={faPen} color={'#707070'} /></Button>
                    <Button backgroundcolor={'secondary'}><FontAwesomeIcon icon={faTrash} color={'#FF3D3D'}/></Button>
                </TableHeading>
            </TableRow>
        ))} />
    )
}