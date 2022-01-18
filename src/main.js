let html = document.querySelector('#html')
let style = document.querySelector('#style')
let str = `/**大家好，初次见面，请多关照~
*这是一个动态展示的文本。
*准备一个div*/
#square {
    border: 1px solid black;
    width: 400px;
    height: 400px;
}
/**这个div即将变成一个八卦图
*第一步：变圆*/
#square{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*第二步：画出太极八卦图的阴阳两极*/
#square{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
#square::before{
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50%;
    /* 调整元素位置 */
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    /* 生成鱼眼 */
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
}
#square::after{
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    background: #000;
    border-radius: 50%;
    /* 调整元素位置 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    /* 生成鱼眼 */
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
/* 第三步：让太极旋转起来 */
@keyframes taiji {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
#square {
    animation: taiji 2s linear infinite;
}
`

let n = 0
let str2 = ''

let step = () => {
    setTimeout(() => {
        if (n < str.length) {
            if (str[n] === '\n') { str2 += '<br>' }
            else if (str[n] === ' ') { str2 += '&nbsp;' }
            else { str2 += str[n] }
            // str2 += str[n] === '\n' ? '<br>' : str[n]
            // html.innerHTML = str.substring(0, n) // substring不包含n，必须执行到n+1
            html.innerHTML = str2
            style.innerHTML = str.substring(0, n)
            window.scrollTo(0, 999999)
            html.scrollTo(0, 999999)
            n += 1
            step()
        }
    }, 10)
}

step()