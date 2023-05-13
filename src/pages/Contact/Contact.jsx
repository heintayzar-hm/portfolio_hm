import Button from "../../components/Button/Button";
import HeaderText from "../../components/HeaderText/HeaderText";

const Contact = () => {
    return (
        <section id="contact" className="md:px-[10%] px-5">
            <HeaderText className="text-center mb-12">Let&apos;s Connect</HeaderText>
            <div>
                <form method="POST" action="https://formspree.io/f/mqkjqlzl"  className="flex flex-col gap-4">
                    <div className="flex gap-2">
                    <label htmlFor="name" className="text-center">Name: </label>
                        <input type="text" placeholder="Name" className="mx-3 focus:outline-none w-full focus:shadow-focus shadow-normal h-10 px-5 rounded-full" name="name" required />
                    </div>
                    <div className="flex gap-2">
                    <label htmlFor="Email" className="">Email: </label>
                    <input type="email" placeholder="Email" className="mx-3 focus:outline-none w-full focus:shadow-focus shadow-normal h-10 px-5 rounded-full" name="email" required/>
                   </div>
                    <div>
                    <textarea className="focus:outline-none w-full focus:shadow-focus shadow-normal px-5 rounded-3xl py-3" name="message" id="message" cols={30} rows={10} placeholder="Just leave the message ">
                    </textarea>
                    </div>

                    <div className="flex items-center justify-center">
                    <Button type="submit" className="md:w-[300px] w-full">Send</Button>
                    </div>
                </form>
        </div>
      </section>
    )
}

export default Contact;
