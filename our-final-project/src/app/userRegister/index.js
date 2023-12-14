import { Footer, RegisterHeader, UserForm } from "./userRegister";
import Header from '../components/header/header.js'
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