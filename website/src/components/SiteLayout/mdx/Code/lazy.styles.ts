import styled from 'styled-components';
import {LivePreview, LiveError} from 'react-live';
import {
  borderColor,
  borderBottomColor,
  color,
  backgroundColor,
} from '@salad-ui/color';
import {spacings, px, py, p} from '@salad-ui/spacing';

const editorPadding = `10px`;

export const Wrapper = styled.div`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  ${borderColor('border.light')}
`;

export const Preview = styled(LivePreview)`
  ${px(2)}
  ${py(3)}
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  ${borderBottomColor('border.light')}
`;

export const EditorWrapper = styled.div`
  padding: calc(${spacings[2]} - ${editorPadding});
`;

export const EditorToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Imports = styled.div`
  padding: 0 ${editorPadding};
`;

export const Error = styled(LiveError)`
  ${p(1)}
  ${color('onError')}
  ${backgroundColor('error.light')}
`;
