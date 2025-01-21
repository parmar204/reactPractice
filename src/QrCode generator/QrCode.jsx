import React, { useState } from 'react'
import QRCode from 'qrcode'

const QrCode = () => {

    const [input, setInput] = useState('')
    const [qrCodeImage, setQrCodeImage] = useState("");

    const handleGenerate = async () => {
        if (input.trim() === "") {
            alert("Please enter some text to generate a QR code.");
            return;
        }

        try {
            const qrImage = await QRCode.toDataURL(input)
            setQrCodeImage(qrImage)
        } catch (error) {
            console.error("Error generating QR code:", err);
        }
    }

    const handleDownload = () => {
        if (qrCodeImage) {
          const link = document.createElement('a')
          link.href = qrCodeImage
          link.download = 'qrcode.png'
          link.click()
        }
    }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="sm:w-[400px] w-full mx-4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          QR Code Generator
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter text or URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerate}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Generate
          </button>
        </div>
        {qrCodeImage && (
          <div className="text-center">
            <img
              src={qrCodeImage}
              alt="Generated QR Code"
              className="w-48 h-48 mx-auto mb-4 border border-gray-300 p-2 rounded-lg"
            />
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default QrCode