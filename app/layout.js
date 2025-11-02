export const metadata = {
  title: 'Nebula Tasks',
  description: 'A unique todo list experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
