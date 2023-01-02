function displaynum(numOp){
    Calculator.text1.value = Calculator.text1.value + numOp;
}

function del(){
    Calculator.text1.value = Calculator.text1.value
    .slice(0,-1);
}

const html = document.querySelector("html");

const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const dark = {
    bg: getStyle(html, "--bg")
}

const white ={
    bg: "#whitesmoke"
}

const transformKey = key => "--" + key.replace(/([A-Z])/).toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(white) : changeColors(dark)
})

