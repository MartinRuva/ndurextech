"use client";
import HeroSlider from "./Heroswiper";
import Link from "next/link";
export default function Herosliderlayout() {
  return (
   <div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">
    <HeroSlider />
  </div>

  <div className="w-full md:w-1/2 flex items-center p-10">
    <div>
      <h1 className="text-4xl font-bold">Fast Electronics Repair</h1>
      <p className="mt-4">Fridges, Air conditioning, TVs & more</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
      <Link
  href="/contact"
  className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
>
  Book Repair
</Link>
      </button>
    </div>
  </div>
</div>
  );
}