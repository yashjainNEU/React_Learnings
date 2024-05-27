
//this will return an React object with createElement method..
  const heading = React.createElement('h1', {id: 'heading',asd: 'test'}, 'Hello World form React')

  const head= React.createElement(
    'div', {id: 'parent-div'},[
      React.createElement(
        'div',{id:'child-div1'},[
          React.createElement('h1', {id: 'heading'}, 'Hello World form React'),
          React.createElement('p', {id: 'para'}, 'This is a paragraph') 
        ]
          ),
          React.createElement(
            'div',{id:'child-div2'},[
              React.createElement('h1', {id: 'heading'}, 'Hello World form React'),
              React.createElement('h2', {id: 'para'}, 'This is a paragraph') 
            ],)
    ]
  )
  
  const Root = ReactDOM.createRoot(document.getElementById('root'));
  // this will render the heading element to the root element in HTML formate
  Root.render(head);

