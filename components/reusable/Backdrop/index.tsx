import classNames from 'classnames/bind';
import { DetailedHTMLProps, HTMLAttributes, LegacyRef } from 'react';

import { createPortal } from 'react-dom';

import styles from './Backdrop.module.scss';
import { Grid } from '../Grid/index';

const css = classNames.bind(styles);

// interface DrawerProps
//   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
//   backdropRef?: LegacyRef<HTMLDivElement> | undefined
//   isOpen: boolean
// }

// export const Backdrop: React.FC<DrawerProps> = ({
//   children,
//   backdropRef,
//   isOpen,
//   ...props
// }) => (
//   <>
//     {isOpen ? (
//       <div className={css("backdrop")} ref={backdropRef} {...props}>
//         {children}
//       </div>
//     ) : null}
//   </>
// )

interface BackdropProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ children, className, ...props }) => {
  const portal = document.getElementById('__next');
  return (
    <>
      {portal
        ? createPortal(
            <Grid container justifyContent="flex-end" {...props} className={css('backdrop')}>
              {children}
            </Grid>,
            portal,
          )
        : null}
    </>
  );
};
