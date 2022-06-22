const { response } = require("express");
const { request } = require("express");
const Comic = require("../models/comic-model");

module.exports = {
  bookGet: (request, response) => {
    const { _id } = request.params;
    Comic.findOne({ _id: _id }, (error, foundComic) => {
      if (error) {
        return error;
      } else {
        response.render("pages/book", {
          // data: data,
          data: foundComic, //check this
        });
      }
    });
  },
  bookCreate: (request, response) => {
    const { title, author, publisher, genre, pages, rating, synopsis, image } =
      request.body;
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

    response.redirect("/admin-console");
  },
  bookUpdate: (request, response) => {
    const { _id } = request.params;

    const { title, author, publisher, genre, pages, rating, synopsis, image } =
      request.body;

    Comic.findByIdAndUpdate(
      _id,
      {
        $set: {
          title: title,
          author: author,
          publisher: publisher,
          genre: genre,
          pages: pages,
          rating: rating,
          synopsis: synopsis,
          image: image,
        },
      },
      { new: true },
      (error) => {
        if (error) {
          return error;
        } else {
          response.redirect("/admin-console");
        }
      }
    );
  },
  bookDelete: (request, response) => {
    const { _id } = request.params;
    Comic.deleteOne({ _id: _id }, (error) => {
      if (error) {
        return error;
      } else {
        response.redirect("/admin-console");
      }
    });
  },
};
