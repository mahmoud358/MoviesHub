import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { useDarkMode } from "../context/darkMode"

function Layout() {
    const { isDarkMode } = useDarkMode()
    return (
        <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} `}>
            <Header />
            <main className="px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout