define(['react'], function(React) {
    /**
     * <TimeMessage elapsed={100} />
     */
    var TimeMessage = React.createClass({
        render: function() {
            var elapsed = Math.round(this.props.elapsed  / 100);
            var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );

            // JSX code
            return <p>React has been successfully running for {seconds} seconds.</p>;
        }
    });

    /**
     * <Timer start={aDate} />
     */
    var Timer = React.createClass({
        getInitialState: function() {
            return {now: new Date()};
        },

        componentDidMount: function() {
            var that = this;
            setInterval(function() {
                that.setState({now: new Date()});
            }, 50);
        },

        render: function() {
            // JSX code
            var elapsed = this.state.now.getTime() - this.props.start.getTime();
            return <TimeMessage elapsed={elapsed} />;
        }
    });

    // list of things
    var Radio = React.createClass({
        display: 'Radio',

        render: function() {
            return (
                <div className="ui checkbox">
                    <input type="checkbox" name="example" />
                    <label>Make my profile visible</label>
                </div>
            )
        }
    });

    var Form = React.createClass({
        display: 'Form',

        render: function() {

        }
    });

    var TableBody = React.createClass({
        getInitialState: function(){
            return (
                {
                    'people': [
                        {
                            'id': 1,
                            'name': 'Jimmi Lilki',
                            'registration': 'September 14, 2013',
                            'email': 'jhlilk22@yahoo.com',
                            'premium': 'true',
                            'highlight': false
                        },
                        {
                            'id': 2,
                            'name': 'John Badger',
                            'registration': 'May 17, 2013',
                            'email': 'john@gmail.com',
                            'premium': 'true',
                            'highlight': false
                        },
                        {
                            'id': 3,
                            'name': 'Sally Mann',
                            'registration': 'April 11, 2011',
                            'email': 'sally@sallymann.com',
                            'premium': 'false',
                            'highlight': false
                        },
                    ]
                }
            )
        },

        highlightRow: function() {

        },

        render: function() {
            var tableRows = this.state.people.map(function(person) {

                return (
                    <tr key={person.id} className="">
                        <td className="collapsing">
                            <div className="ui fitted slider checkbox">
                                <input type="checkbox" defaultChecked={person.highlight} />
                                <label></label>
                            </div>
                        </td>
                        <td>{person.name}</td>
                        <td>{person.registration}</td>
                        <td>{person.email}</td>
                        <td>{person.premium}</td>
                    </tr>
                );
            });

            return (
                <tbody>
                    {tableRows}
                </tbody>
            )
        }

    });

    var Table = React.createClass({

        getInitialState: function() {
            return {}
        },

        handleAddUser: function(e) {
            alert('Adding user ...');
            return console.log(e);
        },

        handleApprove: function(e) {
            alert('Approving selected users');
            return console.log(e);
        },

        handleApproveAll: function(e) {
            alert('Approving all users');
            return console.log(e);
        },

        render: function() {
            return (
                <div>
                <table className="ui compact celled definition table inverted green">
                    <thead>
                        <tr>
                            <th>    </th>
                            <th>Name</th>
                            <th>Registration Date</th>
                            <th>E-mail address</th>
                            <th>Premium Plan</th>
                        </tr>
                    </thead>
                    <TableBody />
                    <tfoot class="full-width">
                        <tr>
                            <th></th>
                            <th colSpan="4">
                                <div className="ui right floated small primary labeled icon button" onClick={this.handleAddUser}>
                                    Add User
                                </div>
                                <div className="ui small button" onClick={this.handleApprove}>
                                    Approve
                                </div>
                                <div className="ui small disabled button" onClick={this.handleApproveAll}>
                                    Approve All
                                </div>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            )
        }
    });

    // components
    var Components = {
        'Timer': Timer,
        'Table': Table
    };

    return Components;
});