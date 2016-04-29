define(['react'], function (React) {
    /**
     * <TimeMessage elapsed={100} />
     */
    var TimeMessage = React.createClass({
        displayName: 'TimeMessage',

        render: function () {
            var elapsed = Math.round(this.props.elapsed / 100);
            var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');

            // JSX code
            return React.createElement(
                'p',
                null,
                'React has been successfully running for ',
                seconds,
                ' seconds.'
            );
        }
    });

    /**
     * <Timer start={aDate} />
     */
    var Timer = React.createClass({
        displayName: 'Timer',

        getInitialState: function () {
            return { now: new Date() };
        },

        componentDidMount: function () {
            var that = this;
            setInterval(function () {
                that.setState({ now: new Date() });
            }, 50);
        },

        render: function () {
            // JSX code
            var elapsed = this.state.now.getTime() - this.props.start.getTime();
            return React.createElement(TimeMessage, { elapsed: elapsed });
        }
    });

    // list of things
    var Radio = React.createClass({
        displayName: 'Radio',

        display: 'Radio',

        render: function () {
            return React.createElement(
                'div',
                { className: 'ui checkbox' },
                React.createElement('input', { type: 'checkbox', name: 'example' }),
                React.createElement(
                    'label',
                    null,
                    'Make my profile visible'
                )
            );
        }
    });

    var Form = React.createClass({
        displayName: 'Form',

        display: 'Form',

        render: function () {}
    });

    var TableBody = React.createClass({
        displayName: 'TableBody',

        getInitialState: function () {
            return {
                'people': [{
                    'id': 1,
                    'name': 'Jimmi Lilki',
                    'registration': 'September 14, 2013',
                    'email': 'jhlilk22@yahoo.com',
                    'premium': 'true',
                    'highlight': false
                }, {
                    'id': 2,
                    'name': 'John Badger',
                    'registration': 'May 17, 2013',
                    'email': 'john@gmail.com',
                    'premium': 'true',
                    'highlight': false
                }, {
                    'id': 3,
                    'name': 'Sally Mann',
                    'registration': 'April 11, 2011',
                    'email': 'sally@sallymann.com',
                    'premium': 'false',
                    'highlight': false
                }]
            };
        },

        highlightRow: function () {},

        render: function () {
            var tableRows = this.state.people.map(function (person) {

                return React.createElement(
                    'tr',
                    { key: person.id, className: '' },
                    React.createElement(
                        'td',
                        { className: 'collapsing' },
                        React.createElement(
                            'div',
                            { className: 'ui fitted slider checkbox' },
                            React.createElement('input', { type: 'checkbox', defaultChecked: person.highlight }),
                            React.createElement('label', null)
                        )
                    ),
                    React.createElement(
                        'td',
                        null,
                        person.name
                    ),
                    React.createElement(
                        'td',
                        null,
                        person.registration
                    ),
                    React.createElement(
                        'td',
                        null,
                        person.email
                    ),
                    React.createElement(
                        'td',
                        null,
                        person.premium
                    )
                );
            });

            return React.createElement(
                'tbody',
                null,
                tableRows
            );
        }

    });

    var Table = React.createClass({
        displayName: 'Table',


        getInitialState: function () {
            return {};
        },

        handleAddUser: function (e) {
            alert('Adding user ...');
            return console.log(e);
        },

        handleApprove: function (e) {
            alert('Approving selected users');
            return console.log(e);
        },

        handleApproveAll: function (e) {
            alert('Approving all users');
            return console.log(e);
        },

        render: function () {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'table',
                    { className: 'ui compact celled definition table inverted green' },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                '    '
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Registration Date'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'E-mail address'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Premium Plan'
                            )
                        )
                    ),
                    React.createElement(TableBody, null),
                    React.createElement(
                        'tfoot',
                        { 'class': 'full-width' },
                        React.createElement(
                            'tr',
                            null,
                            React.createElement('th', null),
                            React.createElement(
                                'th',
                                { colSpan: '4' },
                                React.createElement(
                                    'div',
                                    { className: 'ui right floated small primary labeled icon button', onClick: this.handleAddUser },
                                    'Add User'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'ui small button', onClick: this.handleApprove },
                                    'Approve'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'ui small disabled button', onClick: this.handleApproveAll },
                                    'Approve All'
                                )
                            )
                        )
                    )
                )
            );
        }
    });

    // components
    var Components = {
        'Timer': Timer,
        'Table': Table
    };

    return Components;
});
