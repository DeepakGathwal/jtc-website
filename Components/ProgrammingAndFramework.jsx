import Image from 'next/image'
import React from 'react'

const ProgrammingAndFramework = () => {
  return (
    <>
      <section class="top_courses mt--40" id="tutorial">
	<div class="container">
		<div class="row">
		<div class="section-title white-title sal-animate mb--40 mt--40" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                           
						   <h3 class="title tg-svg">Programming And <span class="position-relative color-primary"><span class="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" stroke-width="4" ></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" stroke-width="2" ></path>
</svg></span> Frameworks</span> </h3>
					   </div>
			</div>
		<div class="row">
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/java.png" alt=""/>
					<p>CORE JAVA</p>
				</div>
			</div>
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/jdbc.png" alt=""/>
					<p>JDBC</p>
				</div>
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/java.png" alt=""/>
					<p>servlet</p>
				</div>
			</div>
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/jsp.png" alt=""/>
					<p>JSP</p>
				</div>
			</div>
			<div class="col-md-2 col-6" tyle="visibility: visible;">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/html.png" alt=""/>
					<p>HTML</p>
				</div>
			</div>
			
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/css.png" alt=""/>
					<p>CSS</p>
				</div>
			</div>
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/python.png" alt=""/>
					<p>PYTHON</p>
				</div>
			</div>
			
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/javascript.png" alt=""/>
					<p>JAVASCRIPT</p>
				</div>
					
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/mysql.png" alt=""/>
					<p>MYSQL</p>
				</div>
				
			</div>
			<div class="col-md-2 col-6"  >
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/mongodb.png" alt=""/>
					<p>MONGO</p>
				</div>
				
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/selenium.png" alt=""/>
					<p>SELENIUM</p>
				</div>
				
			</div>
			
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/php.png" alt=""/>
					<p>PHP</p>
				</div>
				
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default ProgrammingAndFramework
