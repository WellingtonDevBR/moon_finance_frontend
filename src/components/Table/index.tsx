import { Container, TableBody, TableContainer, TableHead, TableHeading, TableRow } from "./styles";
import { Header } from "./components/Header";
import { SearchHeader } from "./components/SearchSection";


interface TableProps {
    title: string;
    columns: string[];
    tableRow: React.ReactNode[];
}

export function Table({title, columns, tableRow}: TableProps) {

  return (
    <Container>
        <Header title={title} />
        <SearchHeader />
        <TableContainer>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeading key={index}>
                            <p>{column}</p>
                        </TableHeading>
                    ))}
                    <TableHeading><p>Action</p></TableHeading>
                </TableRow>
            </TableHead>
            <TableBody> 
                {tableRow}
            </TableBody>
       </TableContainer>
    </Container>
  );
};