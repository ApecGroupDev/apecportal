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
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

type Contact = {
  name: string;
  phone: string;
  landline: string;
  email: string;
  location: string;
  fax: string;
  website: string;
  addressLine1: string,
  addressLine2: string,
  position: string;
  linkedin: string;
  company: string;
};

const mockContacts: Record<string, Contact> = {
  'jorge-salazar': {
    name: 'Jorge Salazar',
    phone: '678-936-5312',
    landline: '855-444-2732',
    fax: '855-444-2732',
    email: 'jsalazar@theapecgroup.com',
    location: '4732-E North Royal Atlanta Drive, 30084, Tucker, GA, United States',
    website: 'https://apec-mini.com/',
    addressLine1: '4732-E North Royal Atlanta Drive, 30084,',
    addressLine2: 'Tucker, GA, United States',
    position: 'Chief Operations Officer',
    company: 'APEC IMAGING AND CANOPIES',
    linkedin: 'https://www.linkedin.com/company/apec-imaging-and-canopies/?external_page=LPC.Immersive&external_control=EmployerLogo&external_app_instance=837e22fa-74c9-471f-b9c6-20f2c56de93e&external_page_instance=a5a2c123-396d-4191-b7aa-7839fe2a4fde&experiment=displayLinkedInDataPrebind'
  },
  'jose-salazar': {
    name: 'Jose Salazar',
    phone: '678-943-4898',
    landline: '855-444-2732',
    fax: '855-444-2732',
    email: 'jose.salazar@theapecgroup.com',
    location: '4732-E North Royal Atlanta Drive, 30084, Tucker, GA, United States',
    website: 'https://apec-mini.com/',
    addressLine1: '4732-E North Royal Atlanta Drive, 30084,',
    addressLine2: 'Tucker, GA, United States',
    position: 'Project Manager',
    company: 'APEC IMAGING AND CANOPIES',
    linkedin: 'https://www.linkedin.com/company/apec-imaging-and-canopies/?external_page=LPC.Immersive&external_control=EmployerLogo&external_app_instance=837e22fa-74c9-471f-b9c6-20f2c56de93e&external_page_instance=a5a2c123-396d-4191-b7aa-7839fe2a4fde&experiment=displayLinkedInDataPrebind'
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
    <main className="flex flex-col items-center min-h-screen bg-white">
      {/* Logo Section */}
      <div className='flex  flex-col items-center bg-customBlue w-full'>
        <div className="w-32 h-32 p-2 mt-16 mb-8 bg-white rounded-full">
          <Image src="/logo/APEC.png" alt="APEC Logo" width={128} height={128} priority />
        </div>
        <h1 className="text-3xl text-white font-bold">{contact.name}</h1>

        <div className="flex space-x-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <a href={`tel:${contact.phone}`} className="bg-red-600 p-4 rounded-md !text-black">
              <IoIosCall size={24} color="white" />
            </a>
            <span className="text-gray-200 text-sm">Call</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <a href={`mailto:${contact.email}`} className="bg-red-600 p-4 rounded-md text-blue-600">
              <IoMdMail size={24} color="white" />
            </a>
            <span className="text-gray-200 text-sm">Email</span>
          </div>
          <div className="flex flex-col items-center space-y-2 mb-8">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(contact.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 rounded-md p-4 text-blue-600"
            >
              <IoLocationSharp size={24} color="white" />
            </a>
            <span className="text-gray-200 text-sm">Location</span>
          </div>
        </div>
      </div>

      <div className="bg-white text-blue-600 w-full">
        <div className="justify-center flex">
          <button className="w-72 bg-red-600 text-white p-4 rounded-full my-8 font-medium flex items-center justify-center space-x-2">
            <FiUserPlus size={24} />
            <span>add contact</span>
          </button>
        </div>
      </div>

      {/* First 3 icons */}

      <div className='bg-white'>
        <div className='bg-white w-full flex-col justify-center'>
          <div className="flex items-center space-x-6">
            <span className="p-2 rounded-md">
              <MdOutlinePhoneIphone size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.phone}</p>
              <p className="text-sm text-gray-600">Mobile Phone</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-6">
            <span className="p-2 rounded-md">
              <IoMdBriefcase size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.landline}</p>
              <p className="text-sm text-gray-600">Landline</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-6">
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
          <hr className='w-11/12 mx-auto mt-8' />
          <div className="flex items-center space-x-6 mt-4">
            <span className="p-2 rounded-md">
              <BiEnvelope size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.email}</p>
            </div>
          </div>

          <hr className='w-11/12 mx-auto mt-4' />
          <div className="flex items-center space-x-6 mt-4">
            <span className="p-2 rounded-md">
              <BsGlobe size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.website}</p>
            </div>
          </div>

          <hr className='w-11/12 mx-auto mt-4' />
          <div className="flex items-center space-x-6 mt-4">
            <span className="p-2 rounded-md">
              <IoLocationOutline size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.addressLine1}</p>
              <p className="text-black">{contact.addressLine2}</p>
            </div>
          </div>

          <hr className='w-11/12 mx-auto mt-4' />
          <div className="flex items-center space-x-6 mt-4">
            <span className="p-2 rounded-md">
              <IoBriefcaseOutline size={24} color="black" />
            </span>
            <div>
              <p className="text-black">{contact.company}</p>
              <p className="text-sm text-gray-600">{contact.position}</p>
            </div>
          </div>
        </div>

        {/* Social Media */}

        <div className='bg-white w-full flex-col justify-center'>
          <hr className='w-11/12 mx-auto mt-8' />
          <div className='w-full justify-center flex mt-8'>
            <span className='text-gray-800'>Find me on:</span>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <span className="p-2 rounded-full bg-[#0A66C2]">
              <FaLinkedinIn size={24} color="white" />
            </span>
            <div>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-black">
                LinkedIn
              </a>
            </div>
          </div>
          <hr className='w-11/12 mx-auto my-8' />
        </div>
      </div>
    </main>
  );
}
