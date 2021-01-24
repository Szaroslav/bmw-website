import React from 'react';
import './TestDriveForm.scss';

const TestDriveForm = () => {
    return (
        <section id='bmw-test-drive-form' className='bmw-test-drive-form'>
            <div className='bmw-test-drive-bg'>
                <img src='./assets/test-drive/bmw-ix-l.png' alt='bmw-ix-l' />
                <img src='./assets/test-drive/bmw-ix-r.png' alt='bmw-ix-r' />
                {/*<img src='./assets/test-drive/triangle-1.png' alt='triangle-1' />
                <img src='./assets/test-drive/triangle-2.png' alt='triangle-2' />
                <img src='./assets/test-drive/triangle-3.png' alt='triangle-3' /> */}
            </div>
            <div className='bmw-test-drive-wrapper'>
                <h3>UMÓW JAZDĘ PRÓBNĄ <sup>BMW iX</sup></h3>
                <p>Zachęcamy do ograniczenia poruszania się i pozostania w domu.</p>
                <p>Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.</p>
                <form>
                    <p>Wypełnij formularz swoimi danymi.</p>
                    <ul>
                        <li>
                            <input type='radio' id='male' name='sex' value='male' required />
                            <label for='male'>Pan</label>
                            <input type='radio' id='female' name='sex' value='female' required />
                            <label for='female'>Pani</label>
                        </li>
                        <li>
                            <input type='text' name='firstname' placeholder='Imię*' required />
                        </li>
                        <li>
                            <input type='text' name='surname' placeholder='Nazwisko*' required />
                        </li>
                        <li>
                            <input type='text' name='email' placeholder='E-mail*' required />
                        </li>
                        <li>
                            <input type='text' name='phone_number' placeholder='Numer telefonu*' required />
                        </li>
                        <li>
                            <input className='bmw-default-btn' type='submit' value='WYŚLIJ' />
                        </li>
                    </ul>
                </form>
            </div> 
        </section>
    );
}

export default TestDriveForm;