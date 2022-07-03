window.addEventListener('load',()=>{
    lottery('where');
    lottery('what');
});

function lottery(mode){
    let num = Math.floor(Math.random() * 44)+param[mode].base_num;
    document.getElementById(param[mode].ele_id).innerHTML = num;
}

const param = {
    where:{
        ele_id:"where_num",
        base_num:6
    },
    what:{
        ele_id:"what_num",
        base_num:51
    }
};