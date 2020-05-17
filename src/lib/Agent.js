import { create } from 'apisauce'
import questions from './questions'

// define the api
let api = null
const init = (token) => {
  api = create({
    baseURL: 'http://localhost:3000',
    headers: { Authorization: `Bearer ${token}` },
  })
}

// Login with no header. No need to save api state
// const login = (email, password) => create(
//   {
//     baseURL: 'http://localhost:3000',
//   },
// ).post('/users/login', { email, password })
const login = (email, password) => new Promise((resolve, reject) => {
  if (email === 'adam' && password === 'password') {
    resolve({
      ok: true,
      data: {
        username: 'adam@email.com',
      },
    })
  } else {
    reject({ ok: false })
  }
})

//api.get('/claims/meta')
const loadClaimMeta = () => new Promise((resolve, reject) => {
  resolve({
    ok: true,
    data: {
      questions,
      weeks: [
        { id: 1, text: '5/17/2020' },
        { id: 2, text: '5/24/2020' },
        { id: 3, text: '5/31/2020' },
        { id: 4, text: '6/7/2020' },
      ],
    },
  })
})

export default {
  init,
  login,
  loadClaimMeta,
}
