import Image from 'next/image';
import { notFound } from 'next/navigation';

type Contact = {
  name: string;
  phone: string;
  email: string;
  location: string;
};

const mockContacts: Record<string, Contact> = {
  'john-doe': {
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john@example.com',
    location: '123 Main St, Cityville',
  },
  'jane-doe': {
    name: 'Jane Doe',
    phone: '+0987654321',
    email: 'jane@example.com',
    location: '456 Oak St, Townsville',
  },
};

// Ensure params are wrapped correctly
export async function generateStaticParams() {
  return Object.keys(mockContacts).map((name) => ({
    name, // Adjusted to match Next.js 15 structure
  }));
}

type Props = {
  params: Promise<{ name: string }>;
};

export default async function ContactPage({ params }: Props) {
  const resolvedParams = await params; // Await params
  const contact = mockContacts[resolvedParams.name];

  if (!contact) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-customBlue text-white">
      {/* Logo Section */}
      <div className="w-32 h-32 p-2 mt-16 mb-8 bg-white rounded-full">
        <Image src="/logo/APEC.png" alt="APEC Logo" width={128} height={128} priority />
      </div>
      <h1 className="text-3xl font-bold">{contact.name}</h1>

      <div className="flex space-x-4 mt-4">
        <a href={`tel:${contact.phone}`} className="bg-white p-3 rounded-md text-blue-600">
          📞
        </a>
        <a href={`mailto:${contact.email}`} className="bg-white p-3 rounded-md text-blue-600">
          📧
        </a>
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(contact.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-blue-600"
        >
          📍
        </a>
      </div>

      <div className="bg-white text-blue-600 w-full mt-6">
        <button className="w-full bg-red-600 text-white p-2 rounded-md mb-4">Add Contact</button>

        <div className="flex items-center space-x-4">
          <span className="bg-gray-200 p-2 rounded-md">📱</span>
          <div>
            <p className="font-bold">{contact.phone}</p>
            <p className="text-sm text-gray-600">Mobile phone</p>
          </div>
        </div>
      </div>
    </main>
  );
}
