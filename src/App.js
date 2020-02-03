import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import media from './components/Reusable/media'
import Header from './components/Header'
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'
import NotFound from './components/NotFound'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    background: #f2f2f2;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}
`

const Wrap = styled.div`
  position: relative;
`

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  min-height: calc(100vh - 80px);
  ${media.lg`
    min-height: calc(100vh - 50px);
  `}
`

const App = () => (
  <Wrap>
    <GlobalStyle whiteColor />
    <Header />
    <MainWrap>
      <Switch>
        <Route exact path="/">
          <Task1 />
        </Route>
        <Route path="/task2">
          <Task2 />
        </Route>
        <Route path="/task3">
          <Task3 />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </MainWrap>
  </Wrap>
)

export default App
