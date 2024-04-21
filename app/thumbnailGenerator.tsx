"use client";
import { useState } from "react";
import Image from "next/image";

export default function ThumbnailGenerator() {
  const [playStoreLink, setPlayStoreLink] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setImageSrc("/placeholder.jpeg");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Play Store Link"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={playStoreLink}
            onChange={(e) => setPlayStoreLink(e.target.value)}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Generate Image
            </button>
          </div>
        </form>
        {imageSrc && (
          <div className="mt-4">
            <Image
              src={imageSrc}
              width={400}
              height={200}
              alt="Generated App Preview"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}