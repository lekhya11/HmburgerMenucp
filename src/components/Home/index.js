import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-img"
      />
    </div>
  </div>
)

export default Home
