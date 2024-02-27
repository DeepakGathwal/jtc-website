import React,{useState, useEffect} from 'react'
import { courceViodePoint } from '@/apis/apis'
import { Accordion } from 'react-bootstrap-accordion';

const CourceCategory = ({courcename}) => {
  
  return (
    <div className="col-md-7">
    <div className="edu-card card-type-7 radius-small">
        <div className="inner">
            <div className="course-content">
                <div className="edu-accordion-02">
                    <Accordion title='Core Java'>
                        <div className="card-body">
                                <div className="module">
                                    <h4>JDBC </h4>
                                    <div className="list_mod">
                                        <p>Introduction of JDBC </p>
                                        <p>JDBC Drivers </p>
                                        <p>JDBC Statements</p>
                                        <p>Batch Updates</p>
                                        <p>Result Set</p>
                                        <p>Row Set</p>
                                    </div>
                                </div>
                                <div className="module">
                                    <h4>Servlet </h4>
                                    <div className="list_mod">
                                        <p>Introduction of Servlet </p>
                                        <p>Introduction of Servlet</p>
                                        <p>Web Server | Web Client | Web Container | Http
                                            &amp; Https |
                                            TCP &amp; IP | DNS </p>
                                        <p>Web Server setup </p>
                                        <p>Servlet API</p>
                                        <p>Servlet Example using Web.xml</p>
                                        <p>Servlet Example using Annotations</p>
                                        <p>Servlet Life Cycle </p>
                                        <p>Servlet Parameters</p>
                                        <p>Request Dispatcher</p>
                                        <p>Servlet Thread Models</p>
                                        <p>HttpServletRequest &amp; HttpServletResponse.</p>
                                        <p>Session Management </p>
                                        <p>Exploring HttpSession</p>
                                        <p>Servlet Scopes</p>
                                        <p>Servlet Filter &amp; Filter Chaining</p>
                                        <p>Listeners</p>
                                    </div>
                                </div>
                                <div className="module">
                                    <h4>JSP </h4>
                                    <div className="list_mod">
                                        <p>Introduction of JSP </p>
                                        <p>JSP Life-Cycle &amp; JSP Life-Cycle Methods</p>
                                        <p>JSP Implecit Objects</p>
                                        <p>JSP Scripting formats</p>
                                        <p>JSP Directives</p>
                                        <p>JSP Standard Actions</p>
                                        <p>JSP Scopes</p>
                                        <p>JSP EL Expression</p>
                                        <p>JSTL Tags</p>
                                        <p>Custom Tags</p>
                                    </div>
                                </div>
                            </div>
                        </Accordion>
                        <Accordion title='Advance Java'>
                        <div className="card-body">
                                <div className="module">
                                    <h4>JDBC </h4>
                                    <div className="list_mod">
                                        <p>Introduction of JDBC </p>
                                        <p>JDBC Drivers </p>
                                        <p>JDBC Statements</p>
                                        <p>Batch Updates</p>
                                        <p>Result Set</p>
                                        <p>Row Set</p>
                                    </div>
                                </div>
                                <div className="module">
                                    <h4>Servlet </h4>
                                    <div className="list_mod">
                                        <p>Introduction of Servlet </p>
                                        <p>Introduction of Servlet</p>
                                        <p>Web Server | Web Client | Web Container | Http
                                            &amp; Https |
                                            TCP &amp; IP | DNS </p>
                                        <p>Web Server setup </p>
                                        <p>Servlet API</p>
                                        <p>Servlet Example using Web.xml</p>
                                        <p>Servlet Example using Annotations</p>
                                        <p>Servlet Life Cycle </p>
                                        <p>Servlet Parameters</p>
                                        <p>Request Dispatcher</p>
                                        <p>Servlet Thread Models</p>
                                        <p>HttpServletRequest &amp; HttpServletResponse.</p>
                                        <p>Session Management </p>
                                        <p>Exploring HttpSession</p>
                                        <p>Servlet Scopes</p>
                                        <p>Servlet Filter &amp; Filter Chaining</p>
                                        <p>Listeners</p>
                                    </div>
                                </div>
                                <div className="module">
                                    <h4>JSP </h4>
                                    <div className="list_mod">
                                        <p>Introduction of JSP </p>
                                        <p>JSP Life-Cycle &amp; JSP Life-Cycle Methods</p>
                                        <p>JSP Implecit Objects</p>
                                        <p>JSP Scripting formats</p>
                                        <p>JSP Directives</p>
                                        <p>JSP Standard Actions</p>
                                        <p>JSP Scopes</p>
                                        <p>JSP EL Expression</p>
                                        <p>JSTL Tags</p>
                                        <p>Custom Tags</p>
                                    </div>
                                </div>
                            </div>
                        </Accordion>

                        <Accordion title='Hibernate'>
                            <div className="card-body">
                                <div className="module">
                                    <h4>Hibernate </h4>
                                    <div className="list_mod">
                                        <p>Introduction of Hibernate</p>
                                        <p>Difference between JDBC and Hibernate</p>
                                        <p>Hibernate Features</p>
                                        <p>First Example of Hibernate using hbm.xml file</p>
                                        <p>First Example of Hibernate using annotations</p>
                                        <p>Hibernate Inheritance Mapping</p>
                                        <p>Table Per Class Mapping</p>
                                        <p>Table Per Concrete Class mapping</p>
                                        <p>Association Mapping</p>
                                        <p>One-to-One Uni-directional Mapping</p>
                                        <p>One-to-One Bi-directional Mapping</p>
                                        <p>Many-to-Many Mapping</p>
                                        <p>Version Mapping</p>
                                        <p>Timestamp Mapping</p>
                                        <p>Hibernate Example on DAO Pattern</p>
                                        <p>Hibernate Query Language SQL | HQL | QBC | Native
                                            Query |
                                            Named Query</p>
                                        <p>Polymorphic Query</p>
                                        <p>Positional Parameters &amp; Named Parameters </p>
                                        <p>Simple Primary Key </p>
                                        <p>Custom Primary Key</p>
                                        <p>Composite Primary Key</p>
                                        <p>Introduction of Transaction Management </p>
                                        <p>ACID Property</p>
                                        <p>Transaction Concurrency Problem &amp; Solutions
                                        </p>
                                        <p>Types of Transactions.</p>
                                        <p>Hibernate Connection Management</p>
                                        <p>JDBC Transaction</p>
                                        <p>JTA Transaction</p>
                                        <p>CMT Transaction</p>
                                        <p>Hibernate Architecture </p>
                                        <p>Exploring SessionFactory</p>
                                        <p>Object States</p>
                                        <p>Introduction of Hibernate Cache </p>
                                        <p>Different types of Hibernate Cache </p>
                                        <p>Hibernate Cache Architecture</p>
                                    </div>
                                </div>
                            </div>
                            </Accordion>

                        <Accordion title='Spring'>
                            <div className="card-body">
                                <div className="module">
                                    <h4>JSP </h4>
                                    <div className="list_mod">
                                        <p>About Spring 5.x Training</p>
                                        <p>Spring 5.x Course Prerequisite</p>
                                        <p>Spring 5.x Training Course Objective</p>
                                        <p>Spring 5.x Training Course Duration</p>
                                        <p>Spring 5.x Training Overview</p>
                                        <p>Spring Introduction</p>
                                        <p>Spring Core Module</p>
                                        <p>Spring Core Module with Annotations</p>
                                        <p>Spring Core Module with 100% Code/Java Config
                                            Approach.</p>
                                        <p>Spring Boot Core</p>
                                        <p>Spring JDBC/DAO</p>
                                        <p>Spring AOP Module</p>
                                        <p>Spring Transaction Management</p>
                                        <p>Spring MVC</p>
                                        <p>Spring Security</p>
                                        <p>Spring ORM</p>
                                        <p>Spring Data and Spring Data JPA</p>
                                        <p>Spring Batch</p>
                                        <p>Spring Mail</p>
                                        <p>Introduction to Spring MicroServices</p>
                                        <p>How to Explain Project Architectures</p>
                                    </div>
                                </div>
                            </div>
                            </Accordion>
                        <Accordion title='Springboot'>
                            <div className="card-body">
                                <div className="module">
                                    <h4>Spring Boot </h4>
                                    <div className="list_mod">
                                        <p>Spring Boot introduction</p>
                                        <p>Spring boot - Bootstrapping</p>
                                        <p>Spring boot - Tomcat Development </p>
                                        <p>Spring boot - Build System</p>
                                        <p>Spring boot - Code Structure</p>
                                        <p>Spring boot - Spring beans and dependency
                                            injection</p>
                                        <p>Spring boot - Runners</p>
                                        <p>Spring boot - Application Properties</p>
                                        <p>Spring boot - Logging </p>
                                        <p>Spring boot - Building Restful Web Service</p>
                                        <p>Spring boot - Exception Handling</p>
                                        <p>Spring boot - Interceptor</p>
                                        <p>Spring boot - Servlet Filter</p>
                                        <p>Spring boot - Rest Template</p>
                                        <p>Spring boot - File Handling</p>
                                        <p>Spring boot - Service Components</p>
                                        <p>Spring boot - Consuming Restful Web Services</p>
                                        <p>Spring boot - Cors Support</p>
                                        <p>Spring boot - Internationalization </p>
                                        <p>Spring boot - Scheduling</p>
                                        <p>Spring boot - Enabling Https</p>
                                        <p>Spring boot - Eureka Server</p>
                                        <p>Spring boot - Service Registration With Eureka
                                        </p>
                                        <p>Spring boot - Cloud Configuration Server</p>
                                        <p>Spring boot - Cloud Configuration Client</p>
                                        <p>Spring boot - Actuator</p>
                                        <p>Spring boot - Admin Server</p>
                                        <p>Spring boot - Admin Client</p>
                                        <p>Spring boot - Enable Swagger2</p>
                                        <p>Spring boot - Creating Docker Image</p>
                                        <p>Spring boot - Tracing Micro Service Logs</p>
                                        <p>Spring boot - Flying Database</p>
                                        <p>Spring boot - Web Socket</p>
                                        <p>Spring boot - Batch Service</p>
                                        <p>Spring boot - Spring for Apache Kafka</p>
                                        <p>Spring boot - Database handling</p>
                                        <p>Spring boot - Securing Web Application</p>
                                        <p>Spring boot - OAuth2 with JWT</p>
                                    </div>
                                </div>
                            </div>
                            </Accordion>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CourceCategory
