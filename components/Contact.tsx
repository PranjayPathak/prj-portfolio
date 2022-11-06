import React from 'react'
import CornerButton from './common/CornerButton'
import HeadingHighlight from './common/HeadingHighlight'
import { useForm, SubmitHandler } from "react-hook-form";
import constants from "../constants"

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function Contact({ }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:${constants.MAIL_ID}?subject=${data.subject}&body=Here's a message from ${data.name}(${data.email}): ${data.message}`
    };

    return (
        <div className='contact container'>
            <div className='contact__wrapper'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='contact__heading headline-1'>
                        Let&#39;s <HeadingHighlight>Talk</HeadingHighlight>
                    </h1>
                    <div className='double-input'>
                        <div className='form__input_container' >
                            <input {...register('name')} className='form__input label-2' id='name' required placeholder=' ' />
                            <label className='form__label label-2' htmlFor="name">Name</label>
                        </div>
                        <div className='form__input_container' >
                            <input {...register('email')} className='form__input label-2' id='email' type='email' required placeholder=' ' />
                            <label className='form__label label-2' htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className='form__input_container' >
                        <input {...register('subject')} className='form__input label-2' id='subject' required placeholder=' ' />
                        <label className='form__label label-2' htmlFor="subject">Subject</label>
                    </div>
                    <div className='form__input_container' >
                        <textarea {...register('message')} className='form__input label-2' id='message' required placeholder=' ' />
                        <label className='form__label label-2' htmlFor="message">Message</label>
                    </div>

                    <button className='form__btn label-2'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact