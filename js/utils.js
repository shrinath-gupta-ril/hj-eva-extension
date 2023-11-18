function getElementByExactClassFromNode(node, className) {
    let elements = Array.from(node.querySelectorAll('.' + className)).filter(function (element) {
        return element.className === className;
    });
    if (elements.length == 0) {
        return null
    }
    return elements[0]
}

function getElementsByExactClassFromNode(node, className) {
    let elements = Array.from(node.querySelectorAll('.' + className)).filter(function (element) {
        return element.className === className;
    });
    if (elements.length == 0) {
        return null
    }
    return elements
}