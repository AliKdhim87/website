import React, { useEffect } from 'react';

export const useClickOutsideDialog = ({
  dialogRef,
  isDialogOpen,
}: {
  dialogRef: React.RefObject<HTMLDialogElement>;
  isDialogOpen: boolean;
}) => {
  useEffect(() => {
    // Ensure dialogRef.current is captured once in the effect
    const element = dialogRef.current;
    if (!element) return;

    const clickHandler = (event: MouseEvent) => {
      if (event.target === element) {
        element.close();
      }
    };

    if (isDialogOpen) {
      element.addEventListener('click', clickHandler);
    }

    return () => {
      if (isDialogOpen) {
        element.removeEventListener('click', clickHandler);
      }
    };
  }, [dialogRef, isDialogOpen]);
};
