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
    <a href={href} className={isActive ? "active" : ""}>
      {label}
    </a>
  );
}
