import React from 'react'
import ImageOne from './img1.png'
import ImageTwo from './img2.png'
import ImageThree from './img3.png'
import ImageFour from './img4.png'
import ImageFive from './img5.png'
import ImageSix from './img6.png'
import ImageSeven from './img7.png'
import ImageEight from './img8.png'
import  Star from './star.png'
import './inspiration.css'
const Inspiration = () => {
  return (
    <div className='wrapper'>
      <h2>Inspiration for your next adventure</h2>
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
    </div>
  )
}

export default Inspiration
