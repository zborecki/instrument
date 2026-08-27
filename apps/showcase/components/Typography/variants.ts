import { tv, VariantProps } from '@heroui/styles';

export const typographyVariants = tv({
  base: 'transition-colors',
  defaultVariants: {
    size: 'p',
    weight: 'regular',
    underline: false
  },
  variants: {
    color: {
      inherit: 'text-[inherit]'
    },
    size: {
      action: 'typography-action',
      h1: 'typography-h1',
      p: '',
      subhead1: 'typography-subhead1'
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium'
    },
    underline: {
      false: null,
      true: 'underline underline-offset-4 hover:no-underline'
    }
  }
});

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>;
