
import Modal from '../components/Commons/Modal'
import Header from '../components/Layout/Header'
import Main from '../components/Layout/Main'
import TestModals from '../components/Layout/TestModals'
// import Mypage from '../components/Mypage'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
    <Header/>
    <Component {...pageProps} />
    {/* <Content/> */}
    
    </div>
  )
}

export default MyApp
