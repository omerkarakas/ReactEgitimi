export default function ContactFormUncontrolled() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({
      name,
      email,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-stretch space-y-2 p-4 max-w-md">
      <label htmlFor="name" className="self-start">
        Adınız:
      </label>
      <input type="text" id="name" name="name" className="border px-3 py-2 rounded mb-6" />

      <label htmlFor="email" className="self-start">
        E-posta:
      </label>
      <input type="email" id="email" name="email" className="border px-3 py-2 rounded mb-6" />

      <label htmlFor="message" className="self-start">
        Mesajınız:
      </label>
      <textarea id="message" name="message" className="border px-3 py-2 rounded mb-6" />

      <button type="submit">Gönder</button>
    </form>
  );
}
