export type FlexyAlign =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type FlexyJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between';

export interface FlexyProps {
  align?: FlexyAlign;
  className?: string;
  children?: React.ReactNode;
  justify?: FlexyJustify;
}
