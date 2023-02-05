// ReactDOM.render(<h1>Hello, folks</h1>, document.getElementById('root'))


//Принцип сортування
const words = ['absd0', 'destruction', 'promo', 'discount', 'randomword', 'limit',];
words.sort((a, b) =>{
    console.log('a: ', a, 'b: ', b);
    return a.length - b.length;
});