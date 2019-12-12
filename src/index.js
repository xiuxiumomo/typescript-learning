import './index.css'
import './index.less'
import _ from 'lodash'
function createElement() {
    let div = document.createElement('div')
    div.innerHTML = _.join(['hello','world'])
    console.log(11221122)
    return div
}
document.body.appendChild(createElement())