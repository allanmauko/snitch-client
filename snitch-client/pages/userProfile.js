
export default function UserProfile({styles}) {
  return ( 
<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="data:image/jpeg;base64,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" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                         Daryl Rogony
                                    </h5>
                                    <h6>
                                        Web Developer
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-primary">Logout</button>
                        {/* <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>daryl123</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>daryl</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>daryl@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>junior</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
   )

}

