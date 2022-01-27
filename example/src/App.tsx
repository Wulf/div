import React from 'react'

import { Div } from 'div'

const App = () => {
  return (
    <Div column>
      <Div row>
        <a href='https://github.com/wulf/div'>
          <h1>div</h1>
        </a>
      </Div>
      <Div row>
        <Div column flex={1} style={{ backgroundColor: 'cadetblue', color: 'papayawhip' }}>
          A third of the space!
        </Div>

        <Div column center style={{ width: '300px', height: '75px' }}>
          This one has centered content!
        </Div>

        <Div column flex={2} style={{ backgroundColor: 'royalblue', color: 'palevioletred' }}>
          Two thirds of space!
        </Div>
      </Div>
      <Div />
    </Div>
  )
}

export default App
