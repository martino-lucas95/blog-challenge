exports.getPost = function() {
    const post = {
        Title: req.body.newPostTitle,
        Body: req.body.newPostBody
    };

    return post;
}

