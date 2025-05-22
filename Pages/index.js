export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to FreshForce!</h1>
      <p className="mb-4">Book a trusted young cleaner to make your space shine.</p>
<form
        name="booking-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwxQJfenyuiMU8u1SIO43UxfrvRwFkR2-58DUNmAMIvOA-tLDK0bbfXYYyyOY3g0FTy/exec"
        className="space-y-4"
>
        <input name="Name" placeholder="Your Name" className="block w-full border p-2" required />
        <input name="Service" placeholder="Service Type" className="block w-full border p-2" required />
        <input name="Date" type="date" className="block w-full border p-2" required />
        <input name="Time" type="time" className="block w-full border p-2" required />
        <input name="Address" placeholder="Address" className="block w-full border p-2" required />
        <input name="Phone" placeholder="Phone Number" className="block w-full border p-2" required />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Book Now</button>
      </form><a
        href="https://wa.me/27740308388"
        className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded"
      >>
        Chat on WhatsApp
      </a>
    </div>
  );
          }
