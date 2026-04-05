import DB from '../../../dados/db.json';
import Artigo from '../Artigo';

export default function Lixeira() {
  return <Artigo items={DB.lixos} imageKey="icone" />;
}