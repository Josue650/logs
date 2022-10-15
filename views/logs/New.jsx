const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
    render() {
        return (
            <Default>
            <h1>Create A New Log</h1>
             {/* <nav>
                <a href='/logs'>Go back to Logs Home Page</a>
            </nav> */}
            <form action="/logs" method='POST'>
                Title: <input type="text" name='title' />
                Entry: <input type="textarea" name='entry' />
                Ship is Broken: <input type="checkbox" name='shipIsBroken' />
                <input type="submit" value="Submit Entry" />
            </form>
            </Default>
        )
    }
}
module.exports = New
