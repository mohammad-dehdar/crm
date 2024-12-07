import Link from "next/link"
import { Github } from 'lucide-react'


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-b-xl text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={"/"} className="font-bold text-2xl md:text-3xl">CRM Project</Link>
          <Link
            href="/add-customer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out"
          >
            Add Customer
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-slate-800 text-white mt-auto rounded-t-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="font-semibold text-xl">Mohammad Dehdar</p>
              <a
                href="https://github.com/mohammad-dehdar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </div>
            <span className="text-slate-300">NextJs Developer</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

