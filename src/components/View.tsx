import { useParams } from 'react-router-dom';

import { usePokemon } from "../hooks/usePokemon";
import { padId } from '../utils/padId';

export default function ViewPage() {
  let { id } = useParams();
  if (!id) return <p>Pokemon ID is required</p>
  const { isLoading, isError, data } = usePokemon(id);

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Uh-oh something went wrong</p>
  if (!data) return <p>This Pokemon does not exist in this world.</p>

  const { name, image, type, base } = data;
  const { Attack: attack, Defense: defence, HP: hp, Speed: speed } = base;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">{name}: {padId(id)}</div>
      {image && <div className="panel-body">
        <img src={`${import.meta.env.VITE_BACKEND_URL}${image}`} alt={name} />
      </div>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type(s):</th>
            <th>Attack</th>
            <th>Defence</th>
            <th>HP</th>
            <th>Speed</th>
            <th>Sp. Attack</th>
            <th>Sp. Defence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{padId(id)}</td>
            <td>{name}</td>
            <td>{type.join(', ')}</td>
            <td>{attack}</td>
            <td>{defence}</td>
            <td>{hp}</td>
            <td>{speed}</td>
            <td>{base["Sp. Attack"]}</td>
            <td>{base["Sp. Defense"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}