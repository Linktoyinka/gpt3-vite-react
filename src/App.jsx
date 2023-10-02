import "./App.css";
// import React from 'react'
import { Article, Brand, Cta, Feature, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'

const App = () => {
  return (
    <main className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      
    </main>
  )
}

export default App

