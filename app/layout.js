import '@/styles/globals.css';

export const metadata = {
  title: "Next Auth Demo",
  description: "Next Auth Demo",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  );
}

export default RootLayout;