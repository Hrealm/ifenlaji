const http = require('http');
const url = require('url');
let indexlist = require('./index.js');
let songlistContent = require('./songlistContent.js');
let server = http.createServer();
server.on('request',(req,res)=>{
    const parseObj = url.parse(req.url,true);
    const pathName = parseObj.pathname;
    res.writeHeader(200,{
        'Content-Type': 'text/html;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    let data = {
        indexList : indexlist,
        navList: [
            {
                id: 1,
                title: '飙升榜',
                tip: 'SoaringList'
            },
            {
                id: 2,
                title: 'TOP500',
                tip: 'top500'
            },
            {
                id: 3,
                title: '网络红歌榜',
                tip: 'HotSonglist'
            }
        ],
        songlistContent: songlistContent,
        inewsList: require('./ifenlaji-news.js'),
        inews: require('./inews.js')
    }

    if(pathName != '/favicon.ico'){
        const _pathName = pathName.substring(1,pathName.length);
        reJson(_pathName);
    }
    

    function reJson(route) {
        if(parseObj.query.title){
            const title = parseObj.query.title;
            if(parseObj.query.id){
                let id = parseObj.query.id;
                //根据Id取出数组中指定的对象
                let result = data[route][title].find((item)=>{
                    return item.id == id;
                })
                res.end(JSON.stringify(result));
            }else{
                res.end(JSON.stringify(data[route][title]));
            }
        }else{
            res.end(JSON.stringify(data[route]));
        }
    }
});

server.listen(8899,()=>{
    console.log('服务器启动成功');
})