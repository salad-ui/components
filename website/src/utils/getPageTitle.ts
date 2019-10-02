import {get} from 'dot-prop';

export function getPageTitle(props: any): string {
  return get<string>(props, 'pageContext.frontmatter.title');
}
