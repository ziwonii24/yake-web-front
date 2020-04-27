import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dotenv from 'dotenv'

import { CircularProgress } from '@material-ui/core'

import { login } from '../lib/authentication'
import '../styles/scss/User.scss'

dotenv.config()

const LoginPage = () => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ userId, setUserId ] = useState<string>('')  
    const [ userPass, setUserPass ] = useState<string>('')
    const [ error, setError ] = useState<string>('')

    const [ loading, setLoading ] = useState<Boolean>(false)

    const handleIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPass(e.target.value)
    }

    const handleClickSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()

        setLoading(true)

        try {
            const response = await axios.post(
                `${SERVER_IP}/auth/login`, 
                {
                    'user_id': userId,
                    'user_password': userPass
                },
                { 
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            console.log(response.data)            

            // TODO : 로그인 성공
            login(response.data.token)
            window.location.href = '/'
        }
        catch(e) {
            console.log(e)
            setError('아이디 또는 비밀번호가 틀립니다.')
        }

        setLoading(false)
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
                    <div className='loading-box'>{loading && <CircularProgress />}</div>

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