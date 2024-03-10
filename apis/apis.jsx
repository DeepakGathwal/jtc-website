
import instance from "./commonapi";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000/');

let choosePoint = "choosePoint"
let cources = "cources"
let courseSections = "courseSections"
let company = "company"
let testimonials = "testimonials"
let footer = "footer"
let blog = "blog"
let about = "about"
let navbar = "navbar"
let tutorial = "tutorial"


// All Lists of Blogs 
export const blogs = async (id) => {
  try {
    const { data } = await instance.get(blog);
    return data;

  } catch (err) {
    return err
  }
};

// Get a single blog
export const singleBlog = async (id) => {
  try {
    const { data } = await instance.get(id);
    return data;

  } catch (err) {
    return err
  }
};

// All choosing Points
export const allChoosingPoint = async () => {
  try {
    const { data } = await instance.get(choosePoint);
    return data;

  } catch (err) {
    return err
  }
};

// Footer Data aPi
export const footerData = async () => {
  try {
    const { data } = await instance.get(footer);
    return data;

  } catch (err) {
    return err
  }
};



// Testomainals Data 
export const alltestimonials = async () => {
  try {
    const { data } = await instance.get(testimonials);
    return data;

  } catch (err) {
    return err
  }
};

// Lis of cources
export const homeCourses = async () => {
  try {
    const { data } = await instance.get(cources);
    return data;

  } catch (err) {
    return err
  }
};




// Lis of comapnies
export const homeCompany = async () => {
  try {
    const { data } = await instance.get(company);
    return data;

  } catch (err) {
    return err
  }
};

// About Us Point
export const aboutUS = async () => {
  try {
    const { data } = await instance.get(about);
    return data;

  } catch (err) {
    return err
  }
};



// Sumbit Git Us Now Form
export const enquiryForm = async (field) => {
  try {

    const value = await JSON.stringify(field)
    const { data } = await instance.post(choosePoint, value);
    await socket.emit('formSubmited', data)
    return data;

  } catch (err) {
    return err
  }
};

//  handel Download Brousher form
export const brochureForm = async (field) => {
  try {
    const response = await instance.post(company, JSON.stringify(field), { responseType: 'blob' });
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${field.course}.pdf`;
    
    return link.click();
  } catch (err) {
    return err;
  }
};


// handel hire from us form
export const hireUsForm = async (field) => {
  try {
    const value = await JSON.stringify(field)
    const { data } = await instance.patch(company, value);
    await socket.emit('formSubmited', data)
    return data;
  } catch (err) {
    return err
  }
};

// Handel join us form
export const joinUsForm = async (field) => {
  try {
    const value = await JSON.stringify(field)
    const { data } = await instance.patch(choosePoint, value);
    await socket.emit('formSubmited', data)
    return data;
  } catch (err) {
    return err
  }
};

// Batch Enroll form 
export const batchForm = async (field) => {
  try {
    const value = await JSON.stringify(field)
    const { data } = await instance.put(choosePoint, value);
    await socket.emit('formSubmited', data)
    return data;
  } catch (err) {
    return err
  }
};


//  all vaccieny avialble list of roles
export const allRoles = async (field) => {
  try {
    const { data } = await instance.get(courseSections);
    return data;
  } catch (err) {
    return err
  }
};


// all courses types
export const allCourceTypes = async () => {
  try {
    const { data } = await instance.patch(cources);

    return data;

  } catch (err) {
    return err
  }
};

// get static pages
export const termsAndCondition = async (id) => {
  try {
    const { data } = await instance.patch(id);
    return data;
  } catch (err) {
    return err
  }
};


// get all course list
export const courcesList = async (id) => {
  try {
    const value = JSON.stringify({ id })
    const { data } = await instance.put(cources, value);
    return data;
  } catch (err) {
    return err
  }
};

// course basic details
export const courseData = async (name) => {
  try {
    const value = JSON.stringify({ name })
    const { data } = await instance.post(cources, value);
    return data;
  } catch (err) {
    return err
  }
};

// all choosing point
export const coursePoint = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.put(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// course video point
export const courceViodePoint = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.patch(about, value);
    return data;
  } catch (err) {
    return err
  }
};

// all batches list
export const allBatches = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.post(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// single course categories
export const courseCatgories = async (id) => {
  try {
    const { data } = await instance.post(id);
    return data;
  } catch (err) {
    return err
  }
};

// course chapter
export const courseChapter = async (id) => {
  try {
    const value = JSON.stringify({ id })
    const { data } = await instance.patch(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// course faqs
export const courseFaqs = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.post(about, value);
    return data;
  } catch (err) {
    return err
  }
};

// navbar link api
export const allNavbarLinks = async () => {
  try {
    const { data } = await instance.get(navbar);
    return data;
  } catch (err) {
    return err
  }
};


// list of types tutorial
export const tutorialType = async () => {
  try {
    const { data } = await instance.get(tutorial);
    return data;
  } catch (err) {
    return err
  }
};

// tuturial couses
export const tutorialCourse = async (type) => {
  try {
    const value = JSON.stringify({ type })
    const { data } = await instance.post(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};


// tutorial chapters
export const tutorialChapter = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.put(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};

// tutorial topics
export const tutorialTopic = async (topic) => {
  try {
    const value = JSON.stringify({ topic })
    const { data } = await instance.patch(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};


