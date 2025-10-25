// import { useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Header } from './components/Header'
import { Stack } from './components/Stack'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function App() {

  return (
    <>
    <Header/>
    <About name ="Chukwudi Gabriel Chimnonso" skill ="Learning" DOB = "Error" age ="infnity" />
    <Stack></Stack>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
