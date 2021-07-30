import { M } from '@angular/cdk/keycodes';
import { GenericData } from 'search-mat-select/lib/search-mat-select.component';

export interface State extends GenericData {
  sigla: string;
}

export const BRAZILIAN_STATES: Array<State> = [
  {
    id: 1,
    name: 'Acre',
    sigla: 'AC'
  },
  {
    id: 2,
    name: 'Alagoas',
    sigla: 'AL'
  },
  {
    id: 3,
    name: 'Amapá',
    sigla: 'AP'
  },
  {
    id: 4,
    name: 'Amazonas',
    sigla: 'AM'
  },
  {
    id: 5,
    name: 'Bahia',
    sigla: 'BA'
  },
  {
    id: 6,
    name: 'Ceará',
    sigla: 'CE'
  },
  {
    id: 7,
    name: 'Distrito Federal',
    sigla: 'DF'
  },
  {
    id: 8,
    name: 'Espirito Santo',
    sigla: 'ES'
  },
  {
    id: 9,
    name: 'Goiás',
    sigla: 'GO'
  },
  {
    id: 10,
    name: 'Maranhão',
    sigla: 'MA'
  },
  {
    id: 11,
    name: 'Mato Grosso do Sul',
    sigla: 'MS'
  },
  {
    id: 12,
    name: 'Mato Grosso',
    sigla: 'MT'
  },
  {
    id: 13,
    name: 'Minas Gerais',
    sigla: 'MG'
  },
  {
    id: 14,
    name: 'Pará',
    sigla: 'PA'
  },
  {
    id: 15,
    name: 'Paraíba',
    sigla: 'PB'
  },
  {
    id: 16,
    name: 'Paraná',
    sigla: 'PR'
  },
  {
    id: 17,
    name: 'Pernambuco',
    sigla: 'PE'
  },
  {
    id: 18,
    name: 'Piauí',
    sigla: 'PI'
  },
  {
    id: 19,
    name: 'Rio de Janeiro',
    sigla: 'RJ'
  },
  {
    id: 20,
    name: 'Rio Grande do Norte',
    sigla: 'RN'
  },
  {
    id: 21,
    sigla: 'RS',
    name: 'Rio Grande do Sul'
  },
  {
    id: 22,
    sigla: 'RO',
    name: 'Rondônia'
  },
  {
    id: 23,
    sigla: 'RR',
    name: 'Roraima'
  },
  {
    id: 24,
    sigla: 'SC',
    name: 'Santa Catarina'
  },
  {
    id: 25,
    sigla: 'SP',
    name: 'São Paulo'
  },
  {
    id: 26,
    sigla: 'SE',
    name: 'Sergipe'
  },
  {
    id: 27,
    sigla: 'TO',
    name: 'Tocantins'
  }
];
