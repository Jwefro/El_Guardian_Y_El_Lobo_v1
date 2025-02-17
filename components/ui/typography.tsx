/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';

import { cn } from '@/lib/utils';

const variants = {
  h1: 'scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl',
  h2: 'scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  lead: 'text-xl text-muted-foreground',
  quote: 'mt-6 border-l-2 pl-6 italic',
  inlineCode: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  small: 'text-sm font-medium leading-none',
  large: 'text-lg font-semibold',
  muted: 'text-sm text-muted-foreground',
};

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode[] | React.ReactNode;
  variant?: keyof typeof variants;

}

export const Typography: FC<TypographyProps> = ({ variant = 'p', children, className }) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={cn(variants.h1, className)}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(variants.h2, className)}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(variants.h3, className)}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cn(variants.h4, className)}>
          {children}
        </h4>
      );
    case 'p':
      return (
        <p className={cn(variants.p, className)}>
          {children}
        </p>
      );
    case 'lead':
      return (
        <p className={cn(variants.lead, className)}>
          {children}
        </p>
      );
    case 'quote':
      return (
        <p className={cn(variants.quote, className)}>
          {children}
        </p>
      );
    case 'inlineCode':
      return (
        <code className={cn(variants.inlineCode, className)}>
          {children}
        </code>
      );
    case 'small':
      return (
        <small className={cn(variants.small, className)}>
          {children}
        </small>
      );
    case 'large':
      return (
        <div className={cn(variants.large, className)}>
          {children}
        </div>
      );
    case 'muted':
      return (
        <small className={cn(variants.muted, className)}>
          {children}
        </small>
      );
  }
};
