# React-Movie-Search


**MovieLand**

MovieLand is a simple React-based web application that allows users to search for movies using the OMDB API. Users can search for movies by entering a movie title and pressing Enter or clicking the search icon.

**Features**
Search for movies by title

Displays movie title, year, poster, and type (movie or series)

Fallback image for missing posters

Handles cases when no movies are found

Installation

1. Clone the repository to your local machine.

```
git clone https://github.com/your-repo/MovieLand.git
```

2. Install the dependencies.

```
cd MovieLand
npm install
```

3. Start the development server.

```
npm start
```

The application should now be accessible at `http://localhost:3000.`


**Usage**
1. Type a movie title into the search bar.
2. Press Enter or click the search icon to search for the movie.
3. The application will display a list of movies related to the entered title.
4. If no movies are found, a message will be displayed indicating that no movies were found.


**Files**
App.jsx: The main application component that handles searching for movies and rendering the results.

moviecard.jsx: A reusable component for displaying individual movie cards with movie details.

searchicon.svg: The SVG file for the search icon used in the search bar.

App.css: The CSS file containing styles for the application components.

**Dependencies**
React: A JavaScript library for building user interfaces.
Vite: A build tool and development server that provides fast development and optimized production builds.
