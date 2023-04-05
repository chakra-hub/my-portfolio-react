import React from 'react'
import Project from './Project'
import ProjectOther from './ProjectOther'
import FoodBox from '../../src/foodbox-image.jpg'
import Youtube from '../../src/youtube-image.jpg'
import Resumai from '../../src/resumai-image.jpg'

const Portfolio = () => {
    let desc_foodbox = 'FoodBox - A food delivery app that enables users to search restaurants from different cities, browse menus, add items to their cart and see the final price of all the items added.'
    let youtube_desc = ' MyTube - A YouTube clone with popular video browsing, search, and playback capabilities, as well as a live chat feature to enhance user interaction.'
    let airesume_desc = 'AI-powered resume generator that allows users to input their personal details and instantly generate a complete resume which can be downloaded in pdf format on a single click.'
    return (
    <div className='porfolio_container' id='portfolio'>
        <div className="portfolio_info">
            <div className="portfolio_heading">
                PORTFOLIO
            </div>
            <div className="portfolio_heading_about">
                Each project is a unique piece of development 🧩
            </div>
            <div className="allprojects">
            <Project img={FoodBox} name={'FoodBox  🍔'} desc={desc_foodbox} language={{one:'React', two:'Redux', three: "CSS"}} link={{code:'https://github.com/chakra-hub/FoodBox', live:'https://chakra-hub-foodbox.netlify.app/'}}/>
            <ProjectOther img={Youtube} name={'Youtube '} desc={youtube_desc} language={{one:'React', two:'Redux', three: "CSS"}} link={{code:'akdjfk', live:'jsdkfjae'}}/>
            <Project img={Resumai} name={'ResumAI'} desc={airesume_desc} language={{one:'React', two:'CSS'}} link={{code:'https://github.com/chakra-hub/resumAI-react', live:'https://chakra-hub-resumai.netlify.app/'}}/>
            </div>
        </div> 
    </div>
  )
}

export default Portfolio
