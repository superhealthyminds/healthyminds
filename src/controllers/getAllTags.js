const express = require('express');
const { getAllTags } = require('../db/queries/tagQueries');

module.exports = (req, res) => {
  getAllTags((err, allTags) => {
    if (err) {
        console.log(err);
        res.send('error');
      } else {
        res.json(allTags);
      }
  });
};
