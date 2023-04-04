import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().min(2, "Too Short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string()
        .min(9, "Too Short!")
        .max(11, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      alert("Your successfully submit the form ");
    },
  });

  return (
    <div>
      <form
        className="flex flex-col w-full max-w-sm"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              htmlFor="fullName"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Full Name
            </label>
          </div>
          <div className="w-2/3">
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
                (formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : null)
              }
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div style={{ color: "red" }}>{formik.errors.fullName}</div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              htmlFor="email"
              className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Email
            </label>
          </div>
          <div className="w-2/3">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
                (formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : null)
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              htmlFor="phone"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Phone
            </label>
          </div>
          <div className="w-2/3">
            <input
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
                (formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : null)
              }
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div style={{ color: "red" }}>{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-full">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-text"
              type="text"
              placeholder="Your text here"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
