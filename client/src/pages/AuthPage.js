import React from 'react'

export const AuthPage = () => {
    return (
        <div className="row justify-content-center mt-4 ml-1 mr-1">
            <div className="card col-md-9 col-lg-6">
                    <div className="card-body">
                        <h3 className="card-title">Авторизация</h3>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Имя пользователя</label>
                            <input type="text" className="form-control" id="login"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="login"/>
                        </div>
                        <a href="#" className="btn btn-primary" style={{marginRight: 10}}>Войти</a>
                        <a href="#" className="btn btn-secondary">Отмена</a>
                    </div>
            </div>
        </div>
    )
}