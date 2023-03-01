# Portfolio
The first part of the approach taken to structure the site was to create a navigation bar that would sit at the top of every page. This was done first so the rest of the page could be structured around this. Next, I created a div for the sidebar and a div for each separate page that would be displayed. Each page was placed in its own div in order to make it easy to hide and display the div using jQuery. I placed the sidebar div and each page div within a larger div, this way I could manipulate the position of the sidebar and each page by using flexbox with the larger div.<br><br>
The use of flexbox made it easy to produce a responsive website. I used media queries that changed the flex-direction of the largest container div from row to column at a certain width. When the screen became small enough, the page div would stack below the sidebar instead of next to it, allowing the site to become mobile and tablet friendly. I also used media queries to restructure the content of the page at certain widths, for example moving the side bar to the center of the page at the tablet and mobile level for a more aesthetically pleasing lay out. <br><br>
I ran into dificulty when attempting to make the projects page appear and disappear. This was because I used flexbox to structure the page, so I could not create a function that would change the display to none or block because the display was already set to flex. To overcome this I used the hide and show functions of jQuery. Another issue I faced on the projects page was with my carousel. Once I switched to another page and came back, the last project displayed on the carousel remained even when a new project was displayed using the arrows. I overcame this by using jQuery to adjust each function that takes the user to a new page. I added methods that would change the display projects two, three, and four to none. I also reset the project index of the carousl to zero, so that each time a user clicks away and clicks back to the projects page, the carousel would have no left over projects remaining and would reset and start at the first project.
