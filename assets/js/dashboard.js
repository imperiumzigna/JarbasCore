/**
 * Created by igor on 15/04/16.
 */

var jarbas = angular.module('jarbas')


.controller('dashCtrl',["passport"],function($scope){
  if(!req.isAuthenticated()){
res.status(403);
    window.redirect('/403');

  }
 var me = function ($scope) {
   return $scope.passport.user.username
  }

 var searchDevice = function($scope,req,res){

 },

   connectDevice = function(){

 },
   errorDevice = function(){

  },

   sendComandDevice = function(){

   }


})
