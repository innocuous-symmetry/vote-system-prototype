# Voting System Prototype

Basic format for RTC voting application using Node/Express and socket.io.

## To view on your system
1. Clone the project
2. In root directory run ``npm install``
3. Change into ``client`` and again run ``npm install``
4. In root directory, run ``node .``
5. Express will serve ``index.html`` at localhost port 8088

## Interacting with application
Different instances of the site in different browser windows will demonstrate syncronized state locally. The two character identifier corresponds to the first two character's of each user's unique socket ID. This code also applies to each individual voter.

Logic is built out such that a single voter can only submit a single vote, while also retaining the ability to change their vote. Each "vote" emits a socket event which updates the DOM if the logic flow determines it is necessary to do so.