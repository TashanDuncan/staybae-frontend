import TeamImage from "../../assets/images/team.png";

function AboutUs() {
  return (
    <div className="mt-5">
      <div className="flex flex-col relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
        <img src={TeamImage} alt={"hero"} className=" object-contain min-h-0" />
        <div className="absolute top-1/2 w-full text-center text-white">
          <p className="text-4xl">About Us</p>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to StayBae: Your Perfect Getaway Partner!
          </h1>

          <p className="text-lg mb-8">
            At StayBae, we believe that every journey is an opportunity to
            create unforgettable memories. Our mission is to connect travelers
            with unique and welcoming accommodations, ensuring that their stays
            are nothing short of exceptional. As an Airbnb clone, StayBae
            strives to offer the same level of comfort, convenience, and
            excitement that has made Airbnb a household name in the world of
            travel.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-lg mb-8">
            StayBae was founded by a group of avid travelers who shared a common
            passion for exploring new destinations and experiencing diverse
            cultures. Frustrated with the lack of personalized and authentic
            lodging options available, they set out to create a platform that
            would redefine the way people travel. Combining their expertise in
            technology and travel, StayBae was born with the vision of becoming
            the ultimate getaway partner for wanderers across the globe.
          </p>

          <h2 className="text-2xl font-semibold mb-2">What Sets Us Apart</h2>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">
              <strong>Unmatched Selection:</strong> We take pride in curating a
              vast and diverse selection of accommodations, ranging from cozy
              apartments in bustling cities to tranquil cottages nestled in
              nature's embrace. No matter your preference or budget, StayBae has
              the perfect stay for you.
            </li>
            <li className="mb-2">
              <strong>Personalized Experiences:</strong> We believe that a truly
              memorable journey goes beyond just finding a place to lay your
              head. With StayBae, you can discover unique experiences and local
              activities, handpicked by our passionate team to enhance your
              travel experience.
            </li>
            <li className="mb-2">
              <strong>Trusted Community:</strong> The StayBae community is built
              on trust and mutual respect. We have a stringent verification
              process for both hosts and guests, ensuring that everyone feels
              secure and at ease during their interactions.
            </li>
            <li className="mb-2">
              <strong>Seamless Booking Process:</strong> Our user-friendly
              platform makes booking your dream stay a breeze. With just a few
              clicks, you can reserve your accommodation, manage your
              reservations, and communicate with your host effortlessly.
            </li>
            <li className="mb-2">
              <strong>Dedicated Customer Support:</strong> Our team of travel
              enthusiasts is available around the clock to assist you with any
              inquiries or concerns you may have. We are committed to making
              your StayBae experience as smooth as possible.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">
            Our Commitment to Hosts
          </h2>
          <p className="text-lg mb-8">
            At StayBae, hosts are the heart and soul of our community. We take
            pride in empowering hosts to share their spaces, stories, and local
            knowledge with travelers from all corners of the globe. Whether
            you're a seasoned host or new to the game, StayBae offers the tools
            and resources you need to create a welcoming and unforgettable
            experience for your guests.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Join the StayBae Community
          </h2>
          <p className="text-lg mb-8">
            We invite you to become a part of the StayBae community, where
            wanderlust meets exceptional hospitality. Whether you're looking to
            escape to a new destination or open your doors to fellow
            adventurers, StayBae is here to make your travel dreams a reality.
          </p>

          <p className="text-lg">
            So, pack your bags and let StayBae be your trusted partner on your
            journey to discovery and delight!
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
