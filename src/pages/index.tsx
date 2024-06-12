import { Inter } from "next/font/google";
import { Header } from "@/components";
import { Chart } from "@/components/Chart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <Chart />
    </main>
  );
}
