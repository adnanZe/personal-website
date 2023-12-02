import GridNavigation from "./components/gridNavigation";
import MainTitle from "./components/mainTitle";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen relative">
      <MainTitle />
      <GridNavigation />
    </main>
  );
}
