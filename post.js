exports.getPost = function() {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };

    return post;
}

