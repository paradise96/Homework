// document.body.insertAdjacentHTML('beforebegin')

// function myToast(text) {
//     const html = `<div id="my-toast">
//     <div>${text}</div>
// </div>`;
// document.body.insertAdjacentHTML('afterbegin', html);
// setTimeout(function() {
//     document.getElementById('my-toast').remove();
// },3000);
//}
// function myToast(text, type='success'){
//   if(document.getElementById("my-toast")){
//     document.getElementById("my-toast").remove();
//   }
//   const html = `<div id="my-toast" class="${type}">
//     <div>${text}</div>
//   </div>`;
//   document.body.insertAdjacentHTML('afterbegin', html);
//   // setTimeout(function(){
//   //   document.getElementById("my-toast").remove();
//   // }, 3000);
// }
const toast = {
  style: {
    position: 'fixed',
    right: '20px',
    top: '20px',
    width: '350px',
    padding: '15px',
    color: '#fff',
    'border-radius': '5px',
    'z-index': '10000'
  },
  show: function(text, type){
    if(document.getElementById("my-toast")){
      document.getElementById("my-toast").remove();
    }
    let styleString = '';
    for(let prop in this.style){
      styleString += `${prop}:${this.style[prop]};`;
    }
    switch(type){
      case 'success':
        styleString += 'background-color: rgba(5, 184, 5, .8);';
        break;
      case 'danger':
        styleString += 'background-color: rgba(195, 22, 22, .8);';
        break;
      case 'warning':
        styleString += 'background-color: rgba(255, 184, 30, .8);';
        break;
      case 'info':
        styleString += 'background-color: rgba(30, 199, 255, 0.8);';
        break;
    }
    const html = `<div id="my-toast" class="toast-${type}" style="${styleString}">
      <div>${text}</div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', html);
    setTimeout(function(){
      if(document.getElementById("my-toast")){
        document.getElementById("my-toast").remove();
      }
    }, 3000);
  },
  success: function(text=''){
    this.show(text, 'success');
  },
  danger: function(text=''){
    this.show(text, 'danger');
  },
  warning: function(text=''){
    this.show(text, 'warning');
  },
  info: function(text=''){
    this.show(text, 'info');
  }
};