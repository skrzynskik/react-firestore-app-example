import { Formik } from 'formik';


export default function Form() {
  return (
    <>
    <div className='container'>
    <Formik
       initialValues={{ productType: '', amount: '',  }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="string"
             name="productType"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
    </>
  );
}
