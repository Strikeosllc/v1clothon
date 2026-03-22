/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /*
      ✏️ USER EDIT: Add any image domains you use here
      e.g. if you host images on Cloudinary add: 'res.cloudinary.com'
      Current: allows Unsplash placeholder images
    */
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
