function yes()
{
    alert('<3')
}

function no()
{
    let randomWidth=(Math.random()*window.innerWidth);
    let randomHeight=(Math.random()*window.innerHeight);
    
    document.getElementById('no').style.left = randomWidth + 'px';
    document.getElementById('no').style.top = randomHeight + 'px';
}