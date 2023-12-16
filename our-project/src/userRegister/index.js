// import { Footer, RegisterHeader, UserForm } from "./userRegister";
import Header from '../../src/componentsCopy/header/header.js'
import './userRegister.css'
import UserRegister from './userRegister.js'


export default function userRegister() {
    return (
        <main>
        <Header />
        <UserRegister/>
        </main>
    )
}