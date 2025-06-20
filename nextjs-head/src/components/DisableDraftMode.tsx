'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { disableDraftMode } from '@/app/actions';
export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (window === window.parent && !window.opener) {
      setShouldRender(true);
    }
  }, []);

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });
  if (!shouldRender) return null;
  return (
    <div className="fixed bottom-4 left-4 bg-gray-50 text-black px-4 py-2 rounded">
      {pending ? (
        'Disabling draft mode...'
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}
