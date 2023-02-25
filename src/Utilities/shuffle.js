

const shuffle = () => {
const assets = [
  {image: 'public\assets\dart.png'},
  {image: 'public\assets\css.png'},
  {image: 'public\assets\firebase.png'},
  {image: 'public\assets\node (1).png'},
  {image: 'public\assets\flutter.png'},
  {image: 'public\assets\html5 (1).png'},
  {image: 'public\assets\js.png'},
  {image: 'public\assets\react.png'}
]
return [...assets, ...assets]
  .sort(() => Math.random()-0.5)
  .map((card) => ({...card, id: Math.random()}))
}

export default shuffle  