console.log("Hello");

uppercase.addEventListener('click',() => {
    // console.log("Hello");
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener('click',() => {
    // console.log("Hello");
    inpText.value = inpText.value.toLowerCase()
})

clearscreen.addEventListener('click',() => {
    // console.log("Hello");
    inpText.value = ''
    wordcount.innerText = 0
    charcount.innerText = 0
})

inpText.addEventListener('input',() => {
    // const inputValue = inpText.value.trim(); // Remove leading and trailing whitespace
    const words = inpText.value.split(/\s+/); // Split input value by any whitespace characters
    charcount.innerText = inpText.value.length;
    wordcount.innerText = words.length;
    wordcount.innerText = words == '' ? 0 : words.length;
   
})

extraspaces.addEventListener('click',() => {
    // console.log("Hello");
    inpText.value = inpText.value.replace(/\s+/g, " ").trim()
    const words = inpText.value.split(/\s+/); // Split input value by any whitespace characters
    charcount.innerText = inpText.value.length;
    wordcount.innerText = words.length;
    wordcount.innerText = words == '' ? 0 : words.length;
})

extralines.addEventListener('click',() => {
    // console.log("Hello");
    inpText.value = inpText.value.replace(/\n+/g, "\n").trim()
    const words = inpText.value.split(/\s+/); // Split input value by any whitespace characters
    charcount.innerText = inpText.value.length;
    wordcount.innerText = words.length;
    wordcount.innerText = words == '' ? 0 : words.length;
})