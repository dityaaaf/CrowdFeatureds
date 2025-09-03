import React from 'react';
import { Instagram, Twitter, Github, Mail, MapPin, Calendar, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/knownastama_/?hl=en',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Didityaa696',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dityaaaf',
      icon: Github,
      color: 'hover:text-gray-800'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center">
            <img 
              src="IMG_0940.jpg" 
              alt="Profile" 
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aditama Putra
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Digital Creator & Entrepreneur
          </p>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Passionate about creating digital products that help people grow their skills and productivity
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang Saya
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Halo! Saya Aditama Putra, seorang digital creator dan entrepreneur yang passionate 
                  dalam mengembangkan produk digital berkualitas tinggi. Dengan pengalaman bertahun-tahun 
                  di bidang teknologi dan desain, saya berkomitmen untuk membantu orang lain mengembangkan 
                  skill mereka.
                </p>
                <p>
                  CrowdFeatured hadir sebagai platform untuk berbagi pengetahuan dan tools yang dapat 
                  meningkatkan produktivitas dan kemampuan teknis Anda. Setiap produk yang kami tawarkan 
                  telah melalui proses pengembangan yang matang dan testing mendalam.
                </p>
                <p>
                  Misi saya adalah membantu sebanyak mungkin orang untuk mencapai potensi terbaik mereka 
                  melalui pembelajaran digital yang efektif dan praktis.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Stats */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pencapaian</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Digital Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                    <span>Indonesia</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-purple-600" />
                    <span>adit@nusabs.sch.id</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                    <span>Bergabung sejak 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Terhubung Dengan Saya
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ikuti perjalanan saya dan dapatkan update terbaru
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center bg-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-gray-700 ${social.color} group`}
              >
                <social.icon className="w-6 h-6 mr-3" />
                <span className="font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Andi Pratama",
                role: "Student",
                content: "Kursus Roblox Studio sangat membantu saya memahami game development. Materinya lengkap dan mudah dipahami!",
                rating: 5
              },
              {
                name: "Sari Dewi",
                role: "Freelancer",
                content: "E-book produktivitas benar-benar mengubah cara kerja saya. Sekarang saya lebih efisien dan fokus.",
                rating: 5
              },
              {
                name: "Budi Santoso",
                role: "Business Owner",
                content: "Website yang dibuat sangat profesional dan sesuai dengan kebutuhan bisnis saya. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;