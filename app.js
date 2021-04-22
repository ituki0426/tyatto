let isMyself = true;
let sendBtn =document.getElementById("sendBtn");
sendBtn.addEventListener('click',function(){
    let inputMessage = document.getElementById("inputMessage");
    let messagetext = inputMessage.value;
    console.log(messagetext);
    if(messagetext==''){
        return;
    }
    //document.createElement('x')=hemlにｘ要素を作成している
    let messagebox = document.createElement('div');
    if(isMyself){
        messagebox.classList.add('box-right');
    }else{
        messagebox.classList.add('box-left');
    }
    //x.classList.add('y')x要素にyというクラスを作成している
    messagebox.classList.add('box-right');
    let massage = document.createElement('p');
    //x.textContent=y 要素にyという文字を入力している
    massage.textContent=messagetext;
    massage.classList.add('message-box');
    if(isMyself){
    massage.classList.add('green');
}else
{
        messagebox.classList.add('white');
    }
    //x.appendChild(y)=
    messagebox.appendChild(massage);
    let room= document.getElementById('room');
    //チャット画面のdiv要素に新規メッセージのdivを追加する。
    //appendChildを使うことで指定した要素一番最後に要素を追加する
    room.appendChild(messagebox);
    //入力欄の入力値をリセットしている
    inputMessage.value='';
    if(isMyself){
        isMyself=false;
    }else{
        isMyself=true;
    }

})
