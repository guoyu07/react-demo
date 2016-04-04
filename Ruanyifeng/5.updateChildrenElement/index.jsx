/**
 * 可以很方便的将指定元素下的DOM进行增删改
 * @type {__React.ClassicComponentClass<P>|ClassicComponentClass<P>}
 */
var NotesList = React.createClass({
    render: function () {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});

ReactDOM.render(
    <NotesList> <span>hello</span> <span>world</span> </NotesList>,
    document.body
);