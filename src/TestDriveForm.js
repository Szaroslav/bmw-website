import React from 'react';
import './TestDriveForm.scss';

const TestDriveForm = () => {
    return (
        <section id='bmw-td-form' className='bmw-td-form'>
            <div className='bmw-td-form__bg'>
                <img src='./assets/test-drive/bmw-ix-l.png' alt='bmw-ix-l' />
                <img src='./assets/test-drive/bmw-ix-r.png' alt='bmw-ix-r' />
                {/*<img src='./assets/test-drive/triangle-1.png' alt='triangle-1' />
                <img src='./assets/test-drive/triangle-2.png' alt='triangle-2' />
                <img src='./assets/test-drive/triangle-3.png' alt='triangle-3' /> */}
            </div>
            <div className='bmw-fluid-container'>
                <div className='bmw-td-form__form'>
                    <h3 className='bwm-text-1'>UMÓW JAZDĘ PRÓBNĄ <sup>BMW iX</sup></h3>
                    <p className='bwm-text-2'>Zachęcamy do ograniczenia poruszania się i pozostania w domu.</p>
                    <p className='bwm-text-2'>Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.</p>
                    <form>
                        <p>Wypełnij formularz swoimi danymi.</p>
                        <ul>
                            <li>
                                <input type='radio' id='male' name='sex' value='male' required />
                                <label htmlFor='male'>Pan</label>
                                <input type='radio' id='female' name='sex' value='female' required />
                                <label htmlFor='female'>Pani</label>
                            </li>
                            <li>
                                <input className='form__input-t' type='text' name='firstname' placeholder='Imię*' required />
                            </li>
                            <li>
                                <input className='form__input-t' type='text' name='surname' placeholder='Nazwisko*' required />
                            </li>
                            <li>
                                <input className='form__input-t' type='text' name='email' placeholder='E-mail*' required />
                            </li>
                            <li>
                                <input className='form__input-t' type='text' name='phone_number' placeholder='Numer telefonu*' required />
                            </li>
                            <li>
                                <input className='bmw-default-btn' type='submit' value='WYŚLIJ' />
                            </li>
                        </ul>
                    </form>
                </div>  
            </div>    
        </section>
    );
}

export default TestDriveForm;