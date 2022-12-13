import { Container, InputNumber, InputSearch } from "./styles";


export function SearchHeader() {

    return (
        <Container>
        <p>
            Showing
            <InputNumber list={'browsers'}/>
                <datalist id={'browsers'}>
                    <option value={1} />
                    <option value={2} />
                    <option value={3} />
                    <option value={4} />
                    <option value={5} />
                </datalist>
            Entries
        </p>
        <InputSearch type={'search'} placeholder="search" />
    </Container>
    )
    
}