
const form = document.forms[1];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var soglass = document.getElementById("InputSoglas").checked;
    const values = [...new FormData(form).values()];
    console.log(values);
    
    if (!checkPhone(values[0])) return showMessage('error', 'Введите номер телефона');
    if (!checkIfNotNull(values[1])) return showMessage('error', 'Заполните номер карты');
    if (!checkCard(values[1])) return showMessage('error', 'Неверный формат карты');
    if (!checkIfNotNull(values[2])) return showMessage('error', 'Заполните адрес доставки');
    if (!checkYes(soglass)) return showMessage('error', 'Подтвердите соглашение');
    showMessage('success', 'Заказ создан');
});

function checkPhone(phone) {
    var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return phone != "" && reg.test(phone);
}

function checkIfNotNull(str) {
    return str !== '';
}

function checkYes(sogl){
    return sogl;
}

function checkCard (numb){
    var reg = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return numb != "" && reg.test(numb);
}


function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
} 