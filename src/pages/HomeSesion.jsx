import React, { Suspense} from 'react'
import requests from '../Requests'


const Main = React.lazy(() => import('../components/Main'))
const Row = React.lazy(() => import('../components/Row'))

const HomeSesion = () => {

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
          <Row rowID='1' title='Poximamente' fetchURL={requests.requestUpcoming}/>
          <Row rowID='2' title='Populares' fetchURL={requests.requestPopular}/>
          <Row rowID='3' title='Tendencias' fetchURL={requests.requestTrending}/>
          <Row rowID='4' title='Los mas valorados' fetchURL={requests.requestTopRated}/>
          <Row rowID='5' title='Terror'fetchURL={requests.requestHorror}/>
        </Suspense>
    </>
  )
}

export default HomeSesion
