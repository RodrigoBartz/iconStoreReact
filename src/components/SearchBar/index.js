import * as C from './styles'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

  return (
    <C.Container>
        <C.Input
        type="search"
        placeholder="Buscar icones"
        required
        />

        <C.Button
        type="submit">
            <FaSearch/>
        </C.Button>
    </C.Container>
  )
}

export default SearchBar