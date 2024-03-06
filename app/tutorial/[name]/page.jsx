"use client"
import Link from 'next/link';
import { React  ,useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGripLines } from "react-icons/fa6";
const page = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="edu-blog-details-area mt--20 bg-color-white">
        <div class="row w-100">
          <div class="col-lg-3 order-2 order-lg-1">
            <aside class="edu-blog-sidebar">
              <div class="edu-blog-widget widget-categories">
                <div class="inner">
                  <h5 class="widget-title">Categories</h5>
                  <div class="content">
                    <ul class="category-list">
                    <li><Link href="">Business</Link></li>
                    <li><Link href="">Education </Link></li>
                    <li><Link href="">Online Learning </Link></li>
                    <li><Link href="">UI/UX Design </Link></li>
                    <li><Link href="">Web Development </Link></li>
                    </ul>
                  </div>
                </div>
                <div class="inner">
                  <h5 class="widget-title">Categories</h5>
                  <div class="content">
                    <ul class="category-list">
                    <li><Link href="">Business</Link></li>
                    <li><Link href="">Education </Link></li>
                    <li><Link href="">Online Learning </Link></li>
                    <li><Link href="">UI/UX Design </Link></li>
                      <li><Link href="">Web Development </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div class="col-lg-9 order-1 order-lg-2 pt--20">
            <div class="blog-details-1">
               <div className="row g-5">
                  <div className="col-md-12 col-12 d-flex mb--20 justify-content-between">
                    <div class="load-more-btn">
                                <button class="edu-btn" href="courses.php"><FaArrowLeft/> Previous</button>
                            </div>
                            <div class="load-more-btn">
                                <button class="edu-btn" href="courses.php">Next <FaArrowRight /></button>
                            </div>
                  </div>
               </div>
               <div class="overview">
            <h4>Java Introduction</h4>
            <div class="cnt">
                <div class="para">
                    <p>Java is a popular and high-level programming language that was developed by James Gosling in 1995 at Sun Microsystems, 
                        and which was later taken up by the Oracle Corporation in 2009. 
                        Till date Java has been run on more than 3 billion devices.
                    </p>
                    <p>
                    Writing, compiling and debugging a program is easy in Java.  The programming language can be used to create modular programs and reusable codes.
                    </p>
                </div>
            </div>
            <h4>Java is used in:</h4>
            <div>
                <p>•	Mobile applications (especially Android apps) <br />
                •	Desktop applications<br />
                •	Web applications<br />
                •	Client Server Applications<br />
                •	Enterprise Applications <br />
                </p>
            </div>
            <h4>Why Use Java?</h4>
            <div>
                <p>•	Java Application is a Platform (Operating System) Independent Application. <br />
                    •	It is one of the most popular programming languages in the world.<br />
                    •	There is a large demand for Java skills in the current job market.<br />
                    •	It is easy to learn and simple to use.<br />
                    •	It is open-source and free.<br />
                    •	It is secure, fast and powerful.<br />
                    •	It has a huge community support (tens of millions of developers).<br />
                    •	Java is an object-oriented programming (OOP) language <br />
                    &emsp;&emsp;o	(OOP  gives a clear structure to programs and allows codes reusability, hence lowers development costs).
                </p>
            </div>
            <h4>Types of Java Applications:</h4>
            <p>There are mainly four types of applications that can be created using Java programming:</p>
            <p>&emsp;&emsp;•	Standalone Application<br />
                &emsp;&emsp;•	Web Application<br />
                &emsp;&emsp;•	Enterprise Application<br />
                &emsp;&emsp;•	Mobile Application<br />
            </p>
            <div class="sub-topic">
                <h5>
                    •	Standalone Application
                </h5>
                <p>
                    Standalone applications are also known as desktop applications or Windows (operating system) based applications.
                    The standalone applications are traditional software that need to be installed on every machine. <br />
                    <b>Examples:<br /></b>
                    Media player, Calculator.
                </p>
                <h5>
                •	Web Application
                </h5>
                <p>
                Web  applications are applications  that run on the server side and users interact with applications using different browsers. 
                The main advantage of Web Application is that there is no need to install over each device and so lesser maintenance costs are 
                incurred. <br />

                    <b>Examples:</b><br />
                    IRCTC Portal, OTT Platform Web Application 
                </p>
                <h5>•	Enterprise Application</h5>
                <p>
                    An enterprise application (EA) is a large software system platform designed to operate in a corporate environment 
                    such as business or government. <br />

                   <b> Examples:</b><br />
                    Banking applications, Employee Management System
                </p>
                <h5>•	Mobile Application</h5>
                <p>
                
                A mobile app is a software application developed specifically for use on small, wireless computing devices, 
                such as smartphones and tablets, rather than desktop or laptop computers. <br />
                <b>Examples:</b><br />
                Netflix Mobile Application, Amazon Online Shopping Application.
                </p>
            </div>
            <h4>Java Platforms / Editions:</h4>
            <p>There are 4 platforms or editions of Java:
                </p>
            <div class="sub-topic">
                
                <p> •	Java SE (Java Standard Edition)<br />
                    •	Java EE (Java Enterprise Edition)<br />
                    •	Java ME (Java Micro Edition)<br />
                    •	JavaFX
                </p>
                <h5>
                    •	Java SE (Java Standard Edition)
                </h5>
                <p>
                    It is a Java programming platform. <br />
                    It includes Java programming APIs such as java.lang, java.util, java.sql etc.
                </p>
                <h5>
                    •	 Java EE (Java Enterprise Edition)
                </h5>
                <p>
                    Java EE is mainly used for developing web and enterprise applications.<br />
                    <b>Examples:</b><br />
                    Servlets, JSP, Web Services, EJB, JPA, etc.
                </p>
                <h5>
                    •	Java ME (Java Micro Edition)
                </h5>
                <p>
                    The Java ME Edition is used for mobile applications.
                </p>
                <h5>
                    •	 JavaFX
                </h5>
                <p>
                    JavaFX is used for developing rich internet applications. It uses a lightweight user interface API.
                </p>
            </div>
            
            <div className="row g-5 mb--20">
                  <div className="col-md-12 d-flex justify-content-between">
                    <div class="load-more-btn">
                                <button class="edu-btn" href="courses.php"> <FaArrowLeft /> Previous</button>
                            </div>
                            <div class="load-more-btn">
                                <button class="edu-btn" href="courses.php">Next <FaArrowRight /></button>
                            </div>
                  </div>
               </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
