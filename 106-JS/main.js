const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {    
     author: "JIMI HENDRIX",   
     song:"ALL ALONG THE WATCHTOWER"   
    },    
    {    
     author: "AC/DC",    
     song:"BACK IN BLACK"
    
    },   
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",   
     song:"ENTER SANDMAN" 
    }
    ];

    const orderedList = document.createElement('ol');
    playList.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item.author + ': ';
        const span = document.createElement('span');
        span.innerText = item.song;
        li.append(span);
        orderedList.append(li);
    });
    document.body.prepend(orderedList);

    //Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
    
    // const openBtn = document.getElementById('open-btn');
    const trafficLight = document.querySelector('.traffic-light');

    const divBlock = document.createElement('div');
    divBlock.classList.add('block');
    trafficLight.prepend(divBlock);

    const text = document.createElement('h2');
    text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque omnis fugiat, temporibus ea consequuntur iusto excepturi cum deleniti minima velit amet! Aspernatur rerum sequi ipsa corrupti ex quis repellat. Ducimus sapiente voluptatum veniam corporis aliquid eius, iure doloribus, voluptatem eum impedit optio aperiam mollitia magni, officiis cupiditate ipsum nihil hic nobis. Aperiam, nisi. Et est obcaecati quibusdam modi natus!';
    divBlock.prepend(text);
    // const closeBtn = document.getElementById('close-btn');
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('btn', 'btn-danger');
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerText = 'Закрити';
    divBlock.append(closeBtn);
    

    const modalWindow = document.createElement('h2');
    modalWindow.innerText = 'Модальне вікно';
    

    const openBtn = document.createElement('button');
    openBtn.classList.add('btn', 'btn-info');
    openBtn.setAttribute('type', 'button');
    openBtn.innerText = 'Відкрити';

    trafficLight.prepend(openBtn);
    trafficLight.prepend(modalWindow);

    



    const showBody = document.querySelector('body');
    function toggle(){
        
        // showBody.style.background = 'red';
        showBody.classList.toggle('active');
        // if(showBody.classList.contains('active')){
        //     console.log('hello');
        //     // const closeBtn = document.createElement('button');
        //     // closeBtn.classList.add('btn', 'btn-danger');
        //     // closeBtn.innerText = 'Закрити';
        //     // showBody.prepend(closeBtn);
        // }
    }
    openBtn.addEventListener('click', toggle);
   closeBtn.addEventListener('click', function(){
    showBody.classList.remove('active');
   });

   //Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

   //const switcher = document.getElementById('switcher');
   const switcher = document.createElement('button');
   switcher.classList.add('btn', 'btn-warning');
   switcher.setAttribute('type', 'button');
   switcher.innerText = 'Switch';
   // Create wrapper and append it
   const wrap = document.createElement('div');
   wrap.style.display = 'flex';
   wrap.style.flexDirection = 'column';
   wrap.style.gap = '20px';
   trafficLight.append(wrap);
  
   //create three divs with different ids and append it inside wrapper
   const red = document.createElement('div');
   red.classList.add('item');
   red.style.background = 'red';
   const yellow = document.createElement('div');
   yellow.classList.add('item');
   const green = document.createElement('div');
   green.classList.add('item');
   
   switcher.addEventListener('click', function(){
    if(red.style.background === 'red'){
    red.style.background = 'white';
    yellow.style.background = 'yellow';
    } else if(yellow.style.background === 'yellow') {
        yellow.style.background = 'white';
        green.style.background = 'green';
    } else if(green.style.background === 'green') {
        green.style.background = 'white';
        red.style.background = 'red';
    }
   });
   wrap.append(red);
   wrap.append(yellow);
   wrap.append(green);
   wrap.append(switcher);
  

  
   
