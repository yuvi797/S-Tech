import React from "react";
import { Hammer, Grid3X3, Wrench } from "lucide-react";

const ServiceInfo: React.FC = () => {
  const services = [
    {
      icon: Hammer,
      title: "Carpenter Mistry Service",
      description:
        "Expert carpentry services for custom furniture, wooden structures, and precision woodwork. Our skilled carpenters bring years of experience to every project.",
      features: [
        "Custom Furniture Design",
        "Cabinet Installation",
        "Door & Window Frames",
        "Wooden Flooring",
        "Repair & Maintenance",
      ],
    },
    {
      icon: Grid3X3,
      title: "False Ceiling",
      description:
        "Professional false ceiling installation and design services. Transform your space with modern ceiling solutions that enhance aesthetics and functionality.",
      features: [
        "Gypsum Board Ceiling",
        "POP Ceiling Design",
        "Wooden False Ceiling",
        "LED Integration",
        "Acoustic Solutions",
      ],
    },
    {
      icon: Wrench,
      title: "Mistry Service",
      description:
        "Comprehensive construction and maintenance services by skilled craftsmen. Quality workmanship for all your interior construction needs.",
      features: [
        "Electrical Work",
        "Plumbing Services",
        "Painting & Finishing",
        "Tile Installation",
        "General Repairs",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior services delivered by skilled professionals
            to bring your vision to life with precision and quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Our Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
