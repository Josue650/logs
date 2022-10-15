const React = require('react')

class Show extends React.Component {
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return(
            <>
            <h1> {capTitle}</h1>
            <nav>
                < a href="/logs">Back to Logs Home</a><br />
                < a href={`/logs/${_id}/edit`}>{`Edit the ${capTitle}`}</a>
            </nav>

            <p>{capTitle} {entry}, as for the ship {shipIsBroken? 'it\'s broken' :'it\'s not broken'}</p>
            </>
        )
    }
}

module.exports = Show
