# Introduction
Hello viewer and welcome to my submission for Challenge 15 aka the leaflet-challenge. For context, at the time of writing this, I am enrolled in the Data Analytics and Visualizations bootcamp with the University of MN. We are assigned a challenge homework per module. This is Module 15's challenge on JavaScript and HTML. I am using a windows/PC laptop.

# Overview
Description: "The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet."

The challenge consists of two parts. The second part was optional so I did not complete that portion of the assignment.

Part One: Create the Eathquake Visualization
1) Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
![3-Data](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/27649f38-b1cb-47d2-aef2-14ef31068f93)
![4-JSON](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/217a03e7-5d11-484e-85c3-9cb68b363673)

2) Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map:

![2-BasicMap](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/160bfc28-d627-4e33-8430-a5a1e22011d9)

# Additional Information
In this repository, you will find a Leaflet-Part-1 folder, a Reference-Images folder, and the index.html file. In the Leaflet-Part-1 folder, you will find the static folder that contain two separate folders, the css folder that holds the css file and the js folder that holds the js file. This is for organizational purposes. 

Things I did differently:
1) Add a topography layer. I chose to add this when I was debating on whether or not I wanted to proceed with Part 2 or the advanced challenge.
2) My legend looks different from the reference image because I wasn't sure of how to get the swatches to stay one color/darkening/lightening that one color. The code I tried also did not work so I had to tweak it until something acceptable appeared. 

Aside from the sources cited below, everything used was retained information gathered from my classes and class activities. As always shout out to my bootcamp TAs Sam and Randy for all their help answering my questions during office hours, my instructor Hunter for always being clear in his articulation of the course material, and my classmates for their encouragement and support.

#### Here is the link to view/interact with my webpage: https://leeangel0428.github.io/leaflet-challenge/

# Trouble Shooting
1) Got a "net:: ERR_FILE_NOT_FOUND" regarding both my css and js files so I had to update the HTML to include my path.
![console-error1](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/3bd593dc-f7e2-4c04-9e66-60b70364fc8f)

First image is what it was before, second image is how I fixed it.
![original-html](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/e2e2e3cf-9e89-4f4d-a783-e0bfb5875a33)
![updated-html](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/feb9515b-0b64-462b-a513-f917a2f99553)

2) Used Google to search the latitude and longitude coordinates for the US to set my map:
![google-search-USAcoords](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/f5455325-d337-4ed2-8683-cc95470bae02)

This was the code I used:
![wrong-coordinates-code](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/8580bf94-0785-4d4b-ab34-d169c3b0c344)

This was what the map looked like. I figured I did something wrong... so I referenced my Module 15 class activities and saw that the second coordinate needed to have "-" in front of it. Once I did that, the map showed the USA.
![wrong-coordinates](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/6ad2202b-e6d5-4435-b26f-0d01dc6a4dac)

3) I forgot about using circle markers so my initial map had actual markers instead of circles.
![originally-used-markers](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/3c55a7db-6133-4709-9fa1-03f434cacd2d)

4) I wasn't sure how to incorporate a legend that looked like the reference image so I asked OpenAI's ChatGPT. This was their response:
![asked-chatgpt-legend](https://github.com/leeangel0428/belly-button-challenge/assets/137225965/995f1fc5-a8ce-4668-9aeb-34bc56636156)

Even when I had the AI service explain the code to me line by line, I couldn't get it to work in my files. I spent hours tweaking it until I learned about "&nbsp". I incorporated it into my line of code and it worked, so I used that as a template for each color swatch of my legend. Basically what I did was color each non-breaking space entity to create what appears to be a swatch. 

# Resources/Citations (In Usage Order):
#### GeoJSON Data Retrieval:
USGS. (n.d.). GeoJSON Summary Format. USGS. Retrieved from: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

#### Using ChatGPT for Legend:
OpenAI. (2023). ChatGPT (October 10 Version)[Large language model]. Retrieved from: https://chat.openai.com/chat

#### How to use &nbsp for Legend creation:
Chris, K. (2021, August 19th). HMTL Space- How to Add a Non-breaking Space with the &nbsp; Character Entity. FreeCodeCamp. Retrieved from: https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/
