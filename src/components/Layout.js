export default function Layout({ children }) {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-top py-16">
      {children}
    </main>
  )
}
