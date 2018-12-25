import { Balise } from '../interfaces/balise';
export class BaliseModel implements Balise {
  id: String;
  commented: Boolean;
  baliseName: String;
  attributes: Map<String, String>;
  contenu: BaliseModel[];
  texte: String;
}
