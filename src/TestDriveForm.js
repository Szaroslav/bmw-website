import React, { useState } from 'react';
import './TestDriveForm.scss';

const TestDriveForm = () => {
    const [ isSent, setIsSent ] = useState(false);
    const tyActive = isSent ? ' active' : '';

    return (
        <section id='bmw-td-form' className='bmw-td-form'>
            <div className={`bmw-td-form__ty-wrapper${tyActive}`}>
                <div className='bmw-td-form__ty-container'>
                    <h4 className='ty-container__thank-you'>DZIĘKUJEMY</h4>
                    <p className='ty-container__contact'>Skontaktujemy się z Tobą w najbliższym możliwym terminie.</p>
                    <button className='ty-container__ok-btn bmw-default-btn' onClick={() => setIsSent(!isSent) }>OK</button>
                </div>
            </div>
            <div className='bmw-td-form__bg'>
                <img className='bg__img-1' src='./assets/test-drive/bmw-ix-l.png' alt='bmw-ix-l' />
                <img className='bg__img-2' src='./assets/test-drive/bmw-ix-r.png' alt='bmw-ix-r' />
                <img className='bg__img-3' src='./assets/test-drive/triangle-4.png' alt='triangle-4' />
                <img className='bg__img-4' src='./assets/test-drive/triangle-2.png' alt='triangle-2' />
                <img className='bg__img-5' src='./assets/test-drive/triangle-3.png' alt='triangle-3' />
                <img className='bg__img-6' src='./assets/test-drive/triangle-1.png' alt='triangle-1' />
            </div>
            <div className='bmw-fluid-container'>
                <div className='bmw-td-form__form-container'>
                    <h3 className='bmw-text-1'>UMÓW JAZDĘ PRÓBNĄ <sup>BMW iX</sup></h3>
                    <p className='bmw-text-2'>Zachęcamy do ograniczenia poruszania się i pozostania w domu.</p>
                    <p className='bmw-text-2'>Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.</p>
                    <form className='form-container__form'>
                        <p className='bmw-text-8'>Wypełnij formularz swoimi danymi.</p>
                        <ul className='form__list'>
                            <li className='list__item'>
                                <ul className='form__sex-radios'>
                                    <li className='sex-radios__item'>
                                        <input type='radio' id='male' name='sex' value='male' required />
                                        <label className='bmw-text-7' htmlFor='male'>Pan</label>    
                                    </li>
                                    <li className='sex-radios__item'>
                                        <input type='radio' id='female' name='sex' value='female' required />
                                        <label className='bmw-text-7' htmlFor='female'>Pani</label>
                                    </li>
                                </ul>
                            </li>
                            <li className='list__item'>
                                <input className='form__input-t bmw-text-6' type='text' name='firstname' placeholder='Imię*' required />
                            </li>
                            <li className='list__item'>
                                <input className='form__input-t bmw-text-6' type='text' name='surname' placeholder='Nazwisko*' required />
                            </li>
                            <li className='list__item'>
                                <input className='form__input-t bmw-text-6' type='text' name='email' placeholder='E-mail*' required />
                            </li>
                            <li className='list__item'>
                                <input className='form__input-t bmw-text-6' type='text' name='phone_number' placeholder='Numer telefonu*' required />
                            </li>
                            <li className='list__item'>
                                <input className='bmw-default-btn' type='button' value='WYŚLIJ' onClick={() => setIsSent(!isSent) } />
                            </li>
                        </ul>
                    </form>
                </div>  
            </div>    
        </section>
    );
}

export default TestDriveForm;