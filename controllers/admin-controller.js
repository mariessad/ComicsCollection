const Comic = require("../models/comic-model");

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      Comic.find({}, (error, allBooks) => {
        if (error) {
          return error;
        } else {
          response.render("pages/admin", {
            data: allBooks,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
  create: (request, response) => {
    if (request.isAuthenticated()) {
      const {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis,
        image,
      } = request.body;
      const newComic = new Comic({
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis,
        image: image,
      });

      newComic.save();

      response.render("pages/create", {
        // data: data,
      });
    } else {
      response.redirect("/login");
    }
  },
  update: (request, response) => {
    if (request.isAuthenticated()) {
      const { _id } = request.params;
      Comic.findOne({ _id: _id }, (error, foundComic) => {
        if (error) {
          return error;
        } else {
          response.render("pages/update", {
            foundComic: foundComic,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
};
