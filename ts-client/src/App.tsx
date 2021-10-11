import React from 'react'

export interface IApplication {}

const App :React.FC<IApplication> = () => {
  return (<header>
    Hello world!
  </header>)
}

export default App
