import DB from '../../../dados/db.json';
import Artigo from '../Artigo';

export default function Desenhos() {
  return <Artigo items={DB.desenhos} />;
}