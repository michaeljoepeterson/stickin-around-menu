import { MainHeader } from "@/components/headers/main-header";
import { SecondaryHeader } from "@/components/headers/secondary-header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHeader>
        test
      </MainHeader>
      <SecondaryHeader>
        test 2
      </SecondaryHeader>
    </main>
  );
}
