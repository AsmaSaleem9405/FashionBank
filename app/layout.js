import './globals.css';

export const metadata = {
  title: 'Fashion Bank',
  description: 'Welcome to Fashion Bank',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fdfbf7] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}