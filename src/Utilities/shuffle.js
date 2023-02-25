

const shuffle = () => {
const assets = [
  {image: '/assets/dart.png'},
  {image: '/assets/css.png'},
  {image: '/assets/firebase.png'},
  {image: '/assets/node (1).png'},
  {image: '/assets/flutter.png'},
  {image: '/assets/html5 (1).png'},
  {image: '/assets/js.png'},
  {image: '/assets/react.png'}
]
return [...assets, ...assets]
  .sort(() => Math.random()-0.5)
  .map((card) => ({...card, id: Math.random()}))
}

export default shuffle  