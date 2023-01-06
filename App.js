
/* This is js code */
// var heading=document.createElement("h1")
// heading.innerHTML="Hello World"
// value=document.getElementById("root")
// value.appendChild(heading)


 const heading= React.createElement("h1",{
    id:"title",
    style: {color: 'white', backgroundColor:"purple"}}
 ,"Namaste Everyone!")
 const heading2=React.createElement("h2",{},"We are Indians");

 const container=React.createElement("div",{id:"container"},[heading,heading2])

 const root=ReactDOM.createRoot(document.getElementById("root"))

 root.render(container)
