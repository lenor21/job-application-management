export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='container mx-auto px-4 py-6 md:py-0 lg:px-6 min-h-full h-auto grid place-items-center'>{children}</div>;
}
