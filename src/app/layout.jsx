"use client"

import "./scss/globals.scss";
import { AuthContextProvider } from "./context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Notoruang</title>
        <meta name="description" content="Pesona Jawa di Setiap Sudut" />
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ropa+Sans:ital@0;1&display=swap"></link>
      </head>
      <AuthContextProvider>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
