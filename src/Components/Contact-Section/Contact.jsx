

const Contact = () => {
    return (
        <div className="grid mt-8 mb-8 w-[80%] grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                <div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
            </div>
            <img src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e30ba8983564552c60dc7_selfie.svg" alt="" className="pt-8" />
        </div>
        <form className="space-y-6 border-2 p-8 rounded-xl">
            <div>
                <label htmlFor="name" className="text-sm ">Full name</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded-bg-gray-100 " />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" className="w-full p-3 roundedbg-gray-100" />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100 border"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50">Send Message</button>
        </form>
    </div>
    );
};

export default Contact;