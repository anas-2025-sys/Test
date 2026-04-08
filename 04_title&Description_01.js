

// const description = "This is new\n my description"
const description = "This is new\n my description and we are new\n not so new"

const lines = description.split("\n")
const title = lines[0] || "untitled"

const desc_slice = lines.slice(1)


const desc = lines.slice(1).join("\n")|| "No description"


console.log("[Test] description ---> ", description)
console.log("[Test] lines (description.split('/n') ---> ", lines)
console.log("[Test] title (lines[0] || 'untitled') ---> ", title)
console.log("[Test] desc_slice lines.slice(1). ---> ", desc_slice)


console.log("[Test] desc (lines.slice(1).join('/n')|| 'No description') ---> ", desc)