const VBody = {
				data(){
								return {
												open: false,
												username: "",
												phone: "",
												message: ""
								}
				},
				template: `
				
				<header>
				<nav class="navbar navbar-default  bd-header">
				<div class="container bd-nav-container">
				<div class="navbar-header bd-nav-header">
				<div class="navbar-brand">
				<a class="home-link" href="index.html">
				<img alt="Site logo" src="images/file_0000000054587243bb9b36557ae2e59d.png" class="bd-logo" />
				</a>
				</div>
				<button class="btn bd-menu-btn" @click="toggleMenu"><span class="bi bi-list"></span></button>
				</div>
				<ul class="nav navbar-nav bd-menu">
				<li class="active b-active m-item"><a href="#home" @click="closeNav" class="n-link">Home</a></li>
				<li class="m-item"><a href="#about" @click="closeNav" class="n-link">About</a></li>
				<li class="m-item"><a href="#projects" @click="closeNav" class="n-link">Projects</a></li>
				<li class="m-item"><a href="#contact" @click="closeNav" class="n-link">contact</a></li>
				</ul>
				</div>
				</nav>
				</header>
				
				<main>
				<section class="section-1">
				<div class="container-fluid bd-main">
				<div class="bd-hero" id="home">
				<h1 class="text-center"><span class="np">NovelPixel</span> <span class="st">Studio</span></h1>
				<span class="shrt-tg text-center">Build Your Online Presence With Us.</span>
				<p class="text-center">Transforming ideas into beautiful, high-performance websites using modern web technologies.</p>
				<div class="cta-buttons row center-block">
				<a class="cta-btn col-xs-12 col-sm-12 col-md-6 col-lg-6 center-block" href="#contact">Hire Us</a>
				<a class="cta-btn col-xs-12 col-sm-12 col-md-6 col-lg-6 center-block" href="#projects">View Project</a>
				</div>
				</div>
				
				<div class="bd-about row" id="about">
				<div class="bd-abt col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="bd-prt-1">
				<h2 class="bd-h2">Our Mission</h2>
				<p class="bd-descr">‎Our mission is to design and develop modern, responsive, and user-friendly websites that help businesses and individuals establish a strong online presence. We are committed to delivering high-quality digital solutions that combine creativity, functionality, and performance while ensuring an exceptional user experience.</p>
				</div>
				<img alt="mission-picture" src="images/file_00000000869071f486c0944fc4423c54.png" class="img-responsive bd-abt-img"/>
				</div>
				
				<div class="bd-abt col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="bd-prt-1">
				<h2 class="bd-h2">Who We Are</h2>
				<p class="bd-descr">‎‎NovaPixel Studio is a creative web design and frontend development studio dedicated to building modern, responsive, and user-friendly websites. We work with businesses, startups, and individuals to create digital experiences that are visually appealing, easy to use, and tailored to their unique goals.</p>
				</div>
				<img alt="who we are picture" src="images/magnific_modern-tech-company-websi_dI0GsEsXSL.png" class="img-responsive bd-abt-img"/>
				</div>
				
						<div class="bd-abt col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="bd-prt-1">
				<h2 class="bd-h2">Skills & Development</h2>
				<p class="bd-descr">‎At NovaPixel Studio, we use modern web technologies to build fast, responsive, and visually appealing websites. Our expertise includes creating intuitive user interfaces, optimizing website performance, and ensuring compatibility across all devices.</p>
				</div>
				<img alt="skills & development picture" src="images/file_00000000e65c71f4afe9cfbf59fd6438.png" class="img-responsive bd-abt-img"/>
				</div>
								
						<div class="bd-abt col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="bd-prt-1">
				<h2 class="bd-h2">Why Choose Us</h2>
				<p class="bd-descr">‎‎At NovaPixel Studio, we believe every website should be more than just visually appealing—it should deliver results. We combine creativity, modern technology, and attention to detail to create websites that are responsive, fast, and easy to use. From the initial concept to the final launch, we work closely with our clients to ensure every project reflects their brand and helps them achieve their goals.</p>
				</div>
				<img alt="why choose us picture" src="images/file_00000000c44071f48eb95ebe6e444c7a.png" class="img-responsive bd-abt-img" />
				</div>		
				</div>
				
				<div class="bd-projects row" id="projects">
				<div class="bd-prjt col-xs-12 col-md-12 col-sm-12 col-lg-6 ">
				<div class="bd-part-1">
				<img alt="Business website image" src="images/file_00000000e86471f48d99b38af08a7e0e.png" class="bd-p-img img-responsive" />
				<span class="bd-web-name">Business Website</span>
				<p class="bd-p-descr">A modern and responsive business website designed to showcase services, build trust, and help businesses connect with potential clients.</p>
				</div>
				<div class="bd-skls-cont">
				<span class="bd-skls-label">Technology Used:</span>
				<ul class="bd-skls">
				<li class="bd-skl">HTML5</li>
				<li class="bd-skl">CSS3</li>
				<li class="bd-skl">Bootstrap 3</li>
				<li class="bd-skl">Responsive Design</li>
				<li class="bd-skl">Bootstrap Grid</li>
				<li class="bd-skl">UI Design</li>
				<li class="bd-skl">Basic SEO</li>
				</ul>
				</div>
				<a href="#" class="bd-visit">Visit Site</a>
				</div>
				
				<div class="bd-prjt col-xs-12 col-md-12 col-sm-12 col-lg-6">
				<div class="bd-part-1">
				<img alt="Portfolio website image" src="images/file_00000000d0e871f4aef4976835c65fbd.png" class="bd-p-img img-responsive" />
				<span class="bd-web-name">Portfolio Website</span>
				<p class="bd-p-descr">A modern, responsive portfolio website designed to showcase my skills, projects, and services. It features a clean user interface, smooth navigation, and optimized performance to create a professional online presence.</p>
				</div>
				<div class="bd-skls-cont">
				<span class="bd-skls-label">Technology Used:</span>
				<ul class="bd-skls">
				<li class="bd-skl">HTML5</li>
				<li class="bd-skl">CSS3</li>
				<li class="bd-skl">Bootstrap 3</li>
				<li class="bd-skl">Responsive Design</li>
				<li class="bd-skl">JavaScript</li>
				<li class="bd-skl">UI Design</li>
				<li class="bd-skl">Basic SEO</li>
				</ul>
				</div>
				<a href="#" class="bd-visit">Visit Site</a>
				</div>
				
								<div class="bd-prjt col-xs-12 col-md-12 col-sm-12 col-lg-6">
				<div class="bd-part-1">
				<img alt="Landing page image" src="images/file_00000000d25071f4853309077f91d174.png" class="bd-p-img img-responsive" />
				<span class="bd-web-name">Landing Website</span>
				<p class="bd-p-descr">A clean, responsive landing page designed to promote products and services.</p>
				</div>
				<div class="bd-skls-cont">
				<span class="bd-skls-label">Technology Used:</span>
				<ul class="bd-skls">
				<li class="bd-skl">HTML5</li>
				<li class="bd-skl">CSS3</li>
				<li class="bd-skl">Bootstrap 3</li>
				<li class="bd-skl">Responsive Design</li>
				<li class="bd-skl">JavaScript</li>
				<li class="bd-skl">UI Design</li>
				<li class="bd-skl">Basic SEO</li>
				<li class="bd-skl">Flexbox</li>
				</ul>
				</div>
				<a href="#" class="bd-visit">Visit Site</a>
				</div>
				</div>
				
				<div class="row bd-contact" id="contact">
				<div class="bd-slinks col-xs-12 col-md-6 col-sm-12 col-lg-6">
				<h2 class="bd-h2">For more enquiries:</h2>
				<ul class="bd-links">
				<li><a href="https://george-ofori.vercel.app" target="_blank" aria-label="Website"  class="bd-link"><span class="bi bi-globe"></span> NovaPixels Studio</a></li>
				
				<li><a href="https://george-ofori.vercel.app" target="_blank" aria-label="Facebook"  class="bd-link"><span class="bi bi-facebook"></span> NovaPixels Studio</a></li>
				
				<li><a href="https://george-ofori.vercel.app" target="_blank" aria-label="Instagram"  class="bd-link"><span class="bi bi-instagram"></span> NovaPixels Studio</a></li>
				
				<li><a href="https://george-ofori.vercel.app" target="_blank" aria-label="X"  class="bd-link"><span class="bi bi-twitter"></span> NovaPixels Studio</a></li>
				</ul>
				</div>
				
				<div class="bd-form col-xs-12 col-md-6 col-sm-12 col-lg-6">
				<h2 class="bd-h2">Contact Form</h2>
				<form>
				<div class="form-group">
				<label for="username" class="bd-label text-muted"> <span class="bi bi-person"></span>Username</label>
				<input class="form-control bd-input" id="username" v-model="username" placeholder="Username"/>
				</div>
				
				<div class="form-group">
				<label for="phone" class="bd-label text-muted"><span class="bi bi-phone"></span> Phone</label>
				<input class="form-control bd-input" id="phone" v-model="phone" type="tel" placeholder="Phone" />
				</div>
				
				<div class="form-group">
				<label for="message" class="bd-label text-muted"><span class="bi bi-chat"></span> Message</label>
				<textarea class="form-control bd-textarea" id="message" v-model="message" cols="18" rows="7" placeholder="Message"></textarea>
				</div>
				
				<div class="form-group">
				<button class="btn bd-submit" type="submit" @click="sendMessage">Send Message</button> 
				</div>
				</form>
				</div>
				
				</div>
				
				</div>
				</section>
				</main>
				
			 <footer>
				<div class="bd-tech-div">
			<div class="bd-tech-label">	Technologies Used</div>
					<ul class="bd-skls">
				<li class="bd-skl">HTML5</li>
				<li class="bd-skl">CSS3</li>
				<li class="bd-skl">Bootstrap 3</li>
				<li class="bd-skl">Responsive Design</li>
				<li class="bd-skl">JavaScript</li>
				<li class="bd-skl">UI Design</li>
				<li class="bd-skl">Basic SEO</li>
				</ul>
				</div>
				<a class="bd-bt" href="https://wa.me/233504694485?text=I%20would%20like%20a%20website%20like%20this
	."><span class="bi bi-whatsapp"></span></a>
				</footer>
				`,
				methods: {
								toggleMenu(event){
												if (!this.open){
																$(".bd-menu").css({
																				transform: "translate(0,0)"
																});
												}else{
																$(".bd-menu").css({
																				transform: "translate(100%,0)"
																});
												}
																this.open = !this.open;
								},
								
								closeNav(event){
												const deviceWidth = window.innerWidth;
												if (!(deviceWidth > 768)){
																$(".bd-menu").css({
																				transform: "translate(100%,0)"
																});
																this.open = !this.open;
												}
								},
								
								sendMessage(event){
												const myWhatsAppNumber = "233504694485";
												const text = `Website Request 
												Message\nName: ${this.username}\nTel: ${this.phone}\nMessage: ${this.message}`;
												
												const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(text)}`;
												window.open(whatsappUrl, "_blank");
								},
								
				}
} 
export {VBody}
