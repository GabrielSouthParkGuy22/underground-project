import Header from "../../componentsCopy/header/header";

import { Footer, RegisterHeader, UserForm } from './userRegister.js'
import './userRegister.css'


export default function userRegister() {
    return (
        <main>
        <Header />
        <RegisterHeader />
        <UserForm />
        <Footer />
        </main>
    )
}