import { Link } from 'react-router-dom';

import { usePokedex } from "../hooks/usePokedex";
import { PokedexEntry } from "../types/Pokemon";
import { padId } from '../utils/padId';

export default function List() {
  const { isLoading, isError, data } = usePokedex();

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Uh-oh something went wrong</p>
  if (!data) return <p>No Pokemon exists in this world.</p>

  return (
    <div className="panel panel-default">
      <div className="panel-heading">Pokemon List</div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th colSpan={2}>Name</th>
            <th>Type(s):</th>
          </tr>
        </thead>
        <tbody>
          {data.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
        </tbody>
      </table>
    </div>
  )
}

type ListItemProps = {
  pokemon: PokedexEntry;
}

function ListItem({ pokemon }: ListItemProps) {
  const { name, id, type } = pokemon;
  return (
    <tr>
      <td>{padId(id)}</td>
      <td><Link to={`/pokemon/${id}`}>{name.english}</Link></td>
      <td>
        <Link to={`/pokemon/${id}`}>
          <img src={`${import.meta.env.VITE_BACKEND_URL}/thumbnail/${id}`} alt={name.english} />
        </Link>
      </td>
      <td>{type.join(', ')}</td>
    </tr>
  )
}