var express = require('express');
var router = express.Router();

const { getAlbum } = require('../google-photos-service');

/* GET users listing. */
router.get('/:albumId/:meetupId', async function (request, response) {
  try {
    const results = await getAlbum(request.params.albumId, request.params.meetupId)
    response.json(results);
  }
  catch (e) {
    response.status(500)
  }
});

module.exports = router;
