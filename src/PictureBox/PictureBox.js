import React from 'react' 
import './PictureBox.css'

function PictureBox({ photo, box }) {
	return (
			
				<div className = 'PictureBox'>
					<img src={photo} alt="Sorry, we didnt catch that! Try re-pasting your photo's URL on the previous page.." id='imagine' style={{width: 800, height: "auto"}}/>
					<div className="box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
				</div>
				)
}

export default PictureBox