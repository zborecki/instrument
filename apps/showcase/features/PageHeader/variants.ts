import { tv, VariantProps } from '@heroui/styles';

export const pageHeaderVariants = tv({
  defaultVariants: {
    background: 'black',
    text: 'white',
    padding: 'default'
  },
  slots: {
    text: null
  },
  variants: {
    background: {
      black: 'bg-black',
      custom: 'bg-(--page-header-background)'
    },
    text: {
      custom: 'text-(--page-header-text)',
      white: 'text-white'
    },
    padding: {
      default: 'py-24'
    }
  }
});

export type PageHeaderVariantsProps = VariantProps<typeof pageHeaderVariants>;
