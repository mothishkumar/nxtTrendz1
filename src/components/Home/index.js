// Write your JS code here
import {Component} from 'react'

import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">clothes that get you noticed</h1>
            <p className="home-description">
              Fashion is part of the daily air and it does not
              <br />
              quite help that it changes all the time. Clothes
              <br />
              have always been a marker of the era and we
              <br />
              are in a revolution. Your fashion makes you
              <br />
              been seen and heard that way you are. So,
              <br />
              celebrate the seasons new and exciting
              <br />
              fashion in your own way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
        </div>
      </>
    )
  }
}

export default Home
