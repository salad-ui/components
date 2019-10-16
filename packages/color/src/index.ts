import {StyledProps} from 'styled-components';
import {get as getPathFromObject} from 'lodash-es';
import {map, ValueOrValueMap} from '@salad-ui/breakpoint';

export type Color = 'primary.main' | 'primary.light' | 'primary.dark' | string;

export const get = (name: Color, transform?: (value: string) => string) => <P>({
  theme,
}: StyledProps<P>) => {
  const value: string | undefined = getPathFromObject(theme.color, name);
  if (value === undefined) {
    console.error(`Color "${name}" cannot be found on the theme`);
    return 'inherit';
  }
  return transform ? transform(value) : value;
};

const createMixin = (prop: string) => {
  return (
    name: ValueOrValueMap<Color>,
    transform?: (value: string) => string,
  ) => {
    return <P>(props: StyledProps<P>) => {
      return map(name, n => {
        const value = get(n, transform)(props);
        return {[prop]: value};
      });
    };
  };
};

export const color = createMixin('color');
export const backgroundColor = createMixin('backgroundColor');
export const borderColor = createMixin('borderColor');
export const borderTopColor = createMixin('borderTopColor');
export const borderRightColor = createMixin('borderRightColor');
export const borderBottomColor = createMixin('borderBottomColor');
export const borderLeftColor = createMixin('borderLeftColor');

export interface ColorProps {
  /** The foreground color. */
  color?: ValueOrValueMap<Color>;
}

export const colorProps = (props: ColorProps) =>
  props.color ? color(props.color) : undefined;

export interface BackgroundColorProps {
  /** The background color. */
  backgroundColor?: ValueOrValueMap<Color>;
}

export const backgroundColorProps = (props: BackgroundColorProps) =>
  props.backgroundColor ? backgroundColor(props.backgroundColor) : undefined;
