export const project1Description = `This was my first project of the SEB, which I built after just 3 weeks of
programming experience. The assignment was to create a grid-based game to be rendered in the browser. I developed DotMan,
as a homage to PacMan, featuring a retro visual design inspired by childhood summers spent in British seaside arcade halls.
Similar to oldschool arcade machines the game presents players with a short backstory and overview of the mechanics, enticing
them to insert a 'token' to begin their adventure.

DotMan showcases sophisticated ghost AI behaviours implemented through different pathfinding algorithms. The primary
chase ghost utilises Breadth-First Search (BFS) for optimal pathfinding through the maze, ensuring it always finds
the shortest possible route to the player. Meanwhile, the ambusher ghost employs a dual-mode AI system - in ambush
mode, it calculates the player's future position four cells ahead to create interception points, switching to direct
pursuit when within close range.

The game maintains classic PacMan elements: collecting pellets to win, power-ups that turn ghosts vulnerable, and
real-time collision detection. I added a unique twist with a third ghost that randomly teleports across the maze in
a whack-a-mole style, creating unpredictable challenges that force players to constantly scan the entire playing field.`;

export const project2Description = `This was my second project of the SEB - a 48-hour hackathon where 
my partner and I challenged ourselves to build an interactive Harry Potter quiz after just one week of React experience. 
The assignment was to create a multi-page application consuming a public API, and we opted for the driver-navigator format 
to collaborate effectively under the time constraint.

The game features robust state management across two distinct modes. In 'Classic' mode, players match character images 
to their names, while 'Hard' mode challenges players to identify the actors behind the roles. We implemented recursive 
functions to handle character selection, ensuring only characters with valid images are chosen and preventing duplicates - 
a crucial feature given the API's inconsistent image availability. The answer options are randomised using the Fisher-Yates 
algorithm, adding an extra layer of challenge to each playthrough.

The architecture emphasises reusable components and maintainable code, with features like timed responses, score tracking, 
and a top 5 leaderboard persisted via local storage. The modular design allows for easy expansion, with the game logic 
structured to accommodate additional modes without significant refactoring. This project showcases how effective 
pair programming and careful planning can deliver a polished product even under tight time constraints.`;

export const project3Description = `This was the third project of the SEB, marking my first full-stack
application built after two weeks of studying backend principles and TypeScript. Kino Connect was inspired by my 
experiences as a Mubi-Go user, where weekly cinema visits revealed the rich yet often overlooked history of London's 
independent cinema scene. In an era dominated by Vue and Odeon multiplexes, these independent venues stand as vital 
cultural spaces, each with their own unique character and programming. The platform was built using the MERN stack 
(MongoDB, Express.js, React, Node.js), with TypeScript providing robust type safety across both frontend and backend.

The application's architecture centers around a dynamic notice board system, where each cinema has its own digital space
for event announcements and community engagement. The backend implements sophisticated role-based access control through
custom middleware and JWT authentication, distinguishing between 'Cinema' accounts that can manage venue profiles and
'Film Fanatic' accounts focused on community interaction. MongoDB's flexible schema enabled complex relationships between
cinemas, events, and comments, while ensuring efficient querying and data management.

The frontend showcases advanced React patterns with TypeScript, featuring reusable form components that handle both
creation and updates, an interactive map integration using Mapbox GL JS, and a seamless image management system via
Cloudinary. The modular design emphasises type safety and component reusability, with careful consideration given to
state management and user experience. The project demonstrates how thoughtful architecture and strong typing can create
a maintainable, scalable platform that serves a real-world community need.`;

export const project4Description = `This was my final project of the Software Engineering Bootcamp - a full-stack application 
built using TypeScript and Python, with the latter being studied for just over a week. OpenStudio was inspired by my 
experience growing up in and around the fine art world, where gallery commission rates of 50% create significant barriers 
for emerging artists. The platform was developed to empower artists by providing a direct-to-collector marketplace that 
eliminates traditional intermediaries.

The application implements role-based access control through custom middleware and JWT authentication, distinguishing between artist and 
collector accounts. Artists can manage their portfolio and handle order requests, while collectors can curate personal galleries and 
initiate purchases. The backend leverages Django's robust framework alongside PostgreSQL, with careful consideration given to database 
relationships and transaction integrity. The frontend handles complex shipping calculations - accounting for UK postal codes, artwork 
dimensions, and insurance requirements - providing instant cost estimates without relying on expensive commercial shipping APIs.

The frontend showcases advanced React patterns with TypeScript, featuring real-time notifications, multi-step purchase 
flows, and dynamic image management via Cloudinary. Rather than implementing a traditional cart system, the platform 
uses an order request mechanic - developed through conversations with artists who often need flexibility to accommodate 
exhibition schedules. This project demonstrates how domain knowledge and user feedback can shape technical solutions 
that better serve their intended community.`;
