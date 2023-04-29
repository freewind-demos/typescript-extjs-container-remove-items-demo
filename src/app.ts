Ext.onReady(() => {
    function removeMe(button: any) {
        console.log("remove me: ", button);
        const main = Ext.ComponentQuery?.query?.('[reference=main]')[0] as Ext.container.Container;
        main.remove?.(button);
    }

    new Ext.panel.Panel({
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello',
        reference: 'main',
        items: [
            new Ext.button.Button({
                text: 'remove me 1',
                listeners: {
                    click: function () {
                        removeMe(this);
                    }
                }
            }),
            new Ext.button.Button({
                text: 'remove me 2',
                listeners: {
                    click: function () {
                        removeMe(this);
                    }
                }
            }),
            new Ext.button.Button({
                text: 'remove me 3',
                listeners: {
                    click: function () {
                        removeMe(this);
                    }
                }
            }),
            new Ext.button.Button({
                text: 'remove me 4',
                listeners: {
                    click: function () {
                        removeMe(this);
                    }
                }
            }),
        ]
    })
});
