import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface iHome extends RouteComponentProps<{}> {}

const _Home:React.FC<iHome> = props => {
  const { history } = props

  const jampToCounter = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      history.push('/counter')
    },
    []
  )

  return (
    <React.Fragment>
      <h1>home</h1>
      <a href="#" onClick={jampToCounter}>Counter</a>
    </React.Fragment>
  )
}

export const Home = withRouter(_Home) 