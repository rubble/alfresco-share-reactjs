define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/ReactWidget.html",
        "react",
        "react-dom",
        "./JSXComponents"
    ],
    function(declare, _Widget, Core, _Templated, template, React, ReactDOM, Components) {
        
        // Your React classes go here
        var Hello = React.createClass({
            displayName: 'Hello',
            render: function() {
                return React.createElement("div", null, "Hello ", this.props.name);
            }
        });

        var start = new Date();
        var Timer = React.createFactory(Components.Timer);
        var Table = React.createFactory(Components.Table);

        return declare([_Widget, Core, _Templated], {
            templateString: template,
            i18nRequirements: [ {i18nFile: "./i18n/ReactWidget.properties"} ],
            cssRequirements: [
                {cssFile:"./css/font-awesome.min.css"},
                {cssFile:"./css/semantic.css"},
                {cssFile:"./css/ReactWidget.css"}
                ],
            
            buildRendering: function reactwidgets_widgets_TemplateWidget__buildRendering() {
                this.inherited(arguments);
            },
            
            postCreate: function() {
                // Mount the JSX component in the app container
                React.render(
                    Table(),
                    document.getElementById('app')
                );
            }
        });
});