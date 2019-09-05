import {get} from 'dot-prop';

export function getTitle(props: any): string {
  return get<string>(props, 'pageContext.frontmatter.title');
}
