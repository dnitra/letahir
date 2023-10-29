import { usePage } from '@inertiajs/react';
import { InertiaPageWithProps } from '@/Types/InertiaPageWithProps';

export default function useTypedPage<T = {}>() {
  return usePage<InertiaPageWithProps<T>>();
}
