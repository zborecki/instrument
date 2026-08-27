import { cn } from '@heroui/styles';

import { IWrapperProps } from '@/components/Wrapper/props';
import { wrapperVariants } from '@/components/Wrapper/variants';

const Wrapper = ({
  className, children, ...props
}: IWrapperProps) => {
  const classes = wrapperVariants(props);

  return (
    <div className={cn(classes, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
