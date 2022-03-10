import React from 'react'
import './MainLayout.css'
import Navigation from '../Navigation/Navigation'
import Header from '../Components/Shared/Header/Header'
import Topbar from '../Components/Shared/Topbar/Topbar'
import Footer from '../Components/Shared/Footer/Footer'

function Main() {

    
    return (
        <div className="flex-container flex-cols">
            <Topbar/>
        <header className="flex-rows w-100">
            <Header/>
        </header>
        <main>
            <Navigation/>
        </main>
        <footer>
            <Footer/>
        </footer>
            
        </div>
    )
}

export default Main
