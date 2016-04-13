define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/ReactWidget.html",
        "react",
        "react-dom"
    ],
    function(declare, _Widget, Core, _Templated, template, React, ReactDOM) {
        
        // Your React classes go here
        var Hello = React.createClass({
            displayName: 'Hello',
            render: function() {
                return React.createElement("div", null, "Hello ", this.props.name);
            }
        });
        
        return declare([_Widget, Core, _Templated], {
            templateString: template,
            i18nRequirements: [ {i18nFile: "./i18n/ReactWidget.properties"} ],
            cssRequirements: [{cssFile:"./css/ReactWidget.css"}],
            
            buildRendering: function reactwidgets_widgets_TemplateWidget__buildRendering() {
                this.inherited(arguments);
            },
            
            postCreate: function() {
                ReactDOM.render(
                    React.createElement(Hello, {name: "World"}),
                    document.getElementById('app')
                );
            }
        });
});