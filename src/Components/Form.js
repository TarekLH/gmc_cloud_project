import React from "react";

export default function Form() {
    return(
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">

            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="	https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h2>Contact form</h2>
                <p className="lead">Below is an example form built entirely with Bootstrap's form.</p>
            </div>



            <form className="needs-validation col-md-6 m-auto p-4 p-md-5 border border-primary rounded-3 bg-white">

                <div className="row g-3">

                    <div className="col-sm-6">
                        <label for="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control border-primary" id="firstName" placeholder="First name"/>
                    </div>

                    <div className="col-sm-6">
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control border-primary" id="lastName" placeholder="Last name"/>
                    </div>

                    <div className="col-12">

                        <label for="username" className="form-label">Username <span className="text-muted">(Required)</span></label>
                        <div className="input-group">
                            <span className="input-group-text border-primary">@</span>
                            <input type="text" id="username" className="form-control border-primary" placeholder="Username" required/>
                        </div>

                    </div>

                    <div className="col-12">

                        <label for="email" className="form-label">Email <span className="text-muted">(Required)</span></label>
                        <input type="email" className="form-control border-primary" id="email" placeholder="you@example.com" required/>

                    </div>

                    <div className="col-12">

                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control border-primary" id="address" placeholder="1234 Main St"/>

                    </div>

                    <div className="col-md-5">

                        <label for="country" className="form-label">Country</label>
                        <select className="form-select border-primary" id="country">
                            <option value="">Choose...</option>
                            <option>United States</option>
                            <option>Algeria</option>
                            <option>France</option>
                        </select>

                    </div>

                </div>

                <hr className="my-4"/>

                <button className="w-100 btn btn-primary btn-lg " type="submit">Contact Us</button>
            </form>
        </div>
    )
}