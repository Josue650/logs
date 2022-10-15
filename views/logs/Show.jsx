const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return(
            <Default title={`${capTitle} Show Page`} log={this.props.log}>
                <p>{capTitle} {entry}, as for the ship {shipIsBroken? 'it\'s broken' :'it\'s not broken'}</p>
            </Default>
        )
    }
}

module.exports = Show

