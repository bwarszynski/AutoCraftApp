import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ti4pw2r', 'template_6uw2i6g', form.current, 'zI131geOQfspuyBaL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="heading text-center">
                    Skontaktuj się z nami
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text__para">
                    Masz problem techniczny? Chcesz zgłosić błąd? Daj nam znać!
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="form__label">
                            Twój e-mail
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="email"
                            placeholder="przykład@email.com"
                            className="form__input mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="form__label">
                            Imię</label>
                        <input
                            type="text"
                            name="user_name"
                            id="subject"
                            placeholder="Jak się nazywasz"
                            className="form__input mt-1"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form__label">
                            Twoja wiadomość</label>
                        <textarea
                            rows="6"
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Pozostaw nam wiadomość..."
                            className="form__input mt-1"/>
                    </div>
                    <input type="submit" value="Send" />
                    <button type="submit" value="Send" className="btn rounded sm:w-fit">
                        Wyślij
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;