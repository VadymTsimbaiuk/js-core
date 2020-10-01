const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    const content = getS('.top-block').innerHTML;
    getS('.edit-area').value = content;
}
getS('.btn-save').onclick = () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
});

const fontSize = () => {
    //console.log(event.target.value);
    getS('.top-block').style.fontSize = event.target.value;
}


let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
    console.log(this.value);
    getS('.top-block').style.fontFamily = this.value
}

let colors = ['red', 'green', 'black', 'yellow', 'salmon', 'blue', 'lightcyan', 'violet', 'brown'];

getS('.btn-text-color').onclick = () => {
    getS('.colors').style.display = "flex";
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
            getS('.colors').style.display = "none";
        }
    }
}
getS('.btn-bg-color').onclick = () => {
    getS('.colors').style.display = "flex";
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            getS('.colors').style.display = "none";
        };
    };
};


const fontWeightchecked = () => {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold')
    } else {
        getS('.top-block').classList.remove('bold');
    };
};

const fontFamilychecked = () => {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive')
    } else {
        getS('.top-block').classList.remove('cursive');
    };
};

getS('.btn-add').onclick = () => {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

const list = document.forms['form-list'];

getS('.btn-create-list').onclick = () => {

    const countLi = list.count.value;
    const typeLi = list.type.value;

    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1} </li>`
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');

}

let fTableList = document.getElementById('tableList');
fTableList.onclick = () => {
    for (let i = 1; i < fTableList.length; i++) {
        if (fTableList[0].checked) {
            getS('.create-list').classList.remove('hide');
            getS('.create-table').classList.add('hide')
        } else if (fTableList[1].checked) {
            getS('.create-table').classList.remove('hide');
            getS('.create-list').classList.add('hide');
        }
    }
}

getS('.btn-create-table').onclick = () => {
    let tr = formTable.tr.value;
    let td = formTable.td.value;
    let width = formTable.width.value;
    let height = formTable.height.value;
    let border = [formTable.borderWidth.value, typeBorder.value, colorBorder.value];
    console.log(tr, td, width, height, border);
    getS('.edit-area').value += `<table style="border-collapse: collapse">`

    for (let i = 0; i < tr; i++) {
        getS('.edit-area').value += `<tr>`
        for (let i = 0; i < td; i++) {
            getS('.edit-area').value += `<td style="
            width: ${width}px;
            height: ${height}px;
            border: ${border[0]}px ${border[1]} ${border[2]};
            padding: 5px;
        "> item = ${i + 1}</td>`
        }
        getS('.edit-area').value += `</tr>`
    }
    getS('.edit-area').value += `</table>`;
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
