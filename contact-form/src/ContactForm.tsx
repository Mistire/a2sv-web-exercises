import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center p-6">
      <div className="max-w-md w-full border-2 rounded-lg shadow-xl p-8 backdrop-blur-xl">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label htmlFor="username" className="block font-bold text-lg text-gray-700">Username</label>
            <input 
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-900 shadow-transparent  text-base mt-1">{errors.username?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="email" className="block font-bold text-lg text-gray-700">Email</label>
            <input 
              type="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-900 text-base mt-1">{errors.email?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="message" className="block font-bold text-lg text-gray-700">Message</label>
            <textarea
              id="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-900 text-base mt-1">{errors.message?.message}</p>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-md shadow hover:bg-indigo-600 transition duration-300 ease-in-out">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
