const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  title: String,
  overview: String,
  releaseDate: Date,
  backdropPath: String,
  genres: [String],
  homepage: String,
  imdbId: String,
  originalLanguage: String,
  originalTitle: String,
  popularity: Number,
  posterPath: String,
  productionCompanies: [String],
  productionCountries: [String],
  revenue: Number,
  runtime: Number,
  spokenLanguages: [String],
  status: String,
  voteAverage: Number,
  voteCount: Number,
  ytLink: String,
  ytID: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
