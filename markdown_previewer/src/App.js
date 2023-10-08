import { marked } from "marked";
import { Badge } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [text, newText] = useState(`
  # h1
  ## h2
  a link [anik paul limon](https://www.freecodecamp.org/anik-paul-limon)

  \`inline code\`

  a code block is down there

  \`\`\`
  {
    "firstName":"Rahim",
    "lastName":"Uddin",
    "age":35 
  } 
  \`\`\`


  a list item of use tools
  - React
  - JavaScript
  - Bootstrap
  - HTML
  >a blockquote


  ![an image of react](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)


  **a bolded text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="row mt-5">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 input">
              <h4 className="text-center">
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
              <textarea
                className="form-control"
                id="editor"
                onChange={(e) => {
                  newText(e.target.value);
                }}
                value={text}
              ></textarea>
            </div>
            <div className="col-md-6">
              <h4 className="text-center">
                <Badge className="text-align-center" version="secondary">
                  preview
                </Badge>
              </h4>
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(text) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
