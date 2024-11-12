import { FC, ReactNode, Suspense } from 'react';
type ILazyRoute = {
    Comp : ReactNode;
}
export const LazyRoute:FC<ILazyRoute> = ({ Comp }) => {
    return (
      <Suspense fallback={<p>Идет загрузка</p>}>
        {Comp}
      </Suspense>
    );
  };