// app/page.tsx

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Welcome to Contact Portal</h1>
      <p className="mt-2 text-lg">Scan a QR code to view contact details</p>

      <div className="mt-6 p-4 bg-white text-blue-600 rounded-md shadow-md">
        <h2 className="text-2xl font-bold">How it works:</h2>
        <ul className="list-disc mt-2 ml-4">
          <li>Scan a QR code from a business card</li>
          <li>Get redirected to a personalized contact page</li>
          <li>Save contact info directly to your phone</li>
        </ul>
      </div>

      <a
        href="/qr"
        className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-md font-bold"
      >
        Generate QR Codes
      </a>
    </main>
  );
}
