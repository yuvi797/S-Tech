import React from "react";
import { Award, Users, Target, Heart } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We source only the finest materials and products to ensure lasting beauty and durability.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We stay ahead of design trends to offer you the most contemporary and stylish solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Interior design is our passion, and it shows in every project we undertake.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About S-Tech Enterprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to transform living spaces into beautiful,
            functional environments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <img
              src="/public/certificate.png"
              alt="S-Tech Enterprises Company Certificate"
              className="rounded-lg shadow-lg w-full border-2 border-gray-200"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Certifications & Credentials
            </h3>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-blue-600">
                Licensed & Certified
              </h4>
              <p className="text-lg text-gray-700 font-medium">
                Registered Interior Design Company
              </p>
              <p className="text-gray-600 leading-relaxed">
                S-Tech Enterprises is a legally registered and certified
                interior design company, licensed to operate in Bihar and across
                India. Our certifications ensure that we meet all industry
                standards and regulatory requirements for professional interior
                design services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We hold valid business licenses, GST registration, and
                professional certifications that demonstrate our commitment to
                transparency, quality, and compliance with all applicable laws
                and regulations in the interior design industry.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium">
                  GST Registered
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                  Licensed Business
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium">
                  Certified Professionals
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
