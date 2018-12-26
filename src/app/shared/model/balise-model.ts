import { Balise } from '../interfaces/balise';
export class BaliseModel implements Balise {
  id: String;
  commented: Boolean;
  baliseName: String =  null;
  attributes: Map<String, String>;
  contenu: BaliseModel[] =  new Array();
  texte: String;
}
