import './index.css'
import './index.less'
function createElement() {
    let div = document.createElement('div');
    div.innerHTML = 'hello world';
    return div;
}
document.body.appendChild(createElement())