import Image from 'next/image';
import { notFound } from 'next/navigation';
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

type Contact = {
  name: string;
  phone: string;
  landline: string;
  email: string;
  location: string;
  fax: string;
  website: string;
};

const mockContacts: Record<string, Contact> = {
  'john-doe': {
    name: 'Jorge Salazar',
    phone: '678-943-4898',
    landline: '855-444-2732',
    fax: '855-444-2732',
    email: 'john@example.com',
    location: '123 Main St, Cityville',
    website: 'https://apec-mini.com/'
  },
  'jane-doe': {
    name: 'Jane Doe',
    phone: '+0987654321',
    landline: '855-444-2732',
    fax: '855-444-2732',
    email: 'jane@example.com',
    location: '456 Oak St, Townsville',
    website: 'https://apec-mini.com/'
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

      <div className="flex space-x-8 mt-8">
        <a href={`tel:${contact.phone}`} className="bg-red-600 p-4 rounded-md !text-black">
          <IoIosCall size={24} color="white" />
        </a>
        <a href={`mailto:${contact.email}`} className="bg-red-600 p-4 rounded-md text-blue-600">
          <IoMdMail size={24} color="white" />
        </a>
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(contact.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 rounded-md p-4 text-blue-600"
        >
          <IoLocationSharp size={24} color="white" />
        </a>
      </div>

      <div className="bg-white text-blue-600 w-full mt-6">
        <div className="justify-center flex">
          <button className="w-72 bg-red-600 text-white p-4 rounded-full my-8 font-medium flex items-center justify-center space-x-2">
            <FiUserPlus size={24} />
            <span>add contact</span>
          </button>
        </div>
      </div>

      {/* First 3 icons */}

      <div className='bg-white w-full flex-col justify-center'>
        <div className="flex items-center space-x-6 ms-4">
          <span className="p-2 rounded-md">
            <MdOutlinePhoneIphone size={24} color="black" />
          </span>
          <div>
            <p className="text-black">{contact.phone}</p>
            <p className="text-sm text-gray-600">Mobile Phone</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 ms-4 mt-4">
          <span className="p-2 rounded-md">
            <IoMdBriefcase size={24} color="black" />
          </span>
          <div>
            <p className="text-black">{contact.landline}</p>
            <p className="text-sm text-gray-600">Landline</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 ms-4 mt-4">
          <span className="p-2 rounded-md">
            <AiFillPrinter size={22} color="black" />
          </span>
          <div>
            <p className="text-black">{contact.phone}</p>
            <p className="text-sm text-gray-600">Fax</p>
          </div>
        </div>
      </div>

      {/* 2nd row icons */}

      <div className='bg-white w-full flex-col justify-center'>
        <hr className='w-11/12 mx-auto mt-6' />
        <div className="flex items-center space-x-6 ms-4 mt-4">
          <span className="p-2 rounded-md">
            <BiEnvelope size={24} color="black" />
          </span>
          <div>
            <p className="text-black">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 ms-4 mt-4">
          <span className="p-2 rounded-md">
            <BsGlobe size={24} color="black" />
          </span>
          <div>
            <p className="font-semibold text-black">{contact.website}</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 ms-4 mt-4">
          <span className="p-2 rounded-md">
            <IoLocationOutline size={24} color="black" />
          </span>
          <div>
            <p className="font-bold text-black">{contact.phone}</p>
            <p className="text-sm text-gray-600">Fax</p>
          </div>
        </div>
      </div>
    </main>
  );
}
