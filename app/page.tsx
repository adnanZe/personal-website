import Image from "next/image";
import PageTitle from "./components/pageTitle";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <PageTitle />
    </main>
  );
}
