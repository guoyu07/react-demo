/*React 独有的JSX语法,跟Javascript不兼容*/
//HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法
//render方法相当于jQuery里面的appendTo(),第一个是参数是DOM元素,第二个参数是要插入的DOM位置
//插入到DOM的元素,都会自动被分配一个data-reactid属性
ReactDOM.render(
    <h1> Hello, world! </h1>,
    document.getElementById('example')
);