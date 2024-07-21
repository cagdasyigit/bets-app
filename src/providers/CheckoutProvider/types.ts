export interface DataProviderProps {
  children: React.ReactNode;
}

export type OCGKey = '1' | '2' | '5';

export interface IData {
  C: string;
  N: string;
  TYPE: string;
  NID: string;
  D: string;
  T: string;
  DAY: string;
  S: string;
  LN: string;
  IMF: boolean;
  OCG: {
    [key in OCGKey]: {
      ID: string;
      N: string;
      MBS: string;
      SO: number;
      OC: {
        [key: string]: {
          ID: string;
          O: string;
          N: string;
          MBS: string;
          G: string;
          OD: number;
          IMF: boolean;
        };
      };
    };
  };
  HEC: boolean;
}

export interface IListItem {
  betData: IData;
  selectedRatio: string;
}

export interface IDataContext {
  list: IListItem[];
  addOrUpdateItem: (item: IData, selectedRatio: string) => void;
}
