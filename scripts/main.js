let t=document.getElementById("title_1")
t.textContent='hello, world!'

t.onclick=function (){
    alert("clicked")
}

let fig=document.getElementById("fig1")
fig.onclick=function (){
    let content=fig.getAttribute("src")
    if (content === "asset/test.jpg")
    {
        fig.setAttribute("src", "asset/test2.jpg")
    }
    else
    {
        fig.setAttribute("src", "asset/test.jpg")
    }
}