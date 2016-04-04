//JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员
var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example')
);