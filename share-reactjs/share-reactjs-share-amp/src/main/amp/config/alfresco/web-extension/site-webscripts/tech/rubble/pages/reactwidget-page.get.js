model.jsonModel = {
    widgets: [{
        id: "SET_PAGE_TITLE",
        name: "alfresco/header/SetTitle",
        config: {
            title: "ReactJS widget"
        }
    },
        {
            id: "REACTWIDGET_VERTICAL_LAYOUT",
            name: "alfresco/layout/VerticalWidgets",
            config: {
                widgetWidth: 50,
                widgets: [
                    {
                        id: "REACT_WIDGET",
                        name: "react-widget/ReactWidget"
                    }
                ]
            }
        }]
};