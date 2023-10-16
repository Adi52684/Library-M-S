import React from 'react'

const Viewstudents = () => {
  return (
    <div class="vscontainer">
            <div class="vscard">
                {/* <img src="image1.jpg" alt="Book 1"> */}
                <ul>
                    <li><strong>Name:</strong> MR.X</li>
                </ul>
                <div class="vsbuttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>

            </div>
            <div class="vscard">
                {/* <img src="image1.jpg" alt="Book 1"> */}
                <ul>
                    <li><strong>Name:</strong> MR.Xx</li>
                </ul>

                <div class="vsbuttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>

            </div>
            <div class="vscard">
                {/* <img src="image1.jpg" alt="Book 1"> */}
                <ul>
                    <li><strong>Name:</strong> MR.Xy</li>
                </ul>
                <div class="vsbuttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>

            </div>

            <div class="vscard">
                {/* <img src="image2.jpg" alt="Book 2"> */}
                <ul>
                    <li><strong>Name:</strong> MR.Xyx</li>
                </ul>

                <div class="vsbuttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
            {/* <!-- Add more cards here --> */}
        </div>
  )
}

export default Viewstudents