import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicySection = () => {
  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Privacy Policy
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        We value your privacy and are committed to protecting your personal
        information. Please read the details below to understand how we collect,
        use, and safeguard your data.
      </p>

      <div className="mt-12 max-w-4xl mx-auto space-y-8 text-gray-700">
        <section>
          <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
          <p className="text-sm md:text-base">
            We collect information you provide directly to us, such as when you
            create an account, contact us, or use our services. This may include
            your name, email, payment information, and any other information you
            choose to provide.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">
            How We Use Your Information
          </h3>
          <p className="text-sm md:text-base">
            Your information helps us provide and improve our services,
            communicate with you, process transactions, and personalize your
            experience on our platform.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">
            Data Sharing & Security
          </h3>
          <p className="text-sm md:text-base">
            We do not sell your personal information. We may share data with
            trusted third-party service providers to help deliver our services,
            and we maintain strict security measures to protect your data.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
          <p className="text-sm md:text-base">
            You have the right to access, update, or delete your personal
            information at any time. You can also opt out of communications or
            marketing emails.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm md:text-base">
            If you have any questions or concerns about your privacy, please{" "}
            <Link
              to="/contact"
              className="font-medium text-[#FF6B6B] hover:text-[#ed5757]"
            >
              contact us
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
