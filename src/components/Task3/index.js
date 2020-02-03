import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../Reusable/Container'
import * as palette from '../../variables'
import H2 from '../Reusable/H2'
import H3 from '../Reusable/H3'
import Button from '../Reusable/Button'
import SelectedElements from './SelectedElements'
import Filter from './Filter'


const WidgetWrap = styled.div`
  display: grid;
  width: 600px;
  border: 1px solid ${palette.borderColor};
  background: #fff;
  padding: 20px;
  justify-items: start;
`

const ListWrap = styled.div`
  width: 100%;
  background: ${palette.lightGrey};
  padding: 20px;
  color: #fff;
  text-align: left;
`

const ElementsListWrap = styled.div`
  background: #000;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`

const SearchFilterWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50% ;
`

const SearchFilterText = styled.div`
  display: flex;
  text-align: left;
  align-items: start;
  margin-top: 7px;
  padding: 0 10px 0 0;
`

const SearchOption = styled.div`
  display: flex;
  flex: 1;
`

const ElementWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 5px 0 5px 20px;
  cursor: pointer;
  text-transform: capitalize;
`

const SearchBar = styled.div`
  padding: 0 0 20px 0;
  justify-items: start;
  flex: auto;
`

const FilterOption = styled.div`
  display: flex;
  flex; 1;
`

const Form = styled.form`
  padding: 0;
  margin: 0;
  display: inline;
`
const Checkbox = styled.input`
  margin: 0 5px 1px 0;
`

const Task3 = React.memo(() => {
  const [listVisible, setListVisible] = useState(false)
  const [savedElements, setSavedElements] = useState([])
  const [elements, setElements] = useState(
    [...Array(301)].map(
      (_, i) => ({ name: `element ${i}`, selected: i < 3, id: `element_uid_${i}}` }),
    ),
  )
  const [searchValue, setSearchValue] = useState('')
  const handleCheckedStatusChange = (element) => {
    setElements([...elements.map((i) => element.id === i.id ? { ...i, selected: !element.selected } : i)])
  }

  const saveChangedElements = (element) => {
    setSavedElements([...element])
  }

  const [itemsLimit, setItemsLimit] = useState(null)
    return (
      <Container>
        <WidgetWrap>
          <H2>Select Items</H2>
          <H3>
            You currently have&nbsp;
            {savedElements.length}
            &nbsp;selected items
          </H3>
          <SelectedElements selectedItems={savedElements.length > 0 && savedElements.map((savedElement) => savedElement)} onRemoveItem={(savedElement) => handleCheckedStatusChange(savedElement)} />
          <Button onClick={setListVisible}>change my choice</Button>
          {listVisible &&
          <ListWrap>
            <H3>
              Select Items
            </H3>
            <SearchFilterWrap>
              <SearchOption>
                <SearchFilterText>
                Search
                </SearchFilterText>
                <SearchBar>
                  <Form>
                    <input
                      name="text"
                      type="text"
                      onChange={(e) => setSearchValue(e.target.value)}
                      value={searchValue}
                    />
                  </Form>
                </SearchBar>
              </SearchOption>
              <FilterOption>
                <SearchFilterText>
                  Filter
                </SearchFilterText>
                <Filter setItemsLimit={setItemsLimit} itemsLimit={itemsLimit} />
              </FilterOption>
            </SearchFilterWrap>
            <ElementsListWrap>
              {elements.slice(0, itemsLimit !== null ? itemsLimit : Infinity)
              .filter((element) => new RegExp(`^${searchValue.toLowerCase()}`).test(element.name))
              .map((element) => (
                <div
                  key={element.name}
                >
                  <ElementWrap>
                    <Checkbox
                      key={element.name}
                      onChange={() => handleCheckedStatusChange(element)}
                      type="checkbox"
                      checked={element.selected === true}
                      disabled={elements.filter((filteredElement) => filteredElement.selected).length > 2 && element.selected !== true}
                    />
                    {element.name}
                  </ElementWrap>
                </div>
                ),
              )}
            </ElementsListWrap>
            <SelectedElements selectedItems={elements.filter((filteredElement) => filteredElement.selected)} onRemoveItem={(element) => handleCheckedStatusChange(element)} />
            <Button onClick={() => saveChangedElements(elements.filter(filteredElement => filteredElement.selected === true))}>Save</Button>
            <Button onClick={() => setListVisible(false)}>cancel</Button>
          </ListWrap>
          }
        </WidgetWrap>
      </Container>
    )
  })

export default Task3
