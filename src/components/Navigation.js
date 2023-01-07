import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function Navigation({ authUser, login, register, signOut }) {
    const [registerName, onRegisterNameChange, setRegisterName] = useInput('');
    const [loginEmail, onLoginEmailChange, setLoginEmail] = useInput('');
    const [registerEmail, onRegisterEmailChange, setRegisterEmail] = useInput('');
    const [loginPassword, onLoginPasswordChange, setLoginPassword] = useInput('');
    const [registerPassword, onRegisterPasswordChange, setRegisterPassword] = useInput('');
    
    const openLoginModal = () => {
        const loginModal = document.querySelector('.login-modal');
        const registerModal = document.querySelector('.register-modal');
        loginModal.classList.remove('hidden');
        registerModal.classList.add('hidden');
    }

    const openRegisterModal = () => {
        const loginModal = document.querySelector('.login-modal');
        const registerModal = document.querySelector('.register-modal');
        loginModal.classList.add('hidden');
        registerModal.classList.remove('hidden');
    }

    const closeModal = () => {
        const loginModal = document.querySelector('.login-modal');
        const registerModal = document.querySelector('.register-modal');
        loginModal.classList.add('hidden');
        registerModal.classList.add('hidden');
    }

    const loginHandler = (event, { email, password }) => {
        event.preventDefault();
        login({ email, password });
        setLoginEmail('');
        setLoginPassword('');
        closeModal();
    }
    
    const registerHandler = (event, { name, email, password }) => {
        event.preventDefault();
        register({ name, email, password });
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        closeModal();
    }

    if (authUser) {
        return <button className="bg-danger text-white py-2 px-5 rounded-md font-medium" onClick={signOut}>Logout</button>
    }

    return (
        <div>
            <button className="bg-primary text-white py-2 px-5 rounded-md font-medium" onClick={openLoginModal}>Login</button>
            <div className="login-modal fixed top-0 left-0 z-40 w-screen h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center hidden" onClick={closeModal}>
                <form className="bg-white px-5 py-4 lg:px-8 lg:py-7 rounded-lg w-3/4 md:w-1/2 lg:w-1/3" onClick={(event) => event.stopPropagation()} onSubmit={(event) => loginHandler(event, { email: loginEmail, password: loginPassword })}>
                    <h2 className="font-medium text-primary text-lg mb-5">Login</h2>
                    <div className="flex flex-col gap-2">
                        <input type="email" value={loginEmail} onChange={onLoginEmailChange} placeholder="Email" className="px-3 py-2 border rounded-md" required />
                        <input type="password" value={loginPassword} onChange={onLoginPasswordChange} placeholder="Password" className="px-3 py-2 border rounded-md" required />
                        <button type="submit" className="bg-primary text-white py-2 px-5 font-medium rounded-md mt-3">Login</button>
                        <p className="text-sm text-center mt-5">Don&apos;t have an account yet? <button className="text-[#38AC83]" onClick={openRegisterModal}>Sign Up</button></p>
                    </div>
                </form>
            </div>
            <div className="register-modal fixed top-0 left-0 z-40 w-screen h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center hidden" onClick={closeModal}>
                <form className="bg-white px-5 py-4 lg:px-8 lg:py-7 rounded-lg w-3/4 md:w-1/2 lg:w-1/3" onClick={(event) => event.stopPropagation()} onSubmit={(event) => registerHandler(event, { name: registerName, email: registerEmail, password: registerPassword })}>
                    <h2 className="font-medium text-primary text-lg mb-5">Register</h2>
                    <div className="flex flex-col gap-2">
                        <input type="name" value={registerName} onChange={onRegisterNameChange} placeholder="Name" className="px-3 py-2 border rounded-md" required />
                        <input type="email" value={registerEmail} onChange={onRegisterEmailChange} placeholder="Email" className="px-3 py-2 border rounded-md" required />
                        <input type="password" value={registerPassword} onChange={onRegisterPasswordChange} placeholder="Password" className="px-3 py-2 border rounded-md" required />
                        <button type="submit" className="bg-primary text-white py-2 px-5 font-medium rounded-md mt-3">Register</button>
                        <p className="text-sm text-center mt-5">Already have an account? <button className="text-[#38AC83]" onClick={openLoginModal}>Login</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

Navigation.propTypes = {
  authUser: PropTypes.object,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Navigation;
