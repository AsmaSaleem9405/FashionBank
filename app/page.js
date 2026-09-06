import Navbar from '@/app/components/Navbar';
import Hero from '@/app/Hero/page';

export const metadata = {
  title: 'Fashion Bank',
  description: 'Welcome to Fashion Bank',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fdfbf7] text-gray-900">
        {/* Navbar component */}
        <Navbar />

        {/* Page content */}
        <main className="pt-24">
          <Hero />
          {children}
        </main>
      </body>
    </html>
  );
}