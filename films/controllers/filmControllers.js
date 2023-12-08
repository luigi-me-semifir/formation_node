import { Film, filmValidationSchema } from "../entities/film.js"

// Route POST pour créer un film
export const newFilmJoi = async (req, res) => {
  try {
    // Valider les données entrantes avec Joi
    const { error, value } = filmValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Créer un nouveau film en utilisant le modèle Mongoose
    const nouveauFilm = new Film(
      req.body
    );

    // Sauvegarder le film dans la base de données
    const filmSauvegarde = await nouveauFilm.save();

    res.status(201).json(filmSauvegarde);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la création du film" });
  }
};
// Route Get pour voir tout mes films
export const getFilms = async (_, res) => {
  const films = await Film.find()
  res.send(films)
}

// Route PUT pour mettre à jour un film par son ID
export const majFilm = async (req, res) => {
  try {
    // Valider les données entrantes avec Joi
    const { error, value } = filmValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Mettre à jour le film en utilisant le modèle Mongoose
    const filmMaj = await Film.findByIdAndUpdate(req.params.id, {
      titre: req.body.titre,
      annee: req.body.annee
    }, { new: true });

    if (!filmMaj) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    res.status(200).json(filmMaj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la mise à jour du film" });
  }
};

// Route DELETE pour supprimer un film par son ID
export const delFilm = async (req, res) => {
  try {
    // Supprimer le film en utilisant le modèle Mongoose
    const filmSupprime = await Film.findByIdAndDelete(req.params.id);

    if (!filmSupprime) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la suppression du film" });
  }
}

// Route GET pour récupérer un film par son ID
export const getFilmId = async (req, res) => {
  try {
    // Récupérer le film par son ID en utilisant le modèle Mongoose
    const film = await Film.findById(req.params.id);

    if (!film) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    res.status(200).json(film);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la récupération du film par son ID" });
  }
};

export const patchFilm = async (req, res) => {
  try {
    // Valider les données entrantes avec Joi
    const { error, value } = filmValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Mettre à jour partiellement le film en utilisant le modèle Mongoose
    const filmMaj = await Film.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          titre: req.body.titre,
          annee: req.body.annee
        }
      },
      { new: true }
    );

    if (!filmMaj) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    res.status(200).json(filmMaj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la mise à jour partielle du film" });
  }
}