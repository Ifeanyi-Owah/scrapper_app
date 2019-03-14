// var url = 'localhost:process.env.PORT' || 3000;
var url = 'http://localhost:3000'
// axios.get(`${url}/articles`).then(res=>{
//     console.log(res);
// })
// axios.get(url)
// .then(function(response){

// })
// .catch(function(err){
//     console.log(err);
// })


// $.ajax({
//   method: "GET",
//   url: `${url}/article`,
//   crossDomain:true
//  })
//  .then(res=>{
//    console.log(res[0].link);
//    var section = $('#articleSection');
//    res.forEach(function(article){
//      var link = $('a').attr('href',article.link).text(article.title);
//      var header = $('h2').append(link);
//      var div = $('div').append(header);
//      var par = $('p').text(article.par);
//      div.append(par);
//      section.append(div);
    
//     })
   
//  })


// ------------




// ------------

// server = axios.create({baseUrl: localhost:8080 })
// server.get('/articles')
// server.get('/user')
// server.get('/books')

$("#scraper_id[data-target='#scraper_id2']").on("click", function(){
  alert('connected');
})