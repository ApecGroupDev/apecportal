'use client';

import { QRCodeCanvas } from 'qrcode.react';

const contacts = [
  { id: 'john-doe', name: 'John Doe' },
  { id: 'jane-doe', name: 'Jane Smith' },
];

export default function QRPage() {
  const baseUrl = 'https://apecportal.vercel.app/contact/';

  const downloadQR = (id: string) => {
    const canvas = document.getElementById(`qr-${id}`) as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${id}-QR.png`;
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-2xl font-bold mb-4">Generate QR Codes</h1>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex flex-col items-center border p-4 rounded-lg shadow-md">
          <p className="text-lg mb-2">{contact.name}</p>
          <QRCodeCanvas id={`qr-${contact.id}`} value={`${baseUrl}${contact.id}`} size={200} />
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => downloadQR(contact.id)}
            aria-label={`Download QR code for ${contact.name}`}
          >
            Download QR Code
          </button>
        </div>
      ))}
    </div>
  );
}
