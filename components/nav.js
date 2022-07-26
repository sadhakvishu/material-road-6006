const navbar = () => {
    let user = JSON.parse(localStorage.getItem("userData"))||{name:"Login"};
    let [signup,link] = ["Sign up","../Login/signup.html"]
    if(user.name!=="Login"){
        signup="Logout";
        link="#"
    }

    return `  <div class="navbar">

    <div class="nv_items">
    <a href="../index.html">
        <img src="https://www.hellobrightline.com/assets/brightline-logo.svg" alt="">
    </a>
    </div>

    <div class="nv_items">

        <ul>
            <li class="nv_item" data-action='dropdown-toggle'>How It Works
                <div class="dropdown">
                    <div>
                        <h1>How It Works</h1>
                        <p>Access behavioral health support <br> designed to help kids, teens, and <br> their families thrive.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="../How it works/experience.html">The Brightline Experience</a> </li>
                            <li><a href="..//How it works/approach.html">Our Approach</a> </li>
                            <li><a href="#">Our Resarch</a></li>
                            <li><a href="../How it works/aboutus.html">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="nv_item">Employers & Plans
                <div class="dropdown">
                    <div>
                        <h1>Employers & <br> Plans</h1>
                        <p>Bring extraordinary behavioral <br> health care to families, when and <br> where they need it.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="../employers & plans/emp.html">For Employers</a></li>
                            <li><a href="../employers & plans/hP.html">For Health Plans</a></li>
                            <li><a href="../employers & plans/cons.html">For Consultants</a></li>
                            <li><a href="../employers & plans/Re.html">Resources</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="nv_item">For Families
                <div class="dropdown">
                    <div>
                        <h1>For Families</h1>
                        <p>Get support for the tough stuff <br> and help your child thrive, right <br> from home.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="./form.html">Membership</a></li>
                            <li><a href="./form.html">Pricing</a></li>
                            <li><a href="./form.html">Coaching</a></li>
                            <li><a href="./form.html">Care</a></li>
                            <li><a href="./form.html">FAQ</a></li>
                            <li><a href="./form.html">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="nv_item">Careers
                <div class="dropdown">
                    <div>
                        <h1>Careers</h1>
                        <p>Be part of transforming behavioral <br> health care for families across <br> the country.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="../carriers_page/opportunities.html">Opportunities</a></li>
                            <li><a href="..//care_team/care_team.html">Care Team</a></li>
                            <li><a href="..//tech_hiring/tech.html">Tech Hiring</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>

    <div class="nv_items">
        <button> <a href="../Login/login.html">${user.name}</a></button>
        <button id="logoutbtn"> <a href=${link}>${signup}</a></button>
        
    </div>
    <a href="#" id="hamburger" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
</div>`

  
}



export {navbar} 