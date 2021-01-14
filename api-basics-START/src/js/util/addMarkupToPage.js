function addMarkupToPage(wrapper, wrapperClass, elementsArry){
    const container = document.createElement(wrapper)

    elementsArry.array.forEach(element=>{
        container.append(element)
    });
}