import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';

import { Grid, GridProps } from '../Grid/index';

import styles from './Backdrop.module.scss';

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
interface BackdropProps extends GridProps {
  parent?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ children, ref, parent = '__next' }) => {
  const portal = document.getElementById(parent);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {portal
        ? createPortal(
            <Grid ref={ref} container justifyContent="flex-end" className={css('backdrop')}>
              {children}
            </Grid>,
            portal,
          )
        : null}
    </>
  );
};
