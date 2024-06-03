import express from 'express'
import MovieController from '../controller/movie_controller.js'
import { multerMiddleware } from '../middleware/multer.js'
import { adminAuthorization } from '../middleware/authorization.js'

const movies_routes = express.Router();

movies_routes.get("/movies/title", MovieController.getMoviesByTitle);
movies_routes.get("/movies?", MovieController.getAllMovies);
movies_routes.get("/movies/:id", MovieController.getMoviesById); 

movies_routes.post("/movies/post", adminAuthorization, multerMiddleware, MovieController.createMovies);
movies_routes.put("/movies/update/:id", adminAuthorization, multerMiddleware, MovieController.updateMovies);
movies_routes.delete("/movies/delete/:id", adminAuthorization, MovieController.deleteMovies);

export {movies_routes};