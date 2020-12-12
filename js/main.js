
checkAuth()

function postRegister(self) {
    event.preventDefault()
    let profile = JSON.parse(localStorage.getItem("profile") || "[]")
    let infor = getFormData($(self))
    infor.point = 0
    const found = profile.find(ele => ele.username == infor.username);
    if (typeof found == "undefined") {
        profile.push(infor)
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('username', infor.username)
        alert('Successfully Register')
        window.location.href = 'login.html'
    } else {
        alert('Username Existed')
    }
}
function postLogin(self) {
    event.preventDefault()
    let auth = localStorage.getItem('auth') || ''
    localStorage.getItem('username') || ''
    localStorage.getItem('firstname') || ''
    localStorage.getItem('lastname') || ''
    localStorage.getItem('phone') || ''
    localStorage.getItem('email') || ''
    if (auth != 'true') {
        let profile = JSON.parse(localStorage.getItem("profile") || "[]")
        let infor = getFormData($(self))
        const found = profile.find(ele => (ele.username == infor.username && ele.password == infor.password));

        if (typeof found !== "undefined") {
            point = found.point
            username = found.username
            firstname = found.firstname
            lastname = found.lastname
            phone = found.phone
            email = found.email
            localStorage.setItem('auth', true)
            localStorage.setItem('username', username)
            localStorage.setItem('point', point)
            localStorage.setItem('firstname', firstname)
            localStorage.setItem('lastname', lastname)
            localStorage.setItem('phone', phone)
            localStorage.setItem('email', email)
            // console.log(username);
            checkAuth()
            alert('Successfully Login')
            window.location.href = 'index.html'
        } else {
            alert('Invalid Login')
        }
    } else {
        alert('You Logged!!!')
        window.location.href = 'index.html'
    }
}
function checkAuth() {
    let username = localStorage.getItem('username') 
    let auth = localStorage.getItem('auth') || ''
    let x = ``
    if (auth) {
        x = `
        <a href="javascript:void(0)" onclick="logout()" class="w3-bar-item w3-button">
        Logout
        </a>
        <a href="myprofile.html" class="w3-bar-item w3-button">${username}</a>
        `
    } else {
        x = `
        <a href="login.html" class="w3-bar-item w3-button">
        Login
        </a>
        <a href="login.html" class="w3-bar-item w3-button">My Account</a>
        `
    }
    $('#auth').html(x);
    $('#auth-small').html(x);
}
function logout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('point')
    checkAuth()
    alert('Successfully Logout')
    location.reload()
}
function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

