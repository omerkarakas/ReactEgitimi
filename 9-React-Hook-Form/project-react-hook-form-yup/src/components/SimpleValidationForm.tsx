import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};

export default function SimpleValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form verisi:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label>Kullanıcı Adı</label>
        <input
          {...register("username", {
            required: "Kullanıcı adı zorunlu",
            minLength: {
              value: 3,
              message: "En az 3 karakter girin",
            },
          })}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email zorunlu",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Geçerli bir email girin",
            },
          })}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
    </form>
  );
}
