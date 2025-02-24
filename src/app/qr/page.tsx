'use client';

import { QRCodeCanvas } from 'qrcode.react';

const contacts = [
  { id: 'John Doe', name: 'John Doe' },
  { id: 'Jane Doe', name: 'Jane Smith' },
];

export default function QRPage() {
  const baseUrl = 'https://apecportal.vercel.app/contact/';

  const downloadQR = (id: string) => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${id}-QR.png`;  // Fixed template literal
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-2xl font-bold mb-4">Generate QR Codes</h1>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex flex-col items-center border p-4 rounded-lg shadow-md">
          <p className="text-lg mb-2">{contact.name}</p>
          <QRCodeCanvas id={contact.id} value={`${baseUrl}${contact.id}`} size={200} />  {/* Fixed template literal */}
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => downloadQR(contact.id)}
          >
            Download QR Code
          </button>
        </div>
      ))}
    </div>
  );
}