const { getAllBlogs, blogHandler, deleteBlog, singleBlog } = require('./controller/blogHandler');
const { addEventHandler, getCalendarEvents } = require('./controller/calenderHandler');
const { companyHandler, getAllCompanies, updateCompanyHandler, deleteCompany, singleCompany } = require('./controller/companyHandler');
const { statusHandler, getAllStatus, removeStat } = require('./controller/statusHandler');
const { updateUserhandler, getAllUser, getUser } = require('./controller/updateUser');
const { forumHandler, getAllPosts, deletePosts, singlePost } = require('./controller/forumHandler');

function routes(app) {
    app.get('/details', getAllUser);

    app.get('/details/:id', getUser);

    app.patch('/student/details/:uid', updateUserhandler);

    app.post('/status', statusHandler);

    app.get('/status', getAllStatus);

    app.delete('/status/:sid', removeStat);

    app.delete('/company/:cid', deleteCompany);

    app.post('/add/company', companyHandler);

    app.get('/get/companies', getAllCompanies);

    app.get('/get/company/:cid', singleCompany);

    app.patch('/register/details/:cid', updateCompanyHandler);

    app.post('/add/events', addEventHandler);

    app.get('/calendar/events', getCalendarEvents);

    app.get('/get/news', getAllBlogs);

    app.post('/add/news', blogHandler);

    app.delete('/delete/news/:bid', deleteBlog);

    app.get('/get/news/:bid', singleBlog);

    // Forum Posts

    app.get('/get/forum/posts', getAllPosts);

    app.post('/add/forum/post', forumHandler);

    app.delete('/delete/forum/:pid', deletePosts);

    app.get('/get/forum/news/:pid', singlePost);
}

module.exports = routes;