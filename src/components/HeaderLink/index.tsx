import React from "react";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  label: string;
}

export function HeaderLink({ href, label }: LinkProps) {
  const router = useRouter();

  const isActive = router?.pathname?.includes(href);

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={isActive ? "active" : ""}
      disabled={isActive}
    >
      {label}
    </button>
  );
}
