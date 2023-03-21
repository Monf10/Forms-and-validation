import { useFormik } from 'formik';
import  apiRequests from "./apiRequests.js"


// დიდ ფორმასთან  მუშაობის და სექმნის სწორი გზა : 

const SignupFormBasic = () => {
// ჰუკი იღებს ორ არგუმენტს : პირველი აუცილებლად უნდა იყოს ინიცირებული ანუ საწყისი მნიშვნელობა თითოეული ველისთვის
//როგორი ვიზუალით დაგხვდებათ ინფუთები ამაზეა დამოკიდებული (შევსებული ან ცარიელი)
  const formik = useFormik({
    initialValues: {
        // firstName: 'ტესტ', მაგალითად მსგავსი ჩანაწერი სახელის ველში გამოაჩენს სიტყვა "ტესტს"
      firstName: '',
      lastName: '',
      email: '',
    },
// მეორე არგუმენტი უნდა იყოს ქმედება, თუ რა მოხდება ფორმის დასაბმითების/ გადაზავნის დროს. გაითვალისიწნეთ ომ უნდა დაწეროთ რიქვესთი
//მხოლოდ იმ apiსთვის რომელსაც აქვს რეგისტრაციის სერვისი. ნებისმიერი api ვერ მიიღებს ამ ლოგიკას.
    onSubmit: values => {
//ფორმის დასაბმითება მომხმარებელს უჩვენებს ალერტს შევსებული მონაცემებით
      // alert(JSON.stringify(values, null, 2));

      //ან გაგზავნის სერვერზე ( შეამოწმეთ apiRequests.js ფაილი)
       apiRequests('POST', "register", values)

    },
  });
  return (
//handleSubmit ჩაშენებული ფუნქციაა რომელიც შეკრებს გადაცემულ მონაცემებს. შეგიძლიათ ასწავლოთ რაიმე ასინქრონული ფუნქციაც
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
    //ცვლილების დროს არ არის საჭირო თითოეული ველის დაკონკრეტება
        onChange={formik.handleChange}
    // თუმცა მნიშვნელობის გადაცემისას აუცილებელია დავაზუსტოთ თუ რომელი ველის შევსებული მნიშვემლობა გვაინტერესებს ( მაგ firstname)
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupFormBasic;



// არასწორია ბევრი ინფუთი დავწეროთ ისე როგორც ვწერდით ძებნის ლოგიკას ან პრპდუქტის დამატებას : 
// 1. მოგიწევთ მნიშვნელობების დასეტვა ძალიან ბევრჯერ, რაც იწვევს გადატვირთვას და კოდს ზრდის მოცულობაში
// const [value, setValue] = useState('')
// const [value, setValue] = useState('')
// const [value, setValue] = useState('')

//2. მოგიწევთ სერვერზე ამ ინფორმაციის ცალცალკე გაგზავნა ბევრი ფუნქციით, ან შეგროვება , რაც რა თქმა უნდა კიდევ უფრო ანელებს პროცესს
// function addName(e){
//     e.preventDefault();
//     const newItems = [
//         ...items,
//         {
//             title: value,

//         },
//     ]
//     setItem(newItem)
//     setValue("")
// }

// function addEmail(e){
//     e.preventDefault();
//     const newItems = [
//         ...items,
//         {
//             title: value,

//         },
//     ]
//     setItem(newItem)
//     setValue("")
// }


//3. განხვავება არ არის მხოლოდ ინფუთების შექმნის გზაში. აქაც მოგიწევთ იმდეი ინფუთის დაწერა რამდენიც საჭიროა 
//პროცესისთვის. მაგრამ ეს რენდერს არ დააყვირთავს, მხოლოდ ფუნქციონი კუთხით ნელნელა შეგროვდება შევსებული მონაცემები

// <form action ="" onSubmit={addName}>
// <input 
// type="text" 
// value={value} 
// onChange={e => setValue(e.target.value)}
// ref ={inputRef}
// />
// </form>

// <form action ="" onSubmit={addEmail}>
// <input 
// type="text" 
// value={value} 
// onChange={e => setValue(e.target.value)}
// ref ={inputRef}
// />
// </form>