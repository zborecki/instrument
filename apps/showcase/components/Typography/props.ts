import { ILink } from '@instrument/types/types/common';

import { TypographyVariantsProps } from '@/components/Typography/variants';
import { ChildrenProps, IBaseProps } from '@/types/props/common';
import { TypographyComponentType } from '@/types/props/component-types';

type TypographyBaseProps = IBaseProps & ChildrenProps & TypographyVariantsProps;

type TypographyLinkProps = Pick<ILink, 'href' | 'isExternal'> & {
  componentType: 'a';
}

type TypographyNonLinkProps = {
  componentType?: TypographyComponentType;
  href?: never;
  isExternal?: never;
}

export type TypographyProps = TypographyBaseProps & (TypographyLinkProps | TypographyNonLinkProps);
