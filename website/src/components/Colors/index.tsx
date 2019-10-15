import * as React from 'react';
import {ThemeContext} from 'styled-components';
import copy from 'clipboard-copy';
import {
  Colors,
  Color,
  ColorShade,
  ColorShadeName,
  ColorShadeValue,
} from './index.styles';

interface ShadeProps {
  name: string;
  value: string;
  bg: string;
  fg: string;
}

const Shade = ({name, value, bg, fg}: ShadeProps) => {
  const [isCopied, setCopied] = React.useState<boolean>(false);

  const handleCopy = () => {
    copy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <ColorShade fg={fg} bg={bg} role="button" onClick={handleCopy}>
      <ColorShadeName>{name}</ColorShadeName>
      <ColorShadeValue>{isCopied ? 'copied' : value}</ColorShadeValue>
    </ColorShade>
  );
};

interface ForegroundColorProps {
  name: string;
  color: string;
  onName: string;
  onColor: {
    main: string;
    subtle: string;
  };
}

const ForegroundColor = ({
  name,
  color,
  onName,
  onColor,
}: ForegroundColorProps) => (
  <Color>
    <Shade name={name} value={color} fg={`${onName}.main`} bg={name} />
    <Shade
      name={`${onName}.subtle`}
      value={onColor.subtle}
      fg={name}
      bg={`${onName}.subtle`}
    />
    <Shade
      name={`${onName}.main`}
      value={onColor.main}
      fg={name}
      bg={`${onName}.main`}
    />
  </Color>
);

interface BackgroundColorProps {
  name: string;
  color: {
    main: string;
    light: string;
    dark: string;
  };
  onName: string;
  onColor: string;
}

const BackgroundColor = ({
  name,
  color,
  onName,
  onColor,
}: BackgroundColorProps) => (
  <Color>
    <Shade
      name={`${name}.light`}
      value={color.light}
      fg={onName}
      bg={`${name}.light`}
    />
    <Shade
      name={`${name}.main`}
      value={color.main}
      fg={onName}
      bg={`${name}.main`}
    />
    <Shade
      name={`${name}.dark`}
      value={color.dark}
      fg={onName}
      bg={`${name}.dark`}
    />
    <Shade name={onName} value={onColor} fg={`${name}.main`} bg={onName} />
  </Color>
);

export const BackgroundAndSurface = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Colors>
      <ForegroundColor
        name="background"
        color={theme.color.background}
        onName="onBackground"
        onColor={theme.color.onBackground}
      />
      <ForegroundColor
        name="surface"
        color={theme.color.surface}
        onName="onSurface"
        onColor={theme.color.onSurface}
      />
    </Colors>
  );
};

export const PrimaryAndSecondary = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Colors>
      <BackgroundColor
        name="primary"
        color={theme.color.primary}
        onName="onPrimary"
        onColor={theme.color.onPrimary}
      />
      <BackgroundColor
        name="secondary"
        color={theme.color.secondary}
        onName="onSecondary"
        onColor={theme.color.onSecondary}
      />
    </Colors>
  );
};

export const SuccessWarningAndError = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Colors>
      <BackgroundColor
        name="success"
        color={theme.color.success}
        onName="onSuccess"
        onColor={theme.color.onSuccess}
      />
      <BackgroundColor
        name="warning"
        color={theme.color.warning}
        onName="onWarning"
        onColor={theme.color.onWarning}
      />
      <BackgroundColor
        name="error"
        color={theme.color.error}
        onName="onError"
        onColor={theme.color.onError}
      />
    </Colors>
  );
};
