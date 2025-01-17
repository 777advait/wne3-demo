import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Purple gradient orb on the left */}
      <div className="absolute left-20 bottom-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
      
      {/* Purple X shape on the right */}
      <div className="absolute right-20 top-1/2 w-64 h-64">
        <Image
          src="/purple-x.png"
          alt="Decorative X"
          width={256}
          height={256}
          className="opacity-80"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
        {/* Logo */}
        
        
        {/* Subtitle */}
        <p className="text-purple-400 text-xl mb-4">Introducing WNE3 Live</p>
        
        {/* Main Heading */}
        <h1 className="text-6xl font-bold leading-tight mb-6 mx-auto">
          Ecommerce powered by Generative AI
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl text-gray-300 mb-12">
          Your imagination is your product
        </p>
        
        {/* CTA Button */}
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium"
        >
          <Link href="search">
            Get Started →
          </Link>
        </Button>

        {/* Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 shadow-2xl overflow-hidden">
            <Image
              src="https://www.wne3.com/assets/merchandise%20store-EXOmCLaO.svg"
              alt="WNE3 Dashboard Preview"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}