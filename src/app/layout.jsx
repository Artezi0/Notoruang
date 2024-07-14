import "./scss/globals.scss";

export const metadata = {
  title: "Notoruang",
  description: "Pesona Jawa di Setiap Sudut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
