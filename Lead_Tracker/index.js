const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

inputBtn.addEventListener("click",function(){
    console.log("Button Clicked")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    ulEl.innerHTML = ""
    for (let i=0;i<myLeads.length;i++)
    {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    console.log(myLeads[i])
    const li = document.createElement("li")
    // li.innerHTML = "<a target='_blank' href='https://" +myLeads[i]+"'>"+ myLeads[i] + "</a>"
    li.innerHTML = `
    <a target='_blank' href='https://${myLeads[i]}'>
    ${myLeads[i]}
    </a>`
    ulEl.append(li)
    }
})