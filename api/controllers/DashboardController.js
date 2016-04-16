/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  me: function () {
    if (req.user.isAuthenticated) {
      return req.user.username

    }

  }
}


