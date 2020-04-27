import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dotenv from 'dotenv'

import { InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@material-ui/core'

dotenv.config()

const getYearRange = () => {
    var curYear = new Date().getFullYear()
    var arr = []
    for(var i=0; i<100; i++) {
        arr[i] = curYear--;
    }
    return arr
}

const JoinPage = () => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ userId, setUserId ] = useState<string>('')  
    const [ userPass, setUserPass ] = useState<string>('')
    const [ userPassAgain, setUserPassAgain ] = useState<string>('')
    const [ userAge, setUserAge ] = useState<string>(new Date().getFullYear().toString())
    const [ userGender, setUserGender ] = useState<string>('male')

    const [ idCheckErr, setIdCheckErr ] = useState<boolean>(false)
    const [ idCheckMsg, setIdCheckMsg ] = useState<string>('')
    const [ passCheckErr, setPassCheckErr ] = useState<boolean>(false)
    const [ passCheckMsg, setPassCheckMsg ] = useState<string>('')
    const [ submitMsg, setSubmitMsg ] = useState<string>('')

    const yearArray = getYearRange()
    
    const [ loading, setLoading ] = useState<Boolean>(false)

    const handleChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const handleChangeUserPass = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPass(e.target.value)
    }

    const handleChangeUserPassAgain = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPassAgain(e.target.value)
        if(userPass !== e.target.value){
            setPassCheckMsg('비밀번호가 일치하지 않습니다.')
            setPassCheckErr(false)
        } else {
            setPassCheckMsg('')
            setPassCheckErr(true)
        }
    }

    const handleChangeUserAge = (e: ChangeEvent<{ value: unknown }>) => {
        setUserAge(e.target.value as string)
    }

    const handleChangeUserGender = (e: ChangeEvent<HTMLInputElement>) => {
        setUserGender((e.target as HTMLInputElement).value)
    }

    const handleClickCheckId = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()

        console.log(userId)

        // TODO : trim 설정, 아무것도 안쓰면 안되게, 입력후 엔터해도 작동되도록

        try {
            const response = await axios.get(`${SERVER_IP}/auth/signup?user_id=${userId}`)
            console.log(response.data)

            if(response.data.msg === 'possible') {
                setIdCheckMsg('사용 가능한 아이디입니다.')
                setIdCheckErr(true)
            } else {
                setIdCheckMsg('이미 있는 아이디입니다.')
                setIdCheckErr(false)
            }
        }
        catch(e) {
            console.log(e)
            setIdCheckMsg('이미 있는 아이디입니다.')
            setIdCheckErr(false)
        }
    }

    const handleClickSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()

        if(!idCheckErr || !passCheckErr) {
            setSubmitMsg('입력란을 모두 채워주세요.')
            return
        }

        setLoading(true)

        try {
            const response = await axios.post(
                `${SERVER_IP}/auth/signup`, 
                {
                    'user_id': userId,
                    'user_password': userPass,
                    'user_birth_year': userAge,
                    'user_gender': userGender   
                },
                { 
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            console.log(response.data)            

            // TODO : 회원가입 성공한 경우 alert띄우고 로그인 페이지로
            alert('회원가입을 환영합니다~!')
            window.location.href = '/login'
        }
        catch(e) {
            console.log(e)
            setSubmitMsg('잠시 후 다시 시도하세요.')
        }

        setLoading(false)
    }
    
    return (
        <div className='user-template'>
            <div className='user-box'>
                <h4 className='user-form-title'>회원가입</h4>
                <form>
                    <div className='input-need-check'>
                        <input className='input-auth' type='text' placeholder='아이디' value={userId} onChange={handleChangeUserId}/>
                        <button className='btn-check' onClick={handleClickCheckId}>확인</button>
                    </div>

                    <div className='check-msg'>{idCheckMsg}</div>
                    
                    <div>
                        <input className='input-auth' type='password' placeholder='비밀번호' value={userPass} onChange={handleChangeUserPass}/>
                    </div>

                    <div>
                        <input className='input-auth' type='password' placeholder='비밀번호 확인' value={userPassAgain} onChange={handleChangeUserPassAgain}/>
                    </div>

                    <div className='check-msg'>{passCheckMsg}</div>

                    <div className='select-box'>
                        <InputLabel>태어난 년도</InputLabel>
                        <Select value={userAge} onChange={handleChangeUserAge} className='select-age'>
                            { yearArray.map(year =>
                                <MenuItem key={year} value={year}>{year}</MenuItem>                            
                            )}
                        </Select>
                    </div>

                    <div className='select-box'>
                        <InputLabel>성별</InputLabel>
                        <RadioGroup value={userGender} onChange={handleChangeUserGender}>
                            <FormControlLabel value="male" control={<Radio />} label="남" />
                            <FormControlLabel value="female" control={<Radio />} label="여" />
                        </RadioGroup>
                    </div>

                    <div className='error-msg'>{submitMsg}</div>
                    <div className='loading-box'>{loading && <CircularProgress />}</div>

                    <div>
                            <button className='btn-submit' type='submit' onClick={handleClickSubmit}>회원가입</button>
                    </div>
                </form>

                <div className='auth-footer'>
                    <Link to='/login'>로그인</Link>
                </div>
            </div>
        </div>
    )
}

export default JoinPage