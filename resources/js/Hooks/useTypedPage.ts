import { usePage } from '@inertiajs/react';
import { InertiaSharedProps } from '@/Types/InertiaSharedProps';

export default function useTypedPage<T = {}>() {
  return usePage<InertiaSharedProps<T>>();
}
