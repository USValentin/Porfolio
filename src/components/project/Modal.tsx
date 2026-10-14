"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { CloseIcon } from "@/components/ui/Icons";

type Props = { children: ReactNode; closeLabel: string; labelledBy: string };

/**
 * Project modal opened by the intercepted `/[lang]/projets/[slug]` route.
 * Native <dialog> gives focus trapping, Escape and the top layer for free;
 * closing goes back in history so the URL returns to the index.
 */
export function Modal({ children, closeLabel, labelledBy }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const close = () => router.back();

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={close}
      onClick={(event) => {
        // A click on the backdrop lands on the <dialog> element itself.
        if (event.target === event.currentTarget) close();
      }}
      className="project-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(760px,calc(100vw-2rem))] overflow-y-auto overscroll-contain bg-ground p-0 text-ink"
    >
      <div className="relative p-5 sm:p-9">
        <button
          type="button"
          onClick={close}
          aria-label={closeLabel}
          className="absolute top-4 right-4 flex size-11 items-center justify-center border border-ink transition-[transform,background-color] duration-150 ease-[var(--ease-out-quint)] hover:bg-hover active:scale-[0.97] motion-reduce:transition-none sm:top-6 sm:right-6"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </dialog>
  );
}
