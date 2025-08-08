import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full">
      <h1 className={cn("", font.className)}>Home!</h1>
    </main>
  );
}
