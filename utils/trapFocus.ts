export const trapFocus = (element: HTMLElement, prevFocusableElement = document.activeElement) => {
  const focusableEls = Array.from(
    element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
    ),
  );
  const firstFocusableEl = focusableEls[0] as any;
  const lastFocusableEl = focusableEls[focusableEls.length - 1] as any;
  let currentFocus: Element | null = null;

  firstFocusableEl?.focus();
  currentFocus = firstFocusableEl;

  const handleFocus = (e: any) => {
    e.preventDefault();
    // if the focused element "lives" in your modal container then just focus it
    if (focusableEls.includes(e.target)) {
      currentFocus = e.target;
    } else {
      // you're out of the container
      // if previously the focused element was the first element then focus the last
      // element - means you were using the shift key
      if (currentFocus === firstFocusableEl) {
        lastFocusableEl.focus();
      } else {
        // you previously were focused on the last element so just focus the first one
        firstFocusableEl.focus();
      }
      // update the current focus var
      currentFocus = document.activeElement;
    }
  };

  document.addEventListener('focus', handleFocus, true);

  return {
    onClose: () => {
      document.removeEventListener('focus', handleFocus, true);
      (prevFocusableElement as any).focus();
    },
  };
};
