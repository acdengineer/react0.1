const h1=React.createElement("h1",{
  id: "heading",
  className : "heading"
},
  React.createElement("p",{null},"Hello React"))
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)
