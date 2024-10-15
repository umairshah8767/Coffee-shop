import {  Jost } from 'next/font/google'
import "./globals.css";


const jost = Jost({subsets:["latin"]});


export const metadata = {
  title: "Coffee Shop",
  description: "Coffee Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jost.className}> {children} </body>
    </html>
  );
}
