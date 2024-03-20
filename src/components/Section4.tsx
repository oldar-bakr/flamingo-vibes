import React from "react";

const Section4 = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <h2 className="text-4xl font-bold">
                DON’T MISS THE CHANCE OF A MEMORABLE HOLIDAY!
              </h2>
              <div className="bg-orange-200 px-4 py-2 rounded-lg mt-4">
                <p className="text-lg">
                  Trabzon, Turkey, offers a unique Christmas and New Year
                  holiday with a blend of rich history, picturesque landscapes,
                  and warm hospitality. Explore Byzantine marvels like the
                  dramatic Sumela Monastery. Embrace the winter wonderland as
                  snow-covered mountains meet the Black Sea's shores, providing
                  a scenic backdrop for outdoor activities. Indulge in Trabzon's
                  delectable cuisine, featuring local delights like mıhlama and
                  hamsi pilav. The city's vibrant bazaars offer unique festive
                  gifts. What sets Trabzon apart is the genuine warmth of its
                  people, who invite visitors to share in local traditions and
                  create lasting memories in this enchanting destination. For an
                  unforgettable holiday experience, Trabzon stands out as the
                  perfect combination of culture, nature, and community spirit.
                </p>
              </div>
              {/* Add book now button */}
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold">
                WHY TO BOOK WITH FLAMINGO VIBE?
              </h2>
              <p className="text-lg mt-4">
                If you are looking for global and high-quality services, then
                you need Flamingo Vibe. Not only is it because of the globality,
                but also because of the number of satisfied tourists who have
                experienced the true joy of tourism with us. With Flamingo Vibe,
                you don’t need to plan the details of your vacation. All you
                have to do is to call our team and we will do the rest.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                LOOKING FOR OTHER DESTINATIONS?
              </h2>
              <p className="text-lg mt-4">
                The holiday taste varies between one destination and another.
                Don’t worry! Flamingo Vibe team will make you the best tourism
                package in destinations like Dubai, Cappadocia, and others.
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              {/* Add horizontal 4 images */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
