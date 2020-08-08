import React from 'react'
import styled from 'styled-components'
import { Header as _Header } from './Header'
import { Column } from './Column'

export function App() {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text: 'もくもくする' },
              { id: 'b', text: '本読む' },
              { id: 'c', text: '寝る' },
            ]}
          />
          <Column
            title="Doing"
            cards={[
              { id: 'd', text: '食器洗い' },
              { id: 'e', text: '洗濯' },
            ]}
          />
          <Column title="Wating" cards={[]} />
          <Column title="Done" cards={[{ id: 'f', text: '起きる' }]} />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled(_Header)`
  flex-shrink: 0;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`
