
export const measureWidthOrHeight = (element: React.RefObject<HTMLDivElement>, property: 'width' | 'height'): number | null => {
  const el = element.current;
  if (!el) {
    return null;
  }
  el.style.display = 'block'; // make the element visible
  el.style.transitionProperty = 'none'; // disable transitions
  el.style[property] = 'auto'; // force the width/height to be "auto"
  el.offsetHeight;
  const widthOrHeight = window.getComputedStyle(el)[property]; // measure the width/height with "auto"
  el.style[property] = null; // restore the original size
  el.style.transitionProperty = ''; // restore transitions
  el.style.display = null; // restore visibility
  el.offsetHeight;
  return parseFloat(widthOrHeight || '0');
}
