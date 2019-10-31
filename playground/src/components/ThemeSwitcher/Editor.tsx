import * as React from 'react';
import {theme as defaultTheme, Theme} from '@salad-ui/theme';
import {BlockPicker} from 'react-color';
import {Card} from '@salad-ui/card';
import {Title, Subtitle} from '@salad-ui/typography';
import {Field} from '@salad-ui/field';
import {Button} from '@salad-ui/button';
import {Grid, Unit} from '@salad-ui/grid';
import {usePopoverState, Popover, PopoverDisclosure} from 'reakit/Popover';
import {
  EditorWrapper,
  ColorFields,
  ColorFieldWrapper,
  ColorFieldInputWrapper,
  ColorSwatch,
} from './Editor.styles';
import {ColorName} from '@salad-ui/color/src';

interface ColorFieldProps {
  name: string;
  value: string;
  onChange: (color: string) => void;
}

const ColorField = ({name, value, onChange}: ColorFieldProps) => {
  const popover = usePopoverState();
  return (
    <ColorFieldWrapper>
      <Field label={<code>{name}</code>}>
        <ColorFieldInputWrapper>
          <PopoverDisclosure {...popover}>
            {props => (
              <ColorSwatch
                id={`color-${name}`}
                color={value}
                {...props}
              ></ColorSwatch>
            )}
          </PopoverDisclosure>
          <Popover
            {...popover}
            aria-labelledby={`color-${name}`}
            style={{zIndex: 1}}
          >
            <BlockPicker
              color={value}
              onChangeComplete={({hex}) => onChange(hex)}
            />
          </Popover>
        </ColorFieldInputWrapper>
      </Field>
    </ColorFieldWrapper>
  );
};

export interface EditorProps {
  theme: Theme;
  onClose: () => void;
  onChange: (theme: Theme) => void;
}

export const Editor: React.FC<EditorProps> = ({theme, onChange, onClose}) => {
  const handleResetTheme = () => onChange(defaultTheme);
  const handleColorChange = (name: string) => (value: string) => {
    onChange({
      ...theme,
      color: {
        ...theme.color,
        [name]: value,
      },
    });
  };

  const renderField = (name: ColorName) => (
    <ColorField
      name={name}
      value={theme.color[name]}
      onChange={handleColorChange(name)}
    />
  );

  return (
    <EditorWrapper>
      <Card>
        <Grid valign="center" component="header">
          <Unit size="min">
            <Title size="large" color="onSurface">
              Theme Switcher
            </Title>
          </Unit>
          <Unit size="max" marginLeft={2}>
            <Button
              variant="tertiary"
              isDestructive
              isCompact
              onClick={handleResetTheme}
            >
              Reset Theme
            </Button>
          </Unit>
          <Unit size="min" marginLeft={2}>
            <Button variant="tertiary" isCompact onClick={onClose}>
              <span role="img" aria-label="Close the theme switcher">
                ⤫
              </span>
            </Button>
          </Unit>
        </Grid>

        <Title size="small" color="onSurface">
          Color
        </Title>

        <Subtitle color="onSurface" mt={3}>
          Background
        </Subtitle>
        <ColorFields>
          {renderField('background')}
          {renderField('onBackground')}
          {renderField('onBackground.subtle')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Surface
        </Subtitle>
        <ColorFields>
          {renderField('surface')}
          {renderField('onSurface')}
          {renderField('onSurface.subtle')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Primary
        </Subtitle>
        <ColorFields>
          {renderField('primary')}
          {renderField('primary.light')}
          {renderField('primary.dark')}
          {renderField('onPrimary')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Secondary
        </Subtitle>
        <ColorFields>
          {renderField('secondary')}
          {renderField('secondary.light')}
          {renderField('secondary.dark')}
          {renderField('onSecondary')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Success
        </Subtitle>
        <ColorFields>
          {renderField('success')}
          {renderField('success.light')}
          {renderField('success.dark')}
          {renderField('onSuccess')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Warning
        </Subtitle>
        <ColorFields>
          {renderField('warning')}
          {renderField('warning.light')}
          {renderField('warning.dark')}
          {renderField('onWarning')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Error
        </Subtitle>
        <ColorFields>
          {renderField('error')}
          {renderField('error.light')}
          {renderField('error.dark')}
          {renderField('onError')}
        </ColorFields>

        <Subtitle color="onSurface" mt={3}>
          Border
        </Subtitle>
        <ColorFields>
          {renderField('border')}
          {renderField('border.light')}
          {renderField('border.dark')}
        </ColorFields>
      </Card>
    </EditorWrapper>
  );
};
