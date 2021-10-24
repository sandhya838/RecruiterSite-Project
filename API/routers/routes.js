module.exports = (app) => {
  const users = require('../controllers/user.controller');
  const profile  = require('../controllers/profile.controller');
  const auth = require('../auth/auth.controller');
  const requestValidator = require('../middlewares/validateRequest');
  const multer = require("multer");
  const upload = multer({ dest: 'public/resume/' })

  /************** Pre Login APIs ****************** */
  app.post('/v1/login', auth.login);
  // app.post('/v1/register', requestValidator.validateParams(users.createRules), users.create);
  app.post('/v1/register', users.create);

  /****************** profile routings *************** */
  app.post('/v1/aboutyou', profile.create);
  app.get('/v1/profile/:profileId', profile.findOne);
  app.put('/v1/upload-resume/:profileId', upload.single('resume'), profile.uploadResume);

  app.put('/v1/profile/:profileId', profile.update);
  app.get('/v1/profiles', profile.findAll);
  // app.get('/v1/profiles', auth.authToken, profile.findAll);
  // app.get('/v1/profile/:profileId', auth.authToken, profile.findOne);
  // app.put('/v1/profile/:profiled', auth.authToken, requestValidator.validateParams(profile.updateRules), profile.update);
  app.delete('/v1/profile/:profileId', auth.authToken, profile.delete);
}