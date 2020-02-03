import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  color: white;
  border: none;
  width: 100%;
`

const OptionWrap = styled.ul`
  position: absolute;
  display: none;
  top: 20px;
  left: 0;
  height: 200px;
  width: 100%;
  background: #f9f9f9;
  border-top: 1px solid #000;
  ${({ active }) => active && `
    display: block; 
  `}

`

const Option = styled.li`
  color: #000;
  cursor: pointer;
  padding: 0 0 0 10px;
`

const StyledButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: 0;
  height: 21px;
  background: #fff;
  border: 0;
  text-transform: capitalize;
  cursor: pointer;

`

const Filter = ({itemsLimit, setItemsLimit}) => {
  const [filterVisible, setfilterVisible] = useState(false)

  function togglefilterVisible() {
    setfilterVisible(!filterVisible);
  }

  return (
    <Wrap>
      <StyledButton onClick={togglefilterVisible}>{(itemsLimit === null || itemsLimit === Infinity) ? 'All' : itemsLimit}</StyledButton>
      <OptionWrap active={filterVisible === true}>
        <Option onClick={() => { setItemsLimit(Infinity); this.handleShow(false) }}>show All</Option>
        <Option onClick={() => { setItemsLimit(10); this.handleShow(false) }}>upto 10</Option>
        <Option onClick={() => { setItemsLimit(100); this.handleShow(false) }}>upto 100</Option>
        <Option onClick={() => { setItemsLimit(200); this.handleShow(false) }}>upto 200</Option>
      </OptionWrap>
    </Wrap>
  )
}

export default Filter
