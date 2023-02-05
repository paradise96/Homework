// const rating = document.getElementById('rating');
// rating.innerText = '1.5';
// $('.rating').innerText = '1.5';
// $(document).ready(function(){
//     $('.my-content').slick({
//          setting-name: setting-value
//     });
//     });
$(function(){
    $('.my-content').slick();
    const myChart = $("#rating").donutty({
        anchor:"top",
        value: -87,
        color: "#00D4BE",
        bg: "transparent",
        round: false,
        thickness: 8
        });
});
//linear-gradient(196.37deg, #00D4BE 6.95%, #1AE780 21.96%, #1AE780 73.66%, #00D4BE 87%);
// function abbrevName(name){

//     // code away
//     let word = name.split(' ');
//    return word.map(i => i[0].toUpperCase()).join('.');
   
 
// }
// console.log(abbrevName('Sam Harris'));

// fetch('js/data.json')
//     .then((resp) =>{
//         console.log(resp);
//         return resp.json();
//     })
//     .then((resp) => {
//         console.log(resp);
//        userInfo(resp);

//     });
//     // function userInfo(user) {
//     //     const info = document.getElementById("user-info");
//     //      for( let k in user){
//     //         info.insertAdjacentHTML('afterbegin', `<p><b>${k}</b> ${user[k]}</p>`);
//     //      }
//     // }
//     Array.from(document.querySelectorAll('#main_menu a')).forEach(anch => {
//         anch.addEventListener('click', function(e){
//             e.preventDefault();
//             loadPage(anch.getAttribute('href'));
//         });
//     });
//     // function loadPage(page){
//     //     fetch(`pages/${page}.html`)
//     //     .then(resp => resp.text())
//     //     .then(html => document.getElementById('page-content').innerHTML = html);
//     // }
//     function loadPage(page){
//         // $.get(`pages/${page}.html`, function(html) {
//         //     document.getElementById('page-content').innerHTML = html;
//         // });
//         let loading = true;
//         $.ajax({
//             url: `pages/${page}.html`,
//             method: 'get',
//             dataType: 'html',
//             // success: function(html){
//             //     document.getElementById('page-content').innerHTML = html;
//             // },
//             // error: function(err){
//             //     console.log(err);
//             // }
//         })
//         .done(function(html){
//             document.getElementById('page-content').innerHTML = html;
//         })
//         .fail(function(err){
//             console.log(err); 
//             loadPage('404');
//         })
//         .always(function(){
//             loading = false;
//         });
//     }

//AXIOS LIBRARY 
//  function loadPage(page){
//     axios.get(`pages/${page}.html`)
//     .then((resp) =>{
//         console.log(resp);
//         if(resp.status === 200){
//             document.getElementById('page-content').innerHTML = resp.data;
//         } 
//     })
//     .catch((err) => {
//         console.log(err);
//         if(page !=='404'){
//             loadPage('404');
//         }
        
//     });
//  }


    // loadPage('main');

    //MY API 1a7e06a3a5574e93a2fc591a0c5da54a
    const newsAPI = '1a7e06a3a5574e93a2fc591a0c5da54a';
    function getNews() {
        axios.get('https://newsapi.org/v2/everything/', {
            params: {
                apiKey: newsAPI,
                q: 'tesla',
                searchIn: 'title',
                language: 'en',
                pageSize: 20
            }
        })
        .then((resp) => {
            console.log(resp.data); 
            let list = '';
            resp.data.articles.forEach(news =>{
                list += newsHTML(news);
            });
            document.getElementById('news_wrap').innerHTML = list;
        });
    }
    function newsHTML(news){
        const d = new Date(news.publishedAt);
        const newsDate = d.getDate() + '/' + (d.getMonth() +1) + '/' + d.getFullYear();
        return `
        <div class="news-item">
            <h4>${news.title}</h4>
            <time datetime="${news.publishedAt}">${newsDate}</time>

            <div>
                <p>${news.description}</p>
            </div>
        </div>
        `;
    }
    getNews();

 