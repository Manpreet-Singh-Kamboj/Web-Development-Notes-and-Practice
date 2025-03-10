const amount = Number(prompt("Enter a amount in Rs.: "));
const totalNotes = {};
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
function getCurrencyDenominationRequired(amount, availableNotes) {
  for (const note of availableNotes) {
    totalNotes[note] = Math.floor(amount / note);
    amount %= note;
  }
  console.log("Required currency note: ");
  Object.entries(totalNotes).forEach((note) =>
    console.log(`Rs. ${note[0]}: ${note[1]}`)
  );
}

getCurrencyDenominationRequired(amount, availableNotes);

const movieName = prompt("Enter the name of the movie: ");
const movieRating = Number(prompt("Enter the rating of the movie (0.0-5.0): "));

function getMovieRating(movieRating, movieName) {
  let rating = "Flop";
  if (movieRating >= 0 && movieRating <= 2) {
    rating = "Flop";
  } else if (movieRating >= 2.1 && movieRating <= 3.4) {
    rating = "Semi-hit";
  } else if (movieRating >= 3.5 && movieRating <= 4.5) {
    rating = "Hit";
  } else if (movieRating >= 4.6 && movieRating <= 5.0) {
    rating = "Super-hit";
  } else {
    rating = "Invalid rating";
  }
  rating === "Invalid rating"
    ? console.log(`Not a valid Rating should be between 0.0-5.0`)
    : console.log(`${movieName} is a ${rating}`);
}

getMovieRating(movieRating, movieName);
