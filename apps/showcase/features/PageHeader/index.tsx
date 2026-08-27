import { cn } from '@heroui/styles';

import Typography from '@/components/Typography';
import Wrapper from '@/components/Wrapper';
import PageHeaderBottom from '@/features/PageHeader/components/PageHeaderBottom';
import { IPageHeaderProps } from '@/features/PageHeader/components/props';
import { pageHeaderVariants } from '@/features/PageHeader/variants';
import { createCSSVariables } from '@/utils/createCSSVariables';

const PageHeader = ({ className, ...props }: IPageHeaderProps) => {
  const classes = pageHeaderVariants(props);

  return (
    <section
      className={cn(classes.base(), className)}
      style={createCSSVariables({
        'page-header-background': 'pink',
        'page-header-text': 'green'
      })}
    >
      <Wrapper>
        <Typography
          color='inherit'
          componentType='h2'
          size='h1'
          weight='medium'
        >
          Hello world
        </Typography>
        <PageHeaderBottom />
      </Wrapper>
    </section>
  );
};

export default PageHeader;
