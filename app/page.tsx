import Image from "next/image";
import PageTitle from "./components/pageTitle";

export default function Home() {
  const mainTitle = "adnan zecheria";

  return (
    <main className="flex justify-center items-center h-screen">
      <PageTitle title={mainTitle} />
    </main>
  );
}
