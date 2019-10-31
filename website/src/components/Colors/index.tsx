import * as React from 'react';
import copy from 'clipboard-copy';
import {useTheme} from '@salad-ui/theme';
import {ColorName} from '@salad-ui/color';
import {
  Colors,
  Color,
  ColorShade,
  ColorShadeName,
  ColorShadeValue,
} from './index.styles';

interface ShadeProps {
  name: ColorName;
  bg: ColorName;
  fg: ColorName;
}

const Shade = ({name, bg, fg}: ShadeProps) => {
  const theme = useTheme();
  const [isCopied, setCopied] = React.useState<boolean>(false);
  const value = theme.color[name];

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
  name: 'background' | 'surface';
  onName: 'onBackground' | 'onSurface';
}

const ForegroundColor = ({name, onName}: ForegroundColorProps) => (
  <Color>
    <Shade name={name} fg={onName} bg={name} />
    <Shade
      name={`${onName}.subtle` as ColorName}
      fg={name}
      bg={`${onName}.subtle` as ColorName}
    />
    <Shade name={onName} fg={name} bg={onName} />
  </Color>
);

interface BackgroundColorProps {
  name: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  onName: 'onPrimary' | 'onSecondary' | 'onSuccess' | 'onWarning' | 'onError';
}

const BackgroundColor = ({name, onName}: BackgroundColorProps) => (
  <Color>
    <Shade name={name} fg={onName} bg={name} />
    <Shade
      name={`${name}.light` as ColorName}
      fg={onName}
      bg={`${name}.light` as ColorName}
    />

    <Shade
      name={`${name}.dark` as ColorName}
      fg={onName}
      bg={`${name}.dark` as ColorName}
    />
    <Shade name={onName} fg={name} bg={onName} />
  </Color>
);

export const BackgroundAndSurface = () => {
  return (
    <Colors>
      <ForegroundColor name="background" onName="onBackground" />
      <ForegroundColor name="surface" onName="onSurface" />
    </Colors>
  );
};

export const PrimaryAndSecondary = () => {
  return (
    <Colors>
      <BackgroundColor name="primary" onName="onPrimary" />
      <BackgroundColor name="secondary" onName="onSecondary" />
    </Colors>
  );
};

export const SuccessWarningAndError = () => {
  return (
    <Colors>
      <BackgroundColor name="success" onName="onSuccess" />
      <BackgroundColor name="warning" onName="onWarning" />
      <BackgroundColor name="error" onName="onError" />
    </Colors>
  );
};
