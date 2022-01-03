import React,{useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ResumeModal from './ResumeModal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: 'IMG_1370.jpeg',
      title: 'CSULA Bachelor of Arts ',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: 'shecodecert.jpeg',
      title: 'SheCodes Intduction to Coding',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'IMG_5283.jpeg',
      title: 'Flatiron School Certificate of Completion',
      author: '@helloimnik',
    },
    {
      img: 'IMG_6335.jpeg',
      title: 'JP Morgan Chase Software Engineering Virtual Experience',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    
]

function Resume(){
    const [isClicked,setClicked]= useState(false);
    return(
        <div>
            
            <div>
            <Box className="resumePaper"
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 720,
          height: 720,
        },
      }}
    >

      <Paper className="resumePaper" variant="outlined" elevation={24}>
    <ul className="resumeContent">
       <h2> Brianna Gordon</h2>

    <h3>Los Angeles, CA 90028 | 313-685-3013 | brigordon574@gmail.com 
brithecoder| https://brigordon574.medium.com </h3>
<li> <b>SOFTWARE ENGINEER </b></li>
<p> Experienced in Ruby on Rails and JavaScript based programming. My degree in ethic studies, student leadership, and project management equips me with great tools for collaborating with coworkers from diverse backgrounds as well as empathy and understanding for customers. </p>

<li> <b>EDUCATION </b> </li>

<p> <b>Flatiron School </b>
	Seattle, Washington
Full Stack Web Development, Ruby on Rails and JavaScript program 	05/ 2021 - 08/2021 </p>

<p> <b>California State University, Los Angeles </b> 
Los Angeles, California
BA, Pan African Studies Magna Cum Laude  08/2019 - 12/2020  </p>	                                                          
<li> <b> TECHNICAL SKILLS </b> </li>
<p> Ruby, Rails, SQL, Javascript, React, Redux,Rest API, OAuth, CSS, Bootstrap, HTML, Git, Github, OOP </p>
<li> <b> TECHNICAL PROJECTS </b> </li>
<br/>
<li> <b> Ninalem </b> </li> 
https://github.com/brithecoder/phase-5-project | https://loom.com/share/06bcfef2583d4c6da78a2b1e07ed6bf1 
<p>Connect  to Black owned business in the United States
Ruby on Rails backend and React front end 
Implements the Yelp Fusion API to display business information.
Adds user validations and Bcrypt to ensure user security </p>

<li> <b>Nail Code </b> </li>
 https://github.com/suey0128/phase-4-project |
<p> E-commerce store for artificial nail care
Rails backend React front end 
Applies a payment form using Material- ui 
Executes teamwork and project planning </p>

<li> <b> Activity Wheel </b> </li>
 https://github.com/brithecoder/phase-1-project 
<p>Provides random activities for the user to pick through 
JavaScript project 
Utilized public API and JSON backend 
Demonstrates asynchronous fetching and callback functions </p>

<li> <b>EXPERIENCE</b> </li>
CSULA Athletics Fiance Division	Los Angeles,California
Student Assistant  	       11/2019 -12/2020
Operational support, data entry, office customer service 
Working knowledge of Microsoft Word, Excel and Internet 
Generated reports on financial activity for various athletic department logistics 

</ul>
          </Paper>
    </Box>

                </div>
         {/* <div className="certificateBox">
               <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows} toggled={setClicked}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton 
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
 </div>
 {isClicked ? <ResumeModal  itemData={itemData} /> : null} */}
 </div>
    );
}
export default Resume;