import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WaveForm from "../../components/waveform";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <WaveForm />
      <Footer/>
      <main className="flex flex-1 items-center justify-center">
        {/* Your main content here */}
        <h1 className="text-4xl font-bold">Welcome to the homepage</h1>
      </main>
    </div>
  );
}