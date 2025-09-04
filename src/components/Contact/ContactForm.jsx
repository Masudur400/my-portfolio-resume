import axios from "axios"
import toast from "react-hot-toast"

export const ContactForm = () => {

    const sendMail = async (e) => {
        e.preventDefault() 
        const form = e.currentTarget;
        const name = form.name.value
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const data = {
            name,
            email,
            subject,
            message: `[From My PortFolio]\n\n${message}`
        }
        try {
            const toastId = toast.loading('Mail sending...')
            const res = await axios.post('https://bakend-ride-booking-system.vercel.app/api/mail/send', data)
            if (res?.data?.success) {
                toast.success('Mail sent.', { id: toastId })
                form.reset();
            } 
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="mb-14 mt-20">
            <div className="md:w-3/4 lg:w-3/5 mx-auto p-5 md:p-10 shadow-md shadow-purple-500 rounded-md">
                <div className="space-y-2">
                    <p className="text-2xl md:text-3xl font-medium">Contact Me</p>
                    <p className="text-sm text-gray-400">Fill out the form below and we will get back to you shortly.</p> 
                </div>
                <form onSubmit={sendMail}>
                    <div>
                        <p className="max-sm-text-sm  my-2">Name</p>
                        <input required name="name" placeholder="Your Name" id="" className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2 bg-transparent" />
                    </div>
                    <div>
                        <p className="max-sm-text-sm  my-2">Email</p>
                        <input required type="email" name="email" placeholder="you@example.com" id="" className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2 bg-transparent" />
                    </div>
                    <div>
                        <p className="max-sm-text-sm  my-2">Subject</p>
                        <input required name="subject" placeholder="Subject" id="" className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2 bg-transparent" />
                    </div>
                    <div>
                        <p className="max-sm-text-sm  my-2">Message</p>
                        <textarea required name="message" id="" rows={4} className='w-full border border-base-300 bg-transparent'></textarea>
                    </div> 
                    <input type="submit" value="Send Message" className="px-4 py-2 bg-indigo-600 w-full my-5 hover:cursor-pointer rounded-md max-sm:text-sm" /> 
                </form>
            </div>
        </div>
    )
}