type DataGridRequiredProps<T> = {
  data: T;
  headers: Header<GetElementType<T>>[];
  rows: number;
};

type DataGridOptionalProps<T> = {
  withNavigation?: boolean; // allow row navigation on click
  navigationProps?: { baseRoute: string; accessor: string }; // define navigation
  withCheck?: boolean; //enable data selection
  setExternalContent?: React.Dispatch<React.SetStateAction<T[]>>; // set external content
  ActionComponent?: ActionComponentProps;
};

type ActionComponentProps<T> = {
  data: ArrayElement<T[]>;
};

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;

interface Header<T> {
  name: string;
  accessor: string;
  sortable: boolean;
  secondary_key?: string;
  searchType?: 'input' | 'select' | 'date';
  cell?: (val: any, second?: any) => JSX.Element;
  cellAlign?: 'left' | 'right' | 'center';
  row?: (val: any, second?: any) => JSX.Element;
  rowAlign?: 'left' | 'right' | 'center';
  actionCell?: (data: ArrayElement<T>) => JSX.Element;
}

type DataGridProps<T> = DataGridRequiredProps<T> & DataGridOptionalProps<T>;
