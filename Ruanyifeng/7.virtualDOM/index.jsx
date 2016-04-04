/**
 *
 * 组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM
 * 如果为组建中的DOM添加事件属性,则组件中的DOM必须要有一个ref属性
 * 然后通过this.refs.[refName]返回真实的 DOM 节点
 *
 * @type {ClassicComponentClass<P>}
 */
var MyComponent = React.createClass({
    handleClick: function() {
        this.refs.myTextInput.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);