import { WrapperVariantsProps } from '@/components/Wrapper/variants';
import { ChildrenProps, IBaseProps } from '@/types/props/common';

export interface IWrapperProps
  extends IBaseProps, ChildrenProps<'required'>, WrapperVariantsProps {

}
