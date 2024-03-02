import Image from 'next/image'
import React from 'react'

const TutorialTools = () => {
  return (
    <>
      <section class="top_courses mt--40 mb--40" id="tools">
	<div class="container">
		<div class="row">
		<div class="section-title white-title sal-animate mb--40">
                           
						   <h3 class="title tg-svg"><span class="position-relative color-primary"><span class="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" stroke-width="4" ></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" stroke-width="2" ></path>
</svg></span> Tools</span> </h3>
					   </div>
			</div>
		<div class="row">
			<div class="col-md-2 col-6" >
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/git.png" alt="" />
					<p>GIT</p>
				</div>
			</div>
			<div class="col-md-2 col-6" >
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/agile.png" alt="" />
					<p>agile</p>
				</div>
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/jira.png" alt="" />
					<p>jira</p>
				</div>
			</div>
			<div class="col-md-2 col-6" >
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/postman.png" alt="" />
					<p>postman</p>
				</div>
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/eclipseide.png" alt="" />
					<p>Eclipse ide</p>
				</div>
			</div>
			<div class="col-md-2 col-6">
				<div class="tutor_box">
					<Image width={100} height={50} src="../assets/images/tutorial_icon/mysqlworkbench.png" alt="" />
					<p>Mysql workbench</p>
				</div>
			</div>
		</div>
			
		
	</div>
</section>
    </>
  )
}

export default TutorialTools