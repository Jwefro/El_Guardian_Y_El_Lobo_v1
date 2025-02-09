import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { cn } from '../../lib/utils';

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <main className={cn('flex flex-col items-center pt-12', className)} {...props}>
      {children}
    </main>
  );
};

export default Main;
