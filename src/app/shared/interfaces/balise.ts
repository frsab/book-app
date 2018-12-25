export interface Balise {
  id: String;

  commented: Boolean;

  baliseName: String;

  attributes: Map<String, String>;

  contenu: Balise[];

  texte: String;
}
