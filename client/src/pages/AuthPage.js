import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const { request } = useHttp()
    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    const changeHandler = event => {
        setForm(oldForm => ({ ...oldForm, [event.target.name]: event.target.value }))
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            if (data.message)
                alert(data.message)
            else
                console.log(data)
        } catch (e) {

        }

    }

    return (
        <div className="row justify-content-center mt-4 ml-1 mr-1">
            <div className="card col-md-9 col-lg-6">
                    <div className="card-body">
                        <h3 className="card-title">Авторизация</h3>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Имя пользователя</label>
                            <input
                                name="login"
                                type="text"
                                className="form-control"
                                id="login"
                                value={form.login}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Пароль</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                value={form.password}
                                onChange={changeHandler}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{marginRight: 10}}
                            onClick={loginHandler}>
                                Войти
                        </button>
                        <button className="btn btn-secondary">Отмена</button>
                    </div>
            </div>
        </div>
    )
}