import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {Trigger} from './Trigger';
import {Editor} from './Editor';

export interface ThemeSwitcherProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  onChange,
}) => {
  const [isEditorVisible, setEditorVisible] = React.useState(false);
  return (
    <>
      <Trigger onTrigger={() => setEditorVisible(true)} />
      {isEditorVisible && (
        <Editor
          theme={theme}
          onChange={onChange}
          onClose={() => setEditorVisible(false)}
        />
      )}
    </>
  );
};
