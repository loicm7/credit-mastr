import React from "react";

function Pricing() {
 return (
   <div className="bg-base-100 text-base-content">
     <header className="text-center py-10">
       <h1 className="font-bold md:text-[60px] text-[40px] font-poppins">
         Pricing Plans
       </h1>
       <p className="text-lg md:text-xl mt-4">
         Choose the plan that fits your needs and start making amazing music.
       </p>
     </header>

     <section className="flex flex-wrap justify-center gap-8 py-10">
       {/* Basic Plan */}
       <div className="border rounded-lg shadow-lg p-6 w-80 bg-base-200">
         <h2 className="text-2xl font-semibold mb-4">Basic</h2>
         <p className="text-lg mb-6">Perfect for beginners.</p>
         <ul className="list-disc list-inside mb-6">
           <li>Access to 50 sounds</li>
           <li>Standard quality</li>
           <li>Community support</li>
         </ul>
         <p className="text-3xl font-bold mb-4">$9.99/month</p>
         <button className="btn btn-primary w-full">Choose Basic</button>
       </div>

       {/* Pro Plan */}
       <div className="border rounded-lg shadow-lg p-6 w-80 bg-base-200">
         <h2 className="text-2xl font-semibold mb-4">Pro</h2>
         <p className="text-lg mb-6">For professional creators.</p>
         <ul className="list-disc list-inside mb-6">
           <li>Access to 500 sounds</li>
           <li>High-quality audio</li>
           <li>Priority support</li>
         </ul>
         <p className="text-3xl font-bold mb-4">$19.99/month</p>
         <button className="btn btn-primary w-full">Choose Pro</button>
       </div>

       {/* Premium Plan */}
       <div className="border rounded-lg shadow-lg p-6 w-80 bg-base-200">
         <h2 className="text-2xl font-semibold mb-4">Premium</h2>
         <p className="text-lg mb-6">For the ultimate experience.</p>
         <ul className="list-disc list-inside mb-6">
           <li>Unlimited sounds</li>
           <li>Studio-quality audio</li>
           <li>Dedicated support</li>
         </ul>
         <p className="text-3xl font-bold mb-4">$29.99/month</p>
         <button className="btn btn-primary w-full">Choose Premium</button>
       </div>
     </section>

     <section className="py-10">
       <div className="text-center">
         <h2 className="text-3xl font-bold mb-6">Explore Our Collection</h2>
         <p className="text-lg mb-8">
           Discover a wide range of instrumentals and sounds to elevate your music.
         </p>
       </div>
       <div className="flex justify-center">
         <img
           src="/assets/images/instrumentals-collection.jpg"
           alt="Instrumentals Collection"
           className="rounded-lg shadow-lg max-w-full h-auto"
         />
       </div>
     </section>
   </div>
 );
}

export default Pricing;