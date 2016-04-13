define(["dojo/_base/declare",
        "alfresco/core/Core",
        "alfresco/core/I18nUtils",
        "alfresco/dashlets/Dashlet"],
    function(declare, AlfCore, I18nUtils, Dashlet) {

        return declare([Dashlet], {
            /*
             * Add padding to the body.
             * smallpad (4px padding), mediumpad (10px padding - recommended) and largepad (16px padding)
             */
            additionalCssClasses: "mediumpad",

            /**
             * Explicit height in pixels of the Dashlet body.
             */
            bodyHeight: 200,

            /**
             * Id that will be used to store properties for this Dashlet.
             * i.e. the Dashlet height when using the resizer.
             */
            componentId: "component.react-widget",

            /**
             * The i18n scope to use for this Dashlet.
             */
            i18nScope: "react-widget.dashlets.RubbleWorkflowDashlet",

            /**
             * An array of the i18n files to use with this Dashlet.
             */
            i18nRequirements: [{i18nFile: "./i18n/RubbleWorkflowDashlet.properties"}],

            /**
             * The widgets to be acting as title bar actions.
             */
            widgetsForTitleBarActions: [
                {
                    id: "REACT_WIDGET_DASHLET_ACTIONS",
                    name: "alfresco/html/Label",
                    config: {
                        label: "Title-bar actions"
                    }
                }
            ],


            /**
             * The widgets to be placed in the body of the dashlet.
             */
            widgetsForBody: [
                {
                    id: "REACT_WIDGET_DASHLET_VERTICAL_LAYOUT",
                    name: "alfresco/layout/VerticalWidgets",
                    config: {
                        widgetWidth: 50,
                        widgets: [
                            {
                                id: "REACT_WIDGET_WIDGET",
                                name: "react-widgets/ReactWidget"
                            }
                        ]
                    }
                }
            ]

        });
    });