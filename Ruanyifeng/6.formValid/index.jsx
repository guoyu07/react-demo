/**
 *
 * 组件的getDefaultProps用于为组件设置默认属性
 * 而组件的propTypes属性,允许你对组件的属性类型进行限制
 * 以下的代码便是错误的,propTypes对象中的title被设置必须为字符串
 * 而我们提供的data为123,是数字类型
 * @type {number}
 */
var data = 123;
var MyTitle = React.createClass({
    getDefaultProps : function () {
        return {
            title : 'Hello World'
        };
    },
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1> {this.props.title} </h1>;
    }
});
ReactDOM.render(
    <MyTitle title={data} />,
    document.body
);