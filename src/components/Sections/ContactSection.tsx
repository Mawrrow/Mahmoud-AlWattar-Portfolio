import Button from '../UI/Button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Contact Me</h2>
        <form className="mx-auto max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded border px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded border px-4 py-2"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded border px-4 py-2"
              placeholder="Your message"
            ></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;