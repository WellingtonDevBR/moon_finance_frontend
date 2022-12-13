import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../../components/Table";
import { Button, LabelContainer, TableHeading, TableRow } from "../../components/Table/styles";

export function Order() {
    let title = 'Order'
    let columns = ['S.No', 'Order ID', 'Name', 'Quantity', 'Amount', 'Supplier', 'Payment Method', 'Payment Status']
    let data = [{
        id: 1,
        order_id: '123',
        name: 'Wellington Santos',
        quantity: 12,
        amount: 1200,
        customer: 'John Doe',
        supplier: 'John Doe',
        payment_method: 'Credit Card',
        payment_status: 'Paid',
    }, {
        id: 2,
        order_id: '123',
        name: 'Wellington Santos',
        quantity: 12,
        amount: 1200,
        customer: 'John Doe',
        supplier: 'John Doe',
        payment_method: 'Credit Card',
        payment_status: 'Paid',
    }]


    return (
        <Table title={title} columns={columns} tableRow={data.map((row, index) => (
            <TableRow key={index}>
                <TableHeading><span>{index + 1}</span></TableHeading>
                <TableHeading><span>{row.order_id}</span></TableHeading>
                <TableHeading><span>{row.name}</span></TableHeading>
                <TableHeading><span>{row.quantity}</span></TableHeading>
                <TableHeading><span>{row.amount}</span></TableHeading>
                <TableHeading><span>{row.customer}</span></TableHeading>
                <TableHeading><span>{row.supplier}</span></TableHeading>
                <TableHeading><span>{row.payment_method}</span></TableHeading>
                <TableHeading><LabelContainer type={'primary'}>{row.payment_status}</LabelContainer></TableHeading>
                <TableHeading>
                    <Button backgroundcolor={'primary'}><FontAwesomeIcon icon={faPen} color={'#707070'} /></Button>
                    <Button backgroundcolor={'secondary'}><FontAwesomeIcon icon={faTrash} color={'#FF3D3D'}/></Button>
                </TableHeading>
            </TableRow>
        ))} />
    )
}