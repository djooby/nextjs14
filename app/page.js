"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.replace("/dashboard")}>
        Go to dashboard
      </Button>
    </>
  );
}
