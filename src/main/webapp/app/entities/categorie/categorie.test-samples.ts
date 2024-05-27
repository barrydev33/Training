import { ICategorie, NewCategorie } from './categorie.model';

export const sampleWithRequiredData: ICategorie = {
  id: 1361,
  nom: 'au point que',
};

export const sampleWithPartialData: ICategorie = {
  id: 4247,
  nom: 'chercher oh grâce à',
};

export const sampleWithFullData: ICategorie = {
  id: 19082,
  nom: 'pin-pon à force de',
  description: 'au moyen de foule quitte à',
};

export const sampleWithNewData: NewCategorie = {
  nom: 'coac coac',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
