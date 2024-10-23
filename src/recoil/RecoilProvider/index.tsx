import { RecoilRoot } from 'recoil';
import { ReactNode } from 'react';

interface RecoilProviderProps {
  children: ReactNode;
}

export const RecoilProvider = ({ children }: RecoilProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};