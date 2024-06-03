import MovieRepo from "../repositories/movie_repo.js";

class MovieService {
    static async getAll(page) {
        const data = await MovieRepo.get(page);

        return data;
    }

    static async getById(id) {
        const data = await MovieRepo.getId(id);
        if (!data) throw { name: "Data Not Found" }
        return data;
    }

    static async getMovies(title) {
        const { moviesTitle } = title;

        if (!moviesTitle) throw { name: "Invalid Input" }
        const data = await MovieRepo.getTitle(title);
        if (!data) throw { name: 'Data Not Found' }
        return data;
    }

    static async post(fileName, moviesData) {
        const { title, genres, year, photo } = moviesData;
        const file = fileName;
        const mimetype = fileMimeType;

        if (!title || !genres || !year) {
            throw { name: "Invalid Input" };
        }
        if (!file) throw { name: "Invalid File" }
        const allowedExtensions = [
            "image/png","image/jpeg","image/jpg","image/webp",
          ];
        if (!allowedExtensions.includes(mimetype)) throw { name: 'Invalid Extension' }
        const imageUrl = `http://localhost:3000/api/images/${file}`;
        const existingMovies = await MovieRepo.getTitle(title);

        if (existingMovies) {
            throw { name: "Movies" };
        }

        const newMovies = {
            title: title,
            genres: genres,
            year: year,
            photo: imageUrl
        }

        const create = await MovieRepo.create(newMovies);
        return create;
    }

    static async update(id, fileName, moviesData) {
        const { title, genres, year, photo } = moviesData;
        const file = fileName;

        if (!title || !genres || !year) {
            throw { name: "Invalid Input" };
        }

        if (!file) throw { name: "Invalid File" }
        const allowedExtensions = [
            "image/png","image/jpeg","image/jpg","image/webp",
          ];
        const imageUrl = `http://localhost:3000/api/images/${file}`;
        const existingMovies = await MovieRepo.getTitle(title);

        if (existingMovies) {
            throw { name: "Movies" };
        }

        const newMovies = {
            title: title,
            genres: genres,
            year: year,
            photo: imageUrl
        }
        const updateMovies = await MovieRepo.edit(id, newMovies);
        return updateMovies;
    }

    static async delete(id) {
        if (!id) throw { name: 'Data Not Found' }
        const data = await MovieRepo.drop(id);
        return data;
    }
}

export default MovieService;