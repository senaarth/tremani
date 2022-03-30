import React from "react";
import { useRouter } from "next/router";

export default function page404() {
  const router = useRouter();

  React.useEffect(() => {
    if (router) router?.push("/");
  }, []);

  return <></>;
}
