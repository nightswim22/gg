
function headerStyle(column) {
    return {
        year: {
            css: {
                background: '#076ab7', color: 'white'
            }
        },
        name: {
            css: {
                background: '#076ab7', color: 'white'
            }
        },
        company: {
            css: { background: '#076ab7', color: 'white' }
        },
    }[column.field]
}
