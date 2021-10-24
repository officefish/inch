import * as React from 'react'

import { Router, Switch, Route } from "react-router-dom"

import { connect } from "react-redux"

export interface IApplication {}

const App :React.FC<IApplication> = () => {
  return (<header>
    Hello world!
  </header>)
}

export default App
