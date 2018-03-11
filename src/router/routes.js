// import { routes as app } from 'src/app'
import app from 'src/app';
// import app from 'src/app'

app.vuex;

const root = [
    { path: '/', redirect: '/dashboard' }
]

export default [ ...root, ...app]