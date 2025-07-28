// components/YupForm.tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 1. Doğrulama şeması (validation schema)
const schema = yup
  .object({
    name: yup.string().required("Ad zorunludur"),
    email: yup.string().email("Geçerli bir email adresi girin").required("Email zorunludur"),
  })
  .required();

type FormValues = {
  name: string;
  email: string;
};

export default function YupForm() {
  // 2. useForm'a resolver tanımlanır
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form verisi:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label>Adınız</label>
        <input {...register("name")} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} className="border p-2 w-full" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
    </form>
  );
}
