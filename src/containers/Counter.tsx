import React from 'react'
import iRootState from '../redux/rootState'
import { useSelector, useDispatch } from 'react-redux'
import { counterModule } from '../modules/counterModule'

const count = (state: iRootState): number => state.counter.count

export const Counter:React.FC = () => {
  const stateCount = useSelector(count)
  const dispatch = useDispatch()

  const addHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      dispatch(counterModule.action.add(1))
    },
    []
  )

  return (
    <div>
      {stateCount}:<button type="button" onClick={addHandler}>add</button>
    </div>
  )
}