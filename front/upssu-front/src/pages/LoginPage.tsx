import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import '../styles/scss/User.scss'

const LoginPage = () => {

    const [ userId, setUserId ] = useState<string>('')  
    const [ userPass, setUserPass ] = useState<string>('')
    const [ error, setError ] = useState<string>('')

    const handleIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPass(e.target.value)
    }

    const handleClickSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
    }

    return (
        <div className='user-template'>
            <div className='user-box'>
                <h4 className='user-form-title'>로그인</h4>
                <form>
                    <div>
                        <input className='input-auth' type='text' placeholder='아이디' value={userId} onChange={handleIdInputChange}/>
                    </div>

                    <div>
                        <input className='input-auth' type='password' placeholder='비밀번호' value={userPass} onChange={handlePasswordInputChange}/>
                    </div>

                    { error && <div className='error-msg'>{error}</div> }

                    <div>                        
                        <button className='btn-submit' type='submit' onClick={handleClickSubmit}>로그인</button>
                    </div>
                </form>

                <div className='auth-footer'>
                    <Link to='/join'>회원가입</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage