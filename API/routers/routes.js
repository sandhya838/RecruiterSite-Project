module.exports = (app) => {
  const profile = require('../controllers/profile.controller');
  const auth = require('../auth/auth.controller');
  const requestValidator = require('../middlewares/validateRequest');
  const multer = require("multer");
  const upload = multer({ dest: 'public/resume/' });
  const uploadLogo = multer({ dest: 'public/logo/' });
  uploadCertificate = multer({ dest: 'public/certificates/' });
  const orgnization = require('../controllers/orgnization.controller');
  const job = require('../controllers/job.controller');
  const feedback = require('../controllers/feedback.controller');
  const countryStateCity = require('../controllers/countries_state_and_city.controller');

  /**********************orgnization pre APIs **************** */
  app.post('/v1/orgnization-login', auth.orgnization_login);
  app.post('/v1/register-orgnization', uploadLogo.single('logo'), orgnization.create);
  app.post('/v1/feedback', feedback.create);
  app.post('/v1/feedback', feedback.create);
  app.get('/v1/countries', countryStateCity.findCountries);
  app.get('/v1/states/:countryCode', countryStateCity.findStateByCountry);
  app.get('/v1/cities/:countryCode', countryStateCity.findCityByCountry);
  app.get('/v1/cities/:stateCode/:countryCode', countryStateCity.findCityByCountryAndState);


  /************ Orgnization post login ****************** */
  app.get('/v1/orgnizations', auth.authToken, orgnization.findAll);
  app.get('/v1/orgnization/:orgnizationId', auth.authToken, orgnization.findOne);
  app.delete('/v1/orgnization/:orgnizationId', auth.authToken, orgnization.delete);
  app.put('/v1/orgnization/:orgnizationId', auth.authToken, orgnization.update);
  app.put('/v1/orgnization-change-password/:id', auth.authToken, orgnization.changePassword);


  /*****************Feedback************************ */

  app.get('/v1/feedbacks', auth.authToken,feedback.findAll);
  app.get('/v1/feedback/:feedbackId', auth.authToken, feedback.findOne);
  app.delete('/v1/feedback/:feedbackId', auth.authToken, feedback.delete);
  app.put('/v1/feedback/:feedbackId', auth.authToken, feedback.update);


  /*************Jobs ******************** */
  app.post('/v1/create', auth.authToken, job.create);
  app.get('/v1/jobs', auth.authToken, job.findAll);
  app.get('/v1/jobs-created-by/:jobId', auth.authToken, job.findAllJobs);
  app.get('/v1/job/:jobId', auth.authToken, job.findOne);
  app.delete('/v1/job/:jobId', auth.authToken, job.delete);
  app.put('/v1/job/:jobId', auth.authToken, job.update);
  app.put('/v1/makeJobActiveOrInActive/:jobId', auth.authToken, job.makeJobActiveOrInActive);
  app.post('/v1/recomandedJobs', auth.authToken, profile.recomandedJobs);


  /************** Pre Login APIs ****************** */
  app.post('/v1/login', auth.login);
  app.post('/v1/register', upload.single('resume'), requestValidator.validateParams(profile.createRules), profile.create);
  app.post('/v1/forgot-password', auth.forgotPassword);

  /****************** profile routings *************** */
  app.post('/v1/aboutyou', auth.authToken, profile.create);
  app.get('/v1/profile/:profileId', profile.findOne);
  app.put('/v1/upload-resume/:profileId', upload.single('resume'), profile.uploadResume);

  app.put('/v1/profile/:profileId', auth.authToken, profile.update);
  app.get('/v1/profiles', profile.findAll);
  // app.get('/v1/profiles', auth.authToken, profile.findAll);
  app.get('/v1/profile/:profileId', auth.authToken, profile.findOne);
  // app.put('/v1/profile/:profiled', auth.authToken, requestValidator.validateParams(profile.updateRules), profile.update);
  app.delete('/v1/profile/:profileId', auth.authToken, profile.delete);
  app.put('/v1/change-password/:id', auth.authToken, profile.changePassword);
  app.post('/v1/upload-certificates/:profileId', uploadCertificate.single('certificate'), auth.authToken, profile.certificates);
}