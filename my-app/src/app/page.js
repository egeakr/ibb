import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={"/hakkimizda"}>Hakkimizda</Link>
      <br />
      <Link href={"/hakkimizda-ukome"}>UKOME</Link>
    </main>
  );
}
