import { tv, VariantProps } from '@heroui/styles';

export const wrapperVariants = tv({
  base: 'box-content',
  defaultVariants: {
    centered: true,
    padding: 'default',
    width: 'default'
  },
  variants: {
    centered: {
      false: null,
      true: 'mx-auto'
    },
    padding: {
      false: null,
      default: 'px-4'
    },
    width: {
      default: 'max-w-7xl'
    }
  }
});

export type WrapperVariantsProps = VariantProps<typeof wrapperVariants>;
