import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './place.css'
import  Star from './star.png'
import Location from './location.svg'
import ImageOne from './img1.png'
import ImageTwo from './img2.png'
import ImageThree from './img3.png'
import ImageFour from './img4.png'
import ImageFive from './img5.png'
import ImageSix from './img6.png'
import ImageSeven from './img7.png'
import ImageEight from './img8.png'
import ImageNine from './img9.png'
import ImageTen from './img10.png'
import ImageEleven from './img11.png'
import ImageTwelve from './img12.png'
import ImageThirteen from './img13.png'
import ImageFourteen from './img14.png'
import ImageFifteen from './img15.png'
import ImageSixteen from './img16.png'
const Place = () => {
  return (
    <div>
      <Nav/>
      <div className="container-place">
        <div className="links-place">
          <ul>
            <li><a href="">Resturant</a></li>
            <li><a href="">Cottage</a></li>
            <li><a href="">Castle</a></li>
            <li><a href="">fantast city</a></li>
            <li><a href="">beach</a></li>
            <li><a href="">Carbins</a></li>
            <li><a href="">Off-grid</a></li>
            <li><a href="">Farm</a></li>
            </ul>
            <div className='location'> 
            <p>Location</p>
                <img src={Location} alt="" />
              </div>
          
        </div>
        <div className="links-images">
        <div className="gallery">
        <div className="card">
          <img src={ImageOne} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageTwo} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageThree} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageFour} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="card">
          <img src={ImageFive} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageSix} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageSeven} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageEight} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
      </div>
      {/**Secon batch of gallery */}
      <div className="gallery">
        <div className="card">
          <img src={ImageNine} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageTen} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageEleven} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageTwelve} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="card">
          <img src={ImageThirteen} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageFourteen} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageFifteen} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
        <div className="card">
          <img src={ImageSixteen} />
          <p>Desert king <span className='night'>1MBT per night</span></p>
          <p>2345km away <span className='away'>available for 2weeks stay</span></p>
          <div className="stars">
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
           <img src={Star}/>
          </div>
        </div>
      </div>
        </div>{/** Links images end*/}
      </div>
      <Footer/>
    </div>
  )
}

export default Place
