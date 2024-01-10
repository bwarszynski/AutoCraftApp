import React from 'react';

const Contact = () => {
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
                            Twój e-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="przykład@email.com"
                            className="form__input mt-1"/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="form__label">
                            Temat</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Napisz nam, co możemy zrobić"
                            className="form__input mt-1"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form__label">
                            Twoja wiadomość</label>
                        <textarea
                            rows="6"
                            type="text"
                            id="message"
                            placeholder="Pozostaw nam wiadomość..."
                            className="form__input mt-1"/>
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">
                        Wyślij
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
