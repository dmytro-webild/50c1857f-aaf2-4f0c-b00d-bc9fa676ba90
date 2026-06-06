"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Globe, Sparkles, Star, Sun, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about-us"},
        {
          name: "Our Cuisines",          id: "#cuisines"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Special Offers",          id: "#offers"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Reservations",          id: "#reservations"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Tasty Station Restaurant"
      button={{
        text: "Book a Table",        href: "#reservations"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Experience the World's Finest Flavors at Tasty Station Restaurant"
      description="From Arabic delights to Indian spices, Filipino favorites, Chinese classics, and Continental specialties—all under one roof."
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Reserve a Table",          href: "#reservations"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sliced-salmon-with-arugula-grapefruit-sauce_141793-954.jpg"
      imageAlt="Collection of multicultural dishes from Tasty Station Restaurant"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-gardener-woman-with-short-hair-apron-hat-lookign-camera-showing-meditation-gesture-with-fingers-smiling-standing-orange-background_141793-45682.jpg",          alt: "Happy customer Sarah L."},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-male-gardener-wearing-gardening-hat-holding-pumpkin-front-isolated-pink-wall_141793-90655.jpg",          alt: "Delighted guest Mark T."},
        {
          src: "http://img.b2bpic.net/free-photo/young-gardener-man-wearing-jumpsuit-hat-holding-pumpkin_141793-47294.jpg",          alt: "Satisfied diner Emily B."},
        {
          src: "http://img.b2bpic.net/free-photo/annoyed-young-chef-wearing-glasses-uniform-cap-holding-spoon-bowl-looking-side-pointing-bowl-isolated-purple-background_141793-138718.jpg",          alt: "Chef and food enthusiast Alex P."},
        {
          src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3705.jpg",          alt: "Restaurant patron Olivia K."},
      ]}
      avatarText="Loved by over 5000 guests!"
      marqueeItems={[
        {
          type: "text",          text: "Authentic Cuisine"},
        {
          type: "text",          text: "Exceptional Service"},
        {
          type: "text-icon",          text: "Gourmet Dining",          icon: Utensils,
        },
        {
          type: "text",          text: "Vibrant Atmosphere"},
        {
          type: "text-icon",          text: "Taste the World",          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="about-us" data-section="about-us">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="Where Every Dish Tells a Tale of Tradition and Taste"
      buttons={[
        {
          text: "Learn More",          href: "#about-us"},
      ]}

    />
  </div>

  <div id="cuisines" data-section="cuisines">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "arabic",          title: "Arabic Cuisine",          descriptions: [
            "Savor the rich aromas and bold flavors of the Middle East.",            "Featuring classic dishes like Shawarma, Mixed Grill, and Hummus."],
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-delicious-hummus-plate-still-life_23-2149595638.jpg",          imageAlt: "Arabic Shawarma and Mixed Grill platter"},
        {
          id: "indian",          title: "Indian Cuisine",          descriptions: [
            "Dive into the vibrant spices and heartwarming tastes of India.",            "Enjoy Butter Chicken, Biryani, Tandoori Chicken, and more."],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-dessert-sweet-baked-pumpkin-with-nuts-cream_141793-3867.jpg",          imageAlt: "Indian Butter Chicken and Biryani"},
        {
          id: "filipino",          title: "Filipino Cuisine",          descriptions: [
            "Experience the unique sweet, sour, and savory profiles of Filipino favorites.",            "Highlights include Chicken Adobo, Sinigang, and Kare-Kare."],
          imageSrc: "http://img.b2bpic.net/free-photo/angle-view-new-year-snack-box-standing-decorated-holiday-dinner-table_1098-19107.jpg",          imageAlt: "Filipino Chicken Adobo and Pancit"},
        {
          id: "chinese",          title: "Chinese Cuisine",          descriptions: [
            "Explore ancient traditions and dynamic flavors from across China.",            "From Kung Pao Chicken and Fried Rice to Dim Sum and Noodles."],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-noodles-with-sauce-croutons-table_141793-17474.jpg",          imageAlt: "Chinese Kung Pao Chicken and Fried Rice"},
        {
          id: "continental",          title: "Continental Cuisine",          descriptions: [
            "Indulge in timeless classics and modern European-inspired dishes.",            "Featuring Grilled Steak, Pasta Alfredo, Roasted Chicken, and Seafood Platters."],
          imageSrc: "http://img.b2bpic.net/free-photo/soup-with-pomegranate-inside-glass-wine_140725-6345.jpg",          imageAlt: "Continental Grilled Steak and Pasta Alfredo"},
      ]}
      title="Our Diverse Cuisines"
      description="Embark on a culinary journey with authentic dishes from across the globe, meticulously prepared to bring you an unparalleled dining experience."
      buttons={[
        {
          text: "Explore Full Menu",          href: "#menu"},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "m1",          name: "Gourmet Burger",          price: "$15.50",          variant: "American Classic",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EmHLo50h7hLGTJnVuF84xVMBpP/uploaded-1780779785137-dr76fxgw.jpg",          imageAlt: "Delicious Gourmet Burger"},
        {
          id: "m2",          name: "Creamy Pasta",          price: "$14.00",          variant: "Italian Delight",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EmHLo50h7hLGTJnVuF84xVMBpP/uploaded-1780779785137-ky4c6tsv.jpg",          imageAlt: "Rich Creamy Pasta"},
        {
          id: "m3",          name: "Healthy Salad Bowl",          price: "$12.75",          variant: "Fresh & Light",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EmHLo50h7hLGTJnVuF84xVMBpP/uploaded-1780779785137-ibk973bp.jpg",          imageAlt: "Vibrant Healthy Salad Bowl"},
        {
          id: "m4",          name: "Spicy Noodle Soup",          price: "$13.25",          variant: "Asian Fusion",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EmHLo50h7hLGTJnVuF84xVMBpP/uploaded-1780779785137-7s3w2gok.jpg",          imageAlt: "Hearty Spicy Noodle Soup"},
        {
          id: "m5",          name: "Decadent Chocolate Cake",          price: "$8.99",          variant: "Dessert Special",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EmHLo50h7hLGTJnVuF84xVMBpP/uploaded-1780779785137-xxt6epc1.jpg",          imageAlt: "Irresistible Decadent Chocolate Cake"},
      ]}
      title="Discover Our Latest Menu Additions"
      description="Experience fresh flavors and exciting new dishes, crafted with the finest ingredients and culinary passion."
      buttons={[
        {
          text: "Order Online",          href: "#"},
      ]}
    />
  </div>

  <div id="offers" data-section="offers">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "family-deal",          badge: "Value",          badgeIcon: Sparkles,
          price: "From $54.99",          subtitle: "Perfect for family gatherings",          buttons: [
            {
              text: "View Deal",              href: "#"},
          ],
          features: [
            "Choose 3 Main Courses",            "Includes 4 Sides",            "Complimentary Dessert Platter",            "Serves 4-5 People"],
        },
        {
          id: "weekend-buffet",          badge: "Popular",          badgeIcon: Star,
          price: "$34.99/person",          subtitle: "All-you-can-eat international buffet",          buttons: [
            {
              text: "Learn More",              href: "#"},
          ],
          features: [
            "Unlimited Arabic, Indian & Asian Dishes",            "Live Cooking Stations",            "Includes Soft Drinks & Juices",            "Available Saturdays & Sundays"],
        },
        {
          id: "lunch-specials",          badge: "Daily",          badgeIcon: Sun,
          price: "From $14.99",          subtitle: "Quick and delicious weekday meals",          buttons: [
            {
              text: "See Specials",              href: "#"},
          ],
          features: [
            "Rotating Daily Specials",            "Includes Drink, Starter & Dessert",            "Available Mon-Fri (12 PM - 3 PM)",            "Dine-in Only"],
        },
      ]}
      title="Exclusive Special Offers"
      description="Indulge in our delightful promotions and family meal deals crafted just for you, bringing more flavor for less."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid-inverted"
      useInvertedBackground={true}
      products={[
        {
          id: "g1",          name: "Elegant Interior",          price: "",          variant: "Ambiance",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-hotel-reception-lobby_482257-76206.jpg",          imageAlt: "Luxurious restaurant interior"},
        {
          id: "g2",          name: "Inviting Dining Area",          price: "",          variant: "Ambiance",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-family-enjoying-meal_23-2150595551.jpg",          imageAlt: "Comfortable restaurant dining setup"},
        {
          id: "g3",          name: "Artful Food Presentation",          price: "",          variant: "Cuisine",          imageSrc: "http://img.b2bpic.net/free-photo/red-roll-green-beans-served-white-plate_1304-4653.jpg",          imageAlt: "Exquisitely plated gourmet dish"},
        {
          id: "g4",          name: "Culinary Masterpiece",          price: "",          variant: "Cuisine",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-stacked-aesthetic-objects_52683-108509.jpg",          imageAlt: "Beautiful and colorful food presentation"},
        {
          id: "g5",          name: "Chef in Action",          price: "",          variant: "Team",          imageSrc: "http://img.b2bpic.net/free-photo/chef-pouring-seasoning-beef-stake-plate_417767-259.jpg",          imageAlt: "Head chef preparing a dish"},
        {
          id: "g6",          name: "Joyful Family Dining",          price: "",          variant: "Experience",          imageSrc: "http://img.b2bpic.net/free-photo/burning-sparkler-dish_23-2147668912.jpg",          imageAlt: "Happy family enjoying a meal"},
      ]}
      title="A Glimpse of Tasty Station"
      description="Explore the elegant ambiance, stunning food presentation, and heartwarming dining experiences that await you at our restaurant."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          role: "Food Critic",          company: "Culinary Explorer",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-man-posing-studio_23-2151156355.jpg"
        },
        {
          id: "t2",          name: "Michael C.",          role: "Local Guide",          company: "TasteBuds Blog",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/good-job-happy-smiling-business-man-suit-holding-laptop-showing-thumb-up-praise-you-nice-work_1258-173635.jpg"
        },
        {
          id: "t3",          name: "Emily R.",          role: "Travel Blogger",          company: "Worldly Bites",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg"
        },
        {
          id: "t4",          name: "David K.",          role: "Frequent Diner",          company: "Gourmet Adventures",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-older-man-city-listening-music-headphones_23-2148991083.jpg"
        },
        {
          id: "t5",          name: "Jessica L.",          role: "Chef",          company: "The Flavor Hub",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-person-presenting-new-year-2023_1048-17676.jpg"
        },
        {
          id: "t6",          name: "Robert G.",          role: "Restaurant Owner",          company: "Global Flavors",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cartoon-style_23-2151134201.jpg"
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our delighted customers about their unforgettable dining experiences, praising our food, service, and ambiance."
    />
  </div>

  <div id="reservations" data-section="reservations">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Reservations"
      title="Secure Your Table Today"
      description="Plan your perfect dining experience with us. Use our easy online booking system to reserve your preferred date and time."
      buttons={[
        {
          text: "Book Now",          href: "#"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Visit Us or Reach Out"
      description="We're here to make your dining experience exceptional. Find us at our vibrant location or connect with us via phone or email."
      buttons={[
        {
          text: "Call Us: +123 456 7890",          href: "tel:+1234567890"},
        {
          text: "Email Us: info@tastystation.com",          href: "mailto:info@tastystation.com"},
        {
          text: "Find Us on Google Maps",          href: "https://maps.google.com/?q=Tasty+Station+Restaurant"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about-us"},
            {
              label: "Our Cuisines",              href: "#cuisines"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Special Offers",              href: "#offers"},
            {
              label: "Gallery",              href: "#gallery"},
          ],
        },
        {
          title: "Reservations",          items: [
            {
              label: "Book a Table",              href: "#reservations"},
            {
              label: "Private Dining",              href: "#"},
            {
              label: "Events",              href: "#"},
          ],
        },
        {
          title: "Contact Us",          items: [
            {
              label: "Location",              href: "#contact"},
            {
              label: "Phone: +123 456 7890",              href: "tel:+1234567890"},
            {
              label: "Email: info@tastystation.com",              href: "mailto:info@tastystation.com"},
            {
              label: "WhatsApp",              href: "https://wa.me/1234567890"},
          ],
        },
        {
          title: "Follow Us",          items: [
            {
              label: "Facebook",              href: "https://facebook.com/tastystation"},
            {
              label: "Instagram",              href: "https://instagram.com/tastystation"},
            {
              label: "Twitter",              href: "https://twitter.com/tastystation"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Tasty Station Restaurant. All rights reserved."
      bottomRightText="Privacy Policy | Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}