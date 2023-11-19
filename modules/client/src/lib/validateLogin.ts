import {ElMessage} from "element-plus";

export const validateLogin = (login, password) => {

    const LOGIN_INVALID_PHRASE = 'Логин должен содержать только цифры и латинские буквы.'
    const PASSWORD_INVALID_PHRASE = 'Пароль должен быть не меньше шести символов и в нем не должно быть пробелов.'

    const errorMes = (mes) => {
        ElMessage({
            showClose: true,
            message: mes,
            type: 'error',
        })

        return false
    }

    const loginValidate = /^[A-Za-z0-9]*$/.test(login)
    const passwordValidate = /^\S*$/.test(password)

    if (!login || !loginValidate) return errorMes(LOGIN_INVALID_PHRASE)
    if (!password || password.length < 6 || !passwordValidate) return errorMes(PASSWORD_INVALID_PHRASE)

    else return true
}