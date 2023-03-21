
import React from 'react';
import { useFormik } from 'formik';
import apiRequests from "./apiRequests"

//ვალიდაციის ცვლადში იქმნება შეცდომების ობიექტი და იმის მიხედვით რა შემოწმებას დაწერთ errorს ობიექტი შეივსება
//შესაბამისი ერორით რომელსაც გამოვიტანთ ეკრანზე
const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};
//სახელის შემოწმების ლოგიკა
  if(!values.firstName || values.firstName.length < 2){
    errors.firstName = "Invalid Name " // დაბრუნებული ერორი
  }
  //გვარის შემოწმების ლოგიკა
  if(!values.lasstName){
    errors.lasstName = "Invalid Last Name "// დაბრუნებული ერორი
  }

//მეილის შემოწმების ლოგიკა
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'; // დაბრუნებული ერორი
  }


  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    //იმისთვის რომ validate ცვლადი დავუკავშიროთ რეგისტრაციის inputებს, საჭიროა ახალი მახასიათებლის გაწერა
    validate : validate,
    onSubmit: values => {
      // დასაბმითების დროს ფორმის ინფორმაციას ვგზვანით სერვერზე 
      apiRequests('POST', "register", values)
    },
  });
  return (
   
  <>
  <link
    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
    rel="stylesheet"
  />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,maximum-scale=1"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      body {\n        font-family: "Inter", sans-serif;\n      }\n    '
    }}
  />
  <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <form onSubmit={formik.handleSubmit}>
      <div className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
         value={formik.values.firstName}
          placeholder="First Name"
        />
{/* სად და როგორ უნდა გამოჩნდეს ერორი ამას ამუშავებთ თქვენი სურვილის მიხედვით. აუცილებელია მიაკითხოთ formi.errors.ცვლადის სახელის და && სიმბოლოების 
შემდეგ დაამუშავოთ ერორის ვიზუალი */}
         {
          formik.errors.firstName && <div style={{color :"red"}}>  {formik.errors.firstName}</div>
        }
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text"
          id="lasstName"
          name="lasstName"
          onChange={formik.handleChange}
         value={formik.values.lasstName}
          placeholder="Last Name"
        />
{/* აუცილებელია ყველა ერორი ცალცალკე დამუშავდეს */}
         {
          formik.errors.lasstName && <div style={{color :"red"}}>  {formik.errors.lasstName}</div>
        }
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
         value={formik.values.email}
          placeholder="Email"
        />
        {/* აუცილებელია ყველა ერორი ცალცალკე დამუშავდეს */}

        {
          formik.errors.email && <div style={{color :"red"}}>  {formik.errors.email}</div>
        }
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
         value={formik.values.password}
          placeholder="Password"
        />
     
        
        
        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy={7} r={4} />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Sign Up</span>
        </button>
       
      </div>
      </form>
    </div>
    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
      <div
        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
        }}
      />
    </div>
  </div>
  <div
    className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 flex items-center justify-center"
    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
  >
    <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
        <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
          <svg
            className="text-green-800 inline-block w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      </h3>
      <div className="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
        <button className="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">
          Close
        </button>
        <a
          className="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center"
          href="https://treact.owaiskhan.me"
          target="_blank"
        >
          See Treact
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default SignupForm;