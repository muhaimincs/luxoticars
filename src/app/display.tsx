import Image from "next/image";
import { headers } from "next/headers";

import ResetImg from "./og.jpg";
import underMaintenanceImage from "./under-maintenance.jpg";
import { isMobile } from "~/utils/is-mobile";

export function Display() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  if (mobileCheck) {
    return (
      <Image
        className="object-cover rounded"
        src={underMaintenanceImage}
        alt="RESET"
        priority
      />
    )
  }

  return (
    <Image
      className="object-cover rounded"
      src={ResetImg}
      alt="RESET"
      priority
    />
  )
}