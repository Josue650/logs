const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.log
        return (
            <Default title={`${title} Edit Page`} log={this.props.log}>
                <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                    Title: <input type="text" name="title" defaultValue={title}/><br />
                    Entry: <input type="text" name="entry" defaultValue={entry}/><br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}/> <br />
                    <input type="submit" value="Edit Log" />
                </form>
            </Default>
        )
    }
}
module.exports = Edit
