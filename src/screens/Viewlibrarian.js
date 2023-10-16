import React from 'react'
import librarian1 from '../assets/librarian1.jpeg'
import librarian2 from '../assets/librarian2.jpeg'
import librarian3 from '../assets/librarian3.jpeg'
import librarian4 from '../assets/librarian4.jpg'
// import librarianregistrationbackground from '../asset/librarianregistrationbackground.png'

const Viewlibrarian = () => {
    return (
        <div className="vlbody">

            <div class="vlcontainer">
                
                <div class="vlcard">
                    {/* <img src="image1.jpg" alt="Book 1"> */}
                    <img src={librarian1} alt="librarian1" />
                    <ul>
                        <li><strong>Name:</strong>Basir Khan</li>
                    </ul>
                    <div class="vlbuttons">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>
                <div class="vlcard">
                    {/* <img src="image1.jpg" alt="Book 1"> */}
                    <img src={librarian2} alt="librarian2" />
                    <ul>
                        <li><strong>Name:</strong>Jitendra Sahoo</li>
                    </ul>

                    <div class="vlbuttons">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>
                <div class="vlcard">
                    {/* <img src="image1.jpg" alt="Book 1"> */}
                    <img src={librarian3} alt="librarian3" />
                    <ul>
                        <li><strong>Name:</strong>Ashutosh Mahapatra</li>
                    </ul>
                    <div class="vlbuttons">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>

                </div>

                <div class="vlcard">
                    {/* <img src="image2.jpg" alt="Book 2"> */}
                    <img src={librarian4} alt="librarian4" />
                    <ul>
                        <li><strong>Name:</strong>Rajashree shukhla</li>
                    </ul>

                    <div class="vlbuttons">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
                {/* <!-- Add more cards here --> */}
            </div>
        </div>
    )
}

export default Viewlibrarian