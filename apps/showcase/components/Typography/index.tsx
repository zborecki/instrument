import { cn } from '@heroui/styles';

import { TypographyProps } from '@/components/Typography/props';
import { typographyVariants } from '@/components/Typography/variants';
import { Link } from '@/i18n/navigation';

const Typography = ({
  className, children, componentType, href, isExternal, ...props
}: TypographyProps) => {
  const Component = componentType ?? 'p';
  const classes = typographyVariants(props);

  if (Component === 'a' && href) {
    return (
      <Link
        className={cn(classes, className)}
        href={href}
        target={isExternal ? '_blank' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <Component className={cn(classes, className)}>
      {children}
    </Component>
  );
};

export default Typography;
