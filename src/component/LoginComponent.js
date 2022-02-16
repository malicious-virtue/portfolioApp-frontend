import React, { useState } from 'react'
import authService from '../services/auth.service';
import userService from '../services/user.service';
export const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        authService.login(username, password);
        console.log(authService.getCurrentUser());
        console.log(authService.getAccessToken());

        let projects = await userService.getProjects();
        console.log(projects.data);
        e.preventDefault();

    }

    return (
        <>
            <section class="vh-100" style={{ backgroundColor: 'white' }} >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div class="card-body p-5 text-center">
                                    <h3 class="mb-5">Sign in</h3>
                                    <div class="form-outline mb-4">
                                        <input type="text" placeholder="username" id="typeEmailX-2" class="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="password" placeholder="password" id="typePasswordX-2" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button class="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>



    )
}
