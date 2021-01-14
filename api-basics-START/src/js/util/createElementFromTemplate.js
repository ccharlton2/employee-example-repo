/*
    @method createElementFromTmplate
    @params array of template literals as valid markup
*/

function createElementFromTemplate (template=[]) {
    let elements;

    if(template.length === 0) {
        throw new Error("You must add an array of template literals as valid markup")
    }

    elements = template.map((temlateLiteral, index) => {
        const element = document.createRange().createContextualFragment(template)
        console.log(element)
        return element
    })

    return elements
}

export default createElementFromTemplate