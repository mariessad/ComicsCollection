const UserInfoError = require("passport-google-oauth20/lib/errors/userinfoerror");
const Comic = require("../models/comic-model");
const User = require("../models/user-model");
const Profile = require("../models/profile-model");
const passport = require("passport");

module.exports = {
  index: (request, response) => {
    // not sure if this section is correct
    Comic.find({}, (error, allComics) => {
      if (error) {
        return error;
      } else {
        response.render("pages/index", {
          // data: data,
          data: allComics,
        });
      }
    });
  },
  about: (request, response) => {
    response.render("pages/about", {
      // data: data,
    });
  },
  login_get: (request, response) => {
    response.render("pages/login", {
      // data: data,
    });
  },
  login_post: (request, response) => {
    const { username, password } = request.body;
    const user = new User({
      username: username,
      password: password,
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error);
        response.redirect("/login");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/admin-console");
        });
      }
    });
  },
  register_get: (request, response) => {
    response.render("pages/register", {
      // data: data,
    });
  },
  register_post: (request, response) => {
    const { username, password } = request.body;
    User.register({ username: username }, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect("/register");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/login");
        });
      }
    });
  },
  // profile page get has the form, which is submitted through the create_post
  profile_create_get: (request, response) => {
    response.render("pages/profile", {});
  },
  profile_create_post: (request, response) => {
    //redirects to your profile page
    //Profile.findOne({id: request.params.id})
    response.redirect("/profilepage");
  },
  logout: (request, response) => {
    request.logout();
    response.redirect("/");
  },
  google_get: passport.authenticate("google", {
    scope: ["openid", "profile", "email"],
  }),
  google_redirect_get: [
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (request, response) {
      response.redirect("/admin-console");
    },
  ],
};
