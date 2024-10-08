import React from 'react'
import './Auth.scss'
import EmailInput from './EmailInput/EmailInput'
import PasswordInput from './PasswordInput/PasswordInput'
import git from '@assets/git-icon.svg'
import google from '@assets/google-icon.svg'
import vk from '@assets/vk-icon.svg'

function Auth() {
	return (
		<main className='auth__wrapper'>
			<h1>Войдите в свой аккаунт</h1>
			<form className='auth__form' method='POST'>
				<div className='input__fields'>
					<EmailInput />
					<PasswordInput />
				</div>
				<div className='auth__forget__btns'>
					<div className='auth__btn'>
						<p>Войти</p>
						<div className='btn__circle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='15'
								height='14'
								viewBox='0 0 15 14'
								fill='none'
								className='btn__arrow'
							>
								<path
									d='M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z'
									fill='black' // var(--primary-color)
								/>
							</svg>
						</div>
					</div>
					<p>Забыли пароль?</p>
				</div>
				<div className='other__auth__btns'>
					<hr></hr>
					<p>Или продолжить через:</p>
					<div className='btns'>
						<img src={vk} alt='' className='aside-settings__icon' />
						<img src={google} alt='' className='aside-settings__icon' />
						<img src={git} alt='' className='aside-settings__icon' />
					</div>
				</div>
			</form>
			<div className='link__registr'>
				<h2>В первый раз в PolyGames?</h2>
				<p>Создать аккаунт</p>
			</div>
		</main>
	)
}

export default Auth
