import actionTypes from '../constants/actionTypes'

export default function successMiddleware() {
  return next => action => {
    const { type, text } = action

    // here comes the magic!
    if (type === actionTypes.ADD_TODO && text.toLowerCase() === 'success') {
      const div = document.createElement('div')
      div.className = 'ntnx-success'
      const img = document.createElement('img')
      img.src = '/success.gif'
      div.append(img)
      document.body.append(div)
    }

    return next(action)
  }
}
