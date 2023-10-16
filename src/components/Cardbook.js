import React from 'react'
import Book1 from '../assets/Book1.jpg'
import Book2 from '../assets/Book2.jpg'
import Book3 from '../assets/Book3.jpg'
import Book4 from '../assets/Book4.jpg'
import Book5 from '../assets/Book5.jpg'
import Book6 from '../assets/Book6.jpg'
import Book7 from '../assets/Book7.jpg'
import Book8 from '../assets/Book8.jpg'
import Book9 from '../assets/Book9.jpg'

const Cardbook = () => {
  return (
    <div class="vbcontainer">
                <div class="vbcard">
                    <img src={Book1} className='image' alt="Book 1" />
                    <ul>
                        <li><strong>Book name:</strong>BHAGVAD GITA</li>
                        <li><strong>Author name:</strong>A. C. Bhaktivedanta Swami Prabhupada</li>
                    </ul>
                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>
                <div class="vbcard">
                    <img src={Book2} className='image' alt="Book 2" />
                    <ul>
                        <li><strong>Book name:</strong>RICH DAD POOR DAD</li>
                        <li><strong>Author name:</strong>Robert Kiyosaki</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>
                <div class="vbcard">
                    <img src={Book3} className='image2' alt="Book 3" />


                    <ul>
                        <li><strong>Book name:</strong>The Growth Mindset</li>
                        <li><strong>Author name:</strong>Helen Glasgow</li>
                    </ul>
                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>

                <div class="vbcard">
                    <img src={Book4} className='image' alt="Book 4" />

                    <ul>
                        <li><strong>Book name:</strong>The Secret</li><br /><br />
                        <li><strong>Author name:</strong>Rhonda Byrne</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                <div class="vbcard">
                    <img src={Book5} className='image' alt="Book 5" />

                    <ul>
                        <li><strong>Book name:</strong>CAN'T HURT ME</li><br />
                        <li><strong>Author name:</strong>David Goggins</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                <div class="vbcard">
                    <img src={Book6} className='image' alt="Book 6" />

                    <ul>
                        <li><strong>Book name:</strong>The Yearly Current Affairs 2023</li>
                        <li><strong>Author name:</strong> Ashish Gautam</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                <div class="vbcard">
                    <img src={Book7} className='image' alt="Book 7" />

                    <ul>
                        <li><strong>Book name:</strong>Discrete Mathematics</li>
                        <li><strong>Author name:</strong>Richard Johnsonbaugh </li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                <div class="vbcard">
                    <img src={Book8} className='image' alt="Book 8" />

                    <ul>
                        <li><strong>Book name:</strong>Software Engineering</li>
                        <li><strong>Author name:</strong>Amarjeet Singh</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                <div class="vbcard">
                    <img src={Book9} className='image' alt="Book 9" />

                    <ul>
                        <li><strong>Book name:</strong>Voice of Stone</li><br /><br />
                        <li><strong>Author name:</strong>Prabir Rout</li>
                    </ul>

                    <div class="vbbuttons">
                        <button class="view">view</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            </div>
  )
}

export default Cardbook