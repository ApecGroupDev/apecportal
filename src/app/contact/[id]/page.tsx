'use client';

import { QRCodeCanvas } from 'qrcode.react';

const contacts = [
  { id: 'john-doe', name: 'John Doe' },
  { id: 'jane-doe', name: 'Jane Smith' },
];

export default function QRPage() {
  const baseUrl = 'https://your-deployed-site.com/contact/';

  const downloadQR = (id: string) => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${id}-QR.png`;
      link.click();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <h1 className="text-3xl font-bold">Generate Contact QR Codes</h1>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex flex-col items-center border p-4 rounded-lg shadow-md bg-white">
          <p className="text-lg mb-2">{contact.name}</p>
          <QRCodeCanvas id={contact.id} value={`${baseUrl}${contact.id}`} size={200} />
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => downloadQR(contact.id)}
          >
            Download QR Code
          </button>
        </div>
      ))}
    </main>
  );
}
