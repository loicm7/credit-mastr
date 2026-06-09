export async function clientLoader() {
    return {
        title: "How It Works",
    };
}

export default function HowItWorks() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Credit Subscription</h2>
                    <p className="text-gray-700">Our subscription model is based on credits. Each credit allows you to download one instrumental, beat, sound, or sample of your choice. Subscribe to a plan that fits your needs and enjoy access to our extensive library.</p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Downloading Music</h2>
                    <p className="text-gray-700">With your credit subscription, you can easily browse our collection and use your credits to download the tracks you love. Simply select a track, confirm your download, and it�s yours to use!</p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Licensing and Royalty-Free Usage</h2>
                    <p className="text-gray-700">All downloads come with a royalty-free license. This means you can use the music in your projects without worrying about additional fees or royalties. Whether it�s for personal or commercial use, you�re covered!</p>
                </section>
                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Licensing and Royalty-Free Usage</h2>
                    <p className="text-gray-700">All downloads come with a royalty-free license. This means you can use the music in your projects without worrying about additional fees or royalties. Whether it�s for personal or commercial use, you�re covered!</p>
                </section>

            </div>
            <section className="">
                <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                <ul className="">
                    <li><strong>What happens if I run out of credits?</strong> You can purchase additional credits or upgrade your subscription plan at any time.</li>
                    <li><strong>Can I cancel my subscription?</strong> Yes, you can cancel your subscription at any time. However, unused credits will expire after cancellation.</li>
                    <li><strong>Are there any restrictions on how I use the music?</strong> The royalty-free license allows for broad usage, but redistribution or resale of the music as standalone files is prohibited.</li>
                </ul>
            </section>
        </div>
    );
}

// clientAction, ErrorBoundary, etc.
