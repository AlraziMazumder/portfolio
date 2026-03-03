import './globals.css';

export const metadata = {
  title: 'A. Raziq | Modern Digital Marketing Portfolio',
  description:
    'Modern digital marketing portfolio featuring full-funnel growth strategy, performance media, SEO, CRO, and lifecycle marketing outcomes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
