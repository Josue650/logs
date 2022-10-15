const React = require('react')

class New extends React.Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
module.exports = New
