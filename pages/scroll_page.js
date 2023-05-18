const { I } = inject();

module.exports = {

doScroll() {
    I.touchPerform([
        {
        action: 'longPress',
        options: {x: 300,y: 1100}
    },
    {
        action: 'moveTo',
        options: {x: 300,y: 250}
    },
    {action: 'release'}
    ])
}
}