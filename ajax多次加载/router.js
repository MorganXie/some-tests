app.get('/loadMore', function(req, res) {

        var curIdex = req.query.index;
        var len = req.query.length;
        var data = [];

        for (var i = 0; i < len; i++) {
            data.push('新闻' + (parseInt(curIdex) + i));
        }
        res.send(data);
    }

);